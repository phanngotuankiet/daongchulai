# 🎛️ Admin System - Đá Ong Chủ Lai

Hệ thống quản trị admin được tích hợp trực tiếp vào frontend daongchulai, cho phép quản lý toàn bộ nội dung website.

## 🚀 Tính năng

### 📊 Dashboard Admin
- Thống kê tổng quan: Users, Sản phẩm, Bài viết, Categories
- Quick actions để truy cập nhanh các chức năng
- Giao diện hiện đại với Tailwind CSS

### 🛍️ Quản lý Sản phẩm
- ✅ Xem danh sách sản phẩm đá ong
- ✅ Thêm/sửa/xóa sản phẩm
- ✅ Quản lý giá, tồn kho, hình ảnh
- ✅ Phân loại theo categories
- ✅ Trạng thái hoạt động/không hoạt động

### 📝 Quản lý Bài viết
- ✅ Xem danh sách bài viết
- ✅ Thêm/sửa/xóa bài viết
- ✅ Quản lý trạng thái (draft/published)
- ✅ Editor nội dung đơn giản

### 🏷️ Quản lý Categories
- ✅ Xem danh sách categories
- ✅ Thêm/sửa/xóa categories
- ✅ Phân loại theo type (product/post)
- ✅ Giao diện card đẹp mắt

### 👥 Quản lý Users
- ✅ Xem danh sách users
- ✅ Thêm/sửa/xóa users
- ✅ Phân quyền admin/user
- ✅ Quản lý tài khoản

## 🔐 Authentication

### Đăng nhập Admin
- **URL**: `/admin/login`
- **Admin**: `admin` / `admin123`
- **User**: `user` / `user123`

### Bảo vệ Routes
- Tất cả routes admin được bảo vệ bởi `AdminRoute` component
- Kiểm tra token và role trong localStorage
- Redirect về login nếu không có quyền

## 🛠️ Công nghệ sử dụng

### Frontend
- **React 18** + **TypeScript**
- **Apollo Client** cho GraphQL
- **Tailwind CSS** cho styling
- **React Router** cho routing
- **Heroicons** cho icons

### Backend Integration
- **Hasura GraphQL** API
- **PostgreSQL** database
- **Admin Secret** authentication
- **Real-time** data sync

## 📁 Cấu trúc Files

```
src/
├── pages/admin/
│   ├── AdminLogin.tsx          # Trang đăng nhập
│   ├── AdminDashboard.tsx      # Dashboard chính
│   ├── AdminProducts.tsx       # Quản lý sản phẩm
│   ├── AdminPosts.tsx          # Quản lý bài viết
│   ├── AdminCategories.tsx     # Quản lý categories
│   └── AdminUsers.tsx          # Quản lý users
├── components/admin/
│   └── AdminRoute.tsx          # Bảo vệ routes
├── apollo/
│   └── admin-client.ts         # Apollo client cho admin
└── graphql/admin/
    └── admin.graphql           # GraphQL queries/mutations
```

## 🚀 Cách sử dụng

### 1. Truy cập Admin
```bash
# Truy cập website
http://localhost:5173

# Click vào link "Admin" trong header
# Hoặc truy cập trực tiếp
http://localhost:5173/admin/login
```

### 2. Đăng nhập
- Username: `admin`
- Password: `admin123`

### 3. Quản lý nội dung
- **Dashboard**: Xem thống kê tổng quan
- **Sản phẩm**: Quản lý các sản phẩm đá ong
- **Bài viết**: Quản lý tin tức, hướng dẫn
- **Categories**: Phân loại sản phẩm và bài viết
- **Users**: Quản lý tài khoản người dùng

## 🔧 Development

### Chạy Development Server
```bash
# Frontend
npm run dev

# Backend (Hasura + PostgreSQL)
cd ../daongchulai.api
docker-compose up -d
```

### Generate GraphQL Types
```bash
npm run generate
```

### URLs quan trọng
- **Frontend**: http://localhost:5173
- **Hasura Console**: http://localhost:8080/console
- **GraphQL API**: http://localhost:8080/v1/graphql
- **Admin Login**: http://localhost:5173/admin/login

## 📊 Database Schema

### Tables
- **users**: Tài khoản admin/user
- **products**: Sản phẩm đá ong
- **posts**: Bài viết tin tức
- **categories**: Phân loại sản phẩm/bài viết

### Relationships
- `products.user_id` → `users.id`
- `products.category_id` → `categories.id`
- `posts.user_id` → `users.id`

## 🎨 UI/UX Features

### Responsive Design
- ✅ Mobile-first approach
- ✅ Tablet và desktop optimized
- ✅ Touch-friendly interface

### Modern UI Components
- ✅ Modal forms cho CRUD operations
- ✅ Data tables với sorting
- ✅ Status badges và indicators
- ✅ Loading states và error handling
- ✅ Confirmation dialogs

### User Experience
- ✅ Intuitive navigation
- ✅ Quick actions từ dashboard
- ✅ Breadcrumb navigation
- ✅ Form validation
- ✅ Success/error feedback

## 🔒 Security

### Authentication
- ✅ Token-based authentication
- ✅ Role-based access control
- ✅ Protected routes
- ✅ Session management

### Data Protection
- ✅ Input validation
- ✅ SQL injection prevention (Hasura)
- ✅ XSS protection
- ✅ CSRF protection

## 📈 Performance

### Optimization
- ✅ Apollo Client caching
- ✅ Lazy loading components
- ✅ Optimized queries
- ✅ Image optimization
- ✅ Bundle splitting

## 🚀 Deployment

### Production Ready
- ✅ Environment variables
- ✅ Error boundaries
- ✅ Logging
- ✅ Monitoring
- ✅ Backup strategies

---

## 📞 Support

Nếu có vấn đề gì với admin system, hãy liên hệ:
- **Email**: support@daongchulai.com
- **Phone**: 0913019915

---

**🎉 Admin System hoàn chỉnh và sẵn sàng sử dụng!**
