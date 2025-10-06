# Đá Ong Chợ Lại - Frontend

Website thương mại và hệ thống quản lý admin cho sản phẩm đá ong tự nhiên Chu Lai.

## 🏗️ Kiến trúc

- **React 18**: Frontend framework
- **TypeScript**: Type safety
- **Vite**: Build tool
- **Tailwind CSS**: Styling
- **Apollo Client**: GraphQL client
- **Docker**: Containerization

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- Docker & Docker Compose (optional)
- Backend API đang chạy

### 1. Clone repository
```bash
git clone https://github.com/phanngotuankiet/daongchulai.git
cd daongchulai
```

### 2. Chạy với Docker (Recommended)
```bash
# Chạy frontend với Docker
./start-frontend-docker.sh

# Hoặc chạy thủ công
docker-compose up --build
```

### 3. Chạy không Docker
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### 4. Truy cập ứng dụng
- **Frontend**: http://localhost:3000
- **Admin Panel**: http://localhost:3000/admin

## 🛠️ Development

### Available Scripts
```bash
# Development
npm run dev              # Start development server
npm run build           # Build for production
npm run preview         # Preview production build
npm run lint            # Run ESLint

# GraphQL
npm run generate        # Generate GraphQL types

# Docker
./start-frontend-docker.sh    # Start với Docker
./stop-frontend-docker.sh     # Stop Docker services
```

### Environment Variables
```bash
VITE_HASURA_URL=http://localhost:8080
VITE_HASURA_ADMIN_SECRET=adminsecret123
```

## 🎯 Tính năng

### Public Website
- Trang chủ với thông tin sản phẩm đá ong
- Danh sách sản phẩm và dự án thi công
- Chi tiết sản phẩm với popup modal
- Thông tin liên hệ và bản đồ Google Maps
- Responsive design cho mobile và desktop
- SEO optimization

### Admin Panel
- **Dashboard**: Thống kê tổng quan
- **User Management**: Quản lý người dùng
- **Product Management**: CRUD sản phẩm
- **Post Management**: CRUD bài viết
- **Category Management**: CRUD danh mục
- **Password Management**: Đổi mật khẩu với Hasura Actions

## 📁 Cấu trúc dự án

```
src/
├── components/          # React components
│   ├── admin/          # Admin components
│   ├── common/         # Common components
│   ├── layout/         # Layout components
│   └── products/       # Product components
├── pages/              # Page components
│   ├── admin/          # Admin pages
│   └── ...             # Public pages
├── apollo/             # Apollo Client setup
├── graphql/            # GraphQL queries
│   └── admin/          # Admin GraphQL operations
├── generated/          # Generated GraphQL types
├── hooks/              # Custom hooks
├── utils/              # Utility functions
└── types/              # TypeScript types
```

## 🔐 Admin Panel

### Authentication
- Simple client-side authentication
- Protected routes với `AdminRoute`
- JWT token management

### Features
- **Dashboard**: Statistics và quick navigation
- **User Management**: Create, read, update, delete users
- **Product Management**: Full CRUD operations
- **Post Management**: Blog post management
- **Category Management**: Category organization
- **Password Change**: Secure password change với backend hashing

### Access
- **Admin**: `admin` / `admin123`
- **User**: `user` / `user123`

## 🐳 Docker

### Frontend Docker Service
```yaml
services:
  frontend:
    build:
      context: .
      dockerfile: Dockerfile.dev
    ports:
      - "3000:3000"
    environment:
      NODE_ENV: development
      VITE_HASURA_URL: http://localhost:8080
```

### Docker Commands
```bash
# Start frontend với Docker
./start-frontend-docker.sh

# Stop Docker services
./stop-frontend-docker.sh

# Manual Docker commands
docker-compose up --build
docker-compose down
```

## 🔧 GraphQL Integration

### Apollo Client Setup
- Separate client cho admin operations
- JWT authentication
- Error handling
- TypeScript integration

### Generated Types
```bash
# Generate GraphQL types
npm run generate
```

### Admin Operations
- User management queries/mutations
- Product CRUD operations
- Post management
- Category operations
- Password change với Hasura Actions

## 🎨 Styling

### Tailwind CSS
- Utility-first CSS framework
- Responsive design
- Dark mode support
- Custom components

### Components
- Reusable UI components
- Admin-specific styling
- Responsive layouts
- Loading states

## 🚀 Production Deployment

### Build
```bash
npm run build
```

### Environment Variables
```bash
VITE_HASURA_URL=https://your-hasura-url
VITE_HASURA_ADMIN_SECRET=your-admin-secret
```

### Docker Production
```bash
# Build production image
docker build -t daongchulai-frontend .

# Run production container
docker run -p 3000:3000 daongchulai-frontend
```

## 📚 Dependencies

### Core
- React 18
- TypeScript
- Vite
- Tailwind CSS

### GraphQL
- Apollo Client
- GraphQL Code Generator

### UI/UX
- React Router DOM
- Heroicons
- Framer Motion
- Swiper

### Development
- ESLint
- Prettier
- TypeScript

## 🔒 Security

- JWT authentication
- Protected admin routes
- Secure password handling
- CORS configuration
- Environment variable protection

## 📝 License

MIT License