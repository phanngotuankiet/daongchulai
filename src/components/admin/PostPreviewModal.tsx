import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import RichTextDisplay from './RichTextDisplay';

interface PostPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  post: {
    title: string;
    body: string;
    status: string;
    created_at: string;
    user?: {
      username: string;
    };
  };
}

const PostPreviewModal: React.FC<PostPreviewModalProps> = ({
  isOpen,
  onClose,
  post
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div className="relative top-10 mx-auto p-5 border w-11/12 max-w-4xl shadow-lg rounded-md bg-white">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Xem trước bài viết</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        <div className="space-y-4">
          {/* Post Header */}
          <div className="border-b pb-4">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {post.title}
            </h1>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>Tác giả: {post.user?.username}</span>
              <span>•</span>
              <span>Ngày tạo: {new Date(post.created_at).toLocaleDateString('vi-VN')}</span>
              <span>•</span>
              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                post.status === 'published' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {post.status === 'published' ? 'Đã xuất bản' : 'Bản nháp'}
              </span>
            </div>
          </div>

          {/* Post Content */}
          <div className="prose max-w-none">
            <RichTextDisplay 
              content={post.body}
              className="text-gray-700"
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-600 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-700"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostPreviewModal;
