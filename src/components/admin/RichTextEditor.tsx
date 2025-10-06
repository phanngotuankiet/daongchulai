import React, { useMemo } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';

// Custom image upload handler with S3
const ImageUpload = async () => {
  const input = document.createElement('input');
  input.setAttribute('type', 'file');
  input.setAttribute('accept', 'image/*');
  input.click();

  return new Promise((resolve, reject) => {
    input.onchange = async () => {
      const file = input.files?.[0];
      if (file) {
        try {
          console.log('Uploading file:', file.name, file.type);
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

          console.log('Backend response status:', response.status);
          const { uploadUrl, fileUrl } = await response.json();
          console.log('Got upload URL:', uploadUrl.substring(0, 100) + '...');

          // Upload file to S3
          console.log('Uploading to S3...');
          const uploadResponse = await fetch(uploadUrl, {
            method: 'PUT',
            body: file,
            headers: {
              'Content-Type': file.type,
            }
          });

          console.log('S3 upload response status:', uploadResponse.status);
          if (uploadResponse.ok) {
            console.log('Upload successful:', fileUrl);
            resolve(fileUrl);
          } else {
            const errorText = await uploadResponse.text();
            console.error('Upload failed:', uploadResponse.status, errorText);
            reject(new Error(`Upload failed: ${uploadResponse.status}`));
          }
        } catch (error) {
          console.error('Upload error:', error);
          reject(error);
        }
      }
    };
  });
};

// Register image upload handler
const BlockEmbed = Quill.import('blots/block/embed');

class ImageBlot extends BlockEmbed {
  static create(value: any) {
    const node = super.create();
    node.setAttribute('src', value.url);
    node.setAttribute('alt', value.alt || '');
    node.setAttribute('style', 'max-width: 100%; height: auto; margin: 10px 0;');
    return node;
  }

  static value(node: any) {
    return {
      url: node.getAttribute('src'),
      alt: node.getAttribute('alt')
    };
  }
}

ImageBlot.blotName = 'image';
ImageBlot.tagName = 'img';
Quill.register(ImageBlot);

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  height?: number;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({
  value,
  onChange,
  placeholder = "Nhập nội dung bài viết...",
  height = 300
}) => {
  const modules = useMemo(() => ({
    toolbar: {
      container: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'font': [] }],
        [{ 'size': ['small', false, 'large', 'huge'] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'script': 'sub' }, { 'script': 'super' }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'indent': '-1' }, { 'indent': '+1' }],
        [{ 'direction': 'rtl' }],
        [{ 'align': [] }],
        ['link', 'image', 'video'],
        ['blockquote', 'code-block'],
        ['clean']
      ],
      handlers: {
        image: () => {
          ImageUpload().then((result: any) => {
            const quill = (window as any).quill;
            if (quill && result) {
              const range = quill.getSelection();
              quill.insertEmbed(range.index, 'image', {
                url: result,
                alt: 'Uploaded image'
              });
            }
          }).catch((error) => {
            console.error('Image upload failed:', error);
            alert('Upload ảnh thất bại. Vui lòng thử lại.');
          });
        }
      }
    },
    clipboard: {
      matchVisual: false,
    }
  }), []);

  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike',
    'color', 'background',
    'script',
    'list', 'bullet', 'indent',
    'direction', 'align',
    'link', 'image', 'video',
    'blockquote', 'code-block'
  ];

  return (
    <div className="rich-text-editor">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder={placeholder}
        style={{ height: `${height}px`, marginBottom: '50px' }}
      />
      <style jsx global>{`
        .rich-text-editor .ql-editor {
          min-height: ${height - 50}px;
        }
        .rich-text-editor .ql-toolbar {
          border-top: 1px solid #ccc;
          border-left: 1px solid #ccc;
          border-right: 1px solid #ccc;
        }
        .rich-text-editor .ql-container {
          border-bottom: 1px solid #ccc;
          border-left: 1px solid #ccc;
          border-right: 1px solid #ccc;
        }
        .rich-text-editor .ql-editor img {
          max-width: 100%;
          height: auto;
          margin: 10px 0;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
};

export default RichTextEditor;
