import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { 
  InsertProductImageDocument, 
  DeleteProductImageDocument,
  UpdateProductImageDocument 
} from '../../generated/graphql';

interface ProductImageUploadProps {
  productId: number;
  images: Array<{
    id: number;
    image_url: string;
    alt_text?: string;
    sort_order: number;
    is_primary: boolean;
  }>;
  onImagesChange: () => void;
}

const ProductImageUpload: React.FC<ProductImageUploadProps> = ({
  productId,
  images,
  onImagesChange
}) => {
  const [uploading, setUploading] = useState(false);
  const [insertImage] = useMutation(InsertProductImageDocument);
  const [deleteImage] = useMutation(DeleteProductImageDocument);
  const [updateImage] = useMutation(UpdateProductImageDocument);

  const handleFileUpload = async (files: FileList | null) => {
    if (!files || files.length === 0) return;

    setUploading(true);
    
    try {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        
        // Get presigned URL from backend
        const response = await fetch(`${import.meta.env.VITE_HASURA_URL?.replace(':8080', ':4002') || 'http://localhost:4002'}/api/upload/generate-upload-url`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fileName: file.name,
            fileType: file.type
          })
        });

        if (response.ok) {
          const { uploadUrl, fileUrl } = await response.json();
          
          // Upload file to S3
          const uploadResponse = await fetch(uploadUrl, {
            method: 'PUT',
            body: file,
            headers: {
              'Content-Type': file.type,
            }
          });

          if (uploadResponse.ok) {
            // Insert into database
            await insertImage({
              variables: {
                object: {
                  product_id: productId,
                  image_url: fileUrl,
                  alt_text: file.name,
                  sort_order: images.length + i,
                  is_primary: images.length === 0 && i === 0 // First image is primary
                }
              }
            });
          } else {
            console.error('S3 upload failed:', uploadResponse.status);
            alert(`Upload ảnh ${file.name} thất bại.`);
          }
        } else {
          console.error('Failed to get upload URL:', response.status);
          alert('Không thể tạo URL upload. Vui lòng thử lại.');
        }
      }
      
      onImagesChange();
    } catch (error) {
      console.error('Upload error:', error);
      alert('Upload ảnh thất bại. Vui lòng thử lại.');
    } finally {
      setUploading(false);
    }
  };

  const handleDeleteImage = async (imageId: number) => {
    if (window.confirm('Bạn có chắc muốn xóa ảnh này?')) {
      try {
        await deleteImage({
          variables: { id: imageId }
        });
        onImagesChange();
      } catch (error) {
        console.error('Delete error:', error);
        alert('Xóa ảnh thất bại.');
      }
    }
  };

  const handleSetPrimary = async (imageId: number) => {
    try {
      // Remove primary from all images
      await Promise.all(
        images.map(img => 
          updateImage({
            variables: {
              id: img.id,
              updates: { is_primary: false }
            }
          })
        )
      );
      
      // Set new primary
      await updateImage({
        variables: {
          id: imageId,
          updates: { is_primary: true }
        }
      });
      
      onImagesChange();
    } catch (error) {
      console.error('Set primary error:', error);
      alert('Đặt ảnh chính thất bại.');
    }
  };

  return (
    <div className="product-image-upload">
      <h3 className="text-lg font-semibold mb-4">Hình ảnh sản phẩm</h3>
      
      {/* Upload Area */}
      <div className="mb-6">
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={(e) => handleFileUpload(e.target.files)}
          className="hidden"
          id="product-image-upload"
          disabled={uploading}
        />
        <label
          htmlFor="product-image-upload"
          className={`inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer ${
            uploading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {uploading ? 'Đang upload...' : 'Chọn ảnh'}
        </label>
        <p className="text-sm text-gray-500 mt-2">
          Có thể chọn nhiều ảnh cùng lúc. Ảnh đầu tiên sẽ là ảnh chính.
        </p>
      </div>

      {/* Images Grid */}
      {images.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image) => (
            <div key={image.id} className="relative group">
              <img
                src={image.image_url}
                alt={image.alt_text || 'Product image'}
                className="w-full h-32 object-cover rounded-lg border"
              />
              
              {/* Primary Badge */}
              {image.is_primary && (
                <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                  Chính
                </div>
              )}
              
              {/* Actions */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                <div className="flex space-x-2">
                  {!image.is_primary && (
                    <button
                      onClick={() => handleSetPrimary(image.id)}
                      className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
                    >
                      Đặt chính
                    </button>
                  )}
                  <button
                    onClick={() => handleDeleteImage(image.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
                  >
                    Xóa
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {images.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <p>Chưa có ảnh nào. Hãy upload ảnh cho sản phẩm.</p>
        </div>
      )}
    </div>
  );
};

export default ProductImageUpload;
