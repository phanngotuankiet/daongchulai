# Hướng dẫn Migration từ Hasura sang NestJS Backend

## 🚀 Tổng quan

Backend mới được xây dựng với NestJS và GraphQL, thay thế Hasura với các tính năng tốt hơn:

- ✅ **Authentication** với JWT
- ✅ **Validation** tự động
- ✅ **Type Safety** hoàn toàn
- ✅ **Custom Business Logic**
- ✅ **Better Error Handling**
- ✅ **Scalable Architecture**

## 📋 Các bước Migration

### 1. Cài đặt Backend mới

```bash
cd daongchulai-backend
npm install
cp env.example .env
# Chỉnh sửa .env với JWT_SECRET phù hợp
npm run start:dev
```

Backend sẽ chạy tại: `http://localhost:4000/graphql`

### 2. Cập nhật Frontend

#### Bước 1: Cập nhật Environment Variables

Thêm vào file `.env` của frontend:

```env
# Backend mới
VITE_GRAPHQL_ENDPOINT=http://localhost:4000/graphql

# Giữ lại Hasura cũ để test song song (tùy chọn)
VITE_HASURA_ENDPOINT=http://localhost:8080/v1/graphql
```

#### Bước 2: Tạo Apollo Client mới

File `src/apollo/client-new.ts` đã được tạo sẵn với cấu hình phù hợp.

#### Bước 3: Cập nhật GraphQL Queries

Các file GraphQL mới đã được tạo:
- `src/graphql/laterite_types_new.graphql`
- `src/graphql/laterite_sizes_new.graphql`
- `src/graphql/auth.graphql`

#### Bước 4: Generate Types mới

```bash
# Sử dụng codegen config mới
npx graphql-codegen --config codegen-new.ts
```

#### Bước 5: Cập nhật Components

Thay thế import từ Apollo client cũ sang client mới:

```typescript
// Cũ
import client from './apollo/client';

// Mới
import client from './apollo/client-new';
```

## 🔄 So sánh API

### Hasura (Cũ)
```graphql
query LateriteSizes($where: laterite_sizes_bool_exp = {}) {
  laterite_sizes(where: $where) {
    id
    size
    price
    color
    stock_quantity
    status
    weight
    laterite_type_id
  }
}
```

### NestJS Backend (Mới)
```graphql
query LateriteSizes {
  lateriteSizes {
    id
    size
    price
    color
    stock_quantity
    status
    weight
    laterite_type_id
    lateriteType {
      id
      type
      origin
      description
      hardness_level
    }
    created_at
    updated_at
  }
}
```

## 🆕 Tính năng mới

### 1. Authentication
```graphql
mutation Login($loginInput: LoginInput!) {
  login(loginInput: $loginInput)
}

mutation Register($registerInput: RegisterInput!) {
  register(registerInput: $registerInput)
}
```

### 2. Advanced Queries
```graphql
# Tìm theo khoảng giá
query LateriteSizesByPriceRange($minPrice: Float!, $maxPrice: Float!) {
  lateriteSizesByPriceRange(minPrice: $minPrice, maxPrice: $maxPrice) {
    id
    size
    price
    lateriteType {
      type
      origin
    }
  }
}

# Tìm theo trạng thái
query LateriteSizesByStatus($status: String!) {
  lateriteSizesByStatus(status: $status) {
    id
    size
    price
    stock_quantity
  }
}
```

### 3. CRUD Operations
```graphql
# Tạo mới
mutation CreateLateriteType($createLateriteTypeInput: CreateLateriteTypeInput!) {
  createLateriteType(createLateriteTypeInput: $createLateriteTypeInput) {
    id
    type
    origin
  }
}

# Cập nhật
mutation UpdateLateriteSize($id: Int!, $updateLateriteSizeInput: UpdateLateriteSizeInput!) {
  updateLateriteSize(id: $id, updateLateriteSizeInput: $updateLateriteSizeInput) {
    id
    size
    price
  }
}

# Xóa
mutation RemoveLateriteType($id: Int!) {
  removeLateriteType(id: $id)
}
```

## 🛠️ Testing Migration

### 1. Test Backend riêng biệt
```bash
# Terminal 1: Chạy backend mới
cd daongchulai-backend
npm run start:dev

# Terminal 2: Test GraphQL Playground
# Mở http://localhost:4000/graphql
```

### 2. Test Frontend với Backend mới
```bash
# Cập nhật .env
VITE_GRAPHQL_ENDPOINT=http://localhost:4000/graphql

# Chạy frontend
npm run dev
```

### 3. Test song song (Optional)
```bash
# Terminal 1: Hasura cũ
# Terminal 2: NestJS mới
# Terminal 3: Frontend với config có thể switch
```

## 🚀 Deployment

### 1. Deploy Backend
```bash
# Với Docker
docker-compose up --build -d

# Hoặc deploy lên Vercel/Railway
```

### 2. Cập nhật Frontend Environment
```env
# Production
VITE_GRAPHQL_ENDPOINT=https://your-backend-domain.com/graphql
```

## 🔧 Troubleshooting

### Lỗi thường gặp:

1. **CORS Error**
   - Kiểm tra CORS config trong `main.ts`
   - Thêm domain frontend vào allowed origins

2. **Authentication Error**
   - Kiểm tra JWT_SECRET
   - Verify token format

3. **GraphQL Schema Error**
   - Regenerate schema: `npm run build` trong backend
   - Regenerate types: `npx graphql-codegen --config codegen-new.ts`

4. **Database Error**
   - Kiểm tra SQLite file permissions
   - Verify database connection

## 📞 Support

Nếu gặp vấn đề trong quá trình migration, hãy:

1. Kiểm tra logs backend: `npm run start:dev`
2. Kiểm tra GraphQL Playground: `http://localhost:4000/graphql`
3. Verify environment variables
4. Check network connectivity

## 🎯 Lợi ích sau Migration

- **Performance**: Tối ưu hóa queries
- **Security**: JWT authentication
- **Maintainability**: Code dễ maintain hơn
- **Scalability**: Dễ dàng thêm features mới
- **Type Safety**: TypeScript end-to-end
- **Custom Logic**: Business logic tùy chỉnh

