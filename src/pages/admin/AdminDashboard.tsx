import React from 'react';
import { useQuery } from '@apollo/client';
import { AdminStatsDocument } from '../../generated/graphql';
import { 
  UsersIcon, 
  ShoppingBagIcon, 
  DocumentTextIcon, 
  TagIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const AdminDashboard: React.FC = () => {
  const { data, loading, error } = useQuery(AdminStatsDocument);

  if (loading) return <div className="flex justify-center items-center h-64">Loading...</div>;
  if (error) return <div className="text-red-500">Error: {error.message}</div>;

  const stats = [
    {
      name: 'Tổng Users',
      value: data?.users_aggregate?.aggregate?.count || 0,
      icon: UsersIcon,
      color: 'bg-blue-500',
    },
    {
      name: 'Tổng Sản phẩm',
      value: data?.products_aggregate?.aggregate?.count || 0,
      icon: ShoppingBagIcon,
      color: 'bg-green-500',
    },
    {
      name: 'Tổng Bài viết',
      value: data?.posts_aggregate?.aggregate?.count || 0,
      icon: DocumentTextIcon,
      color: 'bg-yellow-500',
    },
    {
      name: 'Tổng Categories',
      value: data?.categories_aggregate?.aggregate?.count || 0,
      icon: TagIcon,
      color: 'bg-purple-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard Admin</h1>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">
                Chào mừng Admin!
              </span>
              <a
                href="/admin/change-password"
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700"
              >
                Đổi mật khẩu
              </a>
              <button
                onClick={() => {
                  localStorage.removeItem('admin_token');
                  localStorage.removeItem('admin_user');
                  window.location.href = '/admin/login';
                }}
                className="bg-red-600 text-white px-4 py-2 rounded-md text-sm hover:bg-red-700"
              >
                Đăng xuất
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className={`${stat.color} rounded-md p-3`}>
                        <stat.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          {stat.name}
                        </dt>
                        <dd className="text-lg font-medium text-gray-900">
                          {stat.value}
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                Thao tác nhanh
              </h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <a
                  href="/admin/products"
                  className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 rounded-lg border border-gray-200 hover:border-blue-300"
                >
                  <div>
                    <span className="rounded-lg inline-flex p-3 bg-blue-50 text-blue-700 ring-4 ring-white">
                      <ShoppingBagIcon className="h-6 w-6" />
                    </span>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-medium">
                      <span className="absolute inset-0" aria-hidden="true" />
                      Quản lý Sản phẩm
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      Thêm, sửa, xóa sản phẩm đá ong
                    </p>
                  </div>
                </a>

                <a
                  href="/admin/posts"
                  className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 rounded-lg border border-gray-200 hover:border-blue-300"
                >
                  <div>
                    <span className="rounded-lg inline-flex p-3 bg-yellow-50 text-yellow-700 ring-4 ring-white">
                      <DocumentTextIcon className="h-6 w-6" />
                    </span>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-medium">
                      <span className="absolute inset-0" aria-hidden="true" />
                      Quản lý Bài viết
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      Tạo và quản lý tin tức, hướng dẫn
                    </p>
                  </div>
                </a>

                <a
                  href="/admin/categories"
                  className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 rounded-lg border border-gray-200 hover:border-blue-300"
                >
                  <div>
                    <span className="rounded-lg inline-flex p-3 bg-purple-50 text-purple-700 ring-4 ring-white">
                      <TagIcon className="h-6 w-6" />
                    </span>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-medium">
                      <span className="absolute inset-0" aria-hidden="true" />
                      Quản lý Categories
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      Phân loại sản phẩm và bài viết
                    </p>
                  </div>
                </a>

                <a
                  href="/admin/users"
                  className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 rounded-lg border border-gray-200 hover:border-blue-300"
                >
                  <div>
                    <span className="rounded-lg inline-flex p-3 bg-green-50 text-green-700 ring-4 ring-white">
                      <UsersIcon className="h-6 w-6" />
                    </span>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-medium">
                      <span className="absolute inset-0" aria-hidden="true" />
                      Quản lý Users
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      Quản lý tài khoản người dùng
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                Hoạt động gần đây
              </h3>
              <div className="text-center py-8">
                <ChartBarIcon className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">Chưa có hoạt động</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Các hoạt động sẽ được hiển thị ở đây khi có dữ liệu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
