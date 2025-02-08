import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/daongchulai/', // Thay 'daongchulai' bằng tên repository của bạn
  base: '/', // Thay đổi từ '/daongchulai/' thành '/' khi dùng custom domain
})
