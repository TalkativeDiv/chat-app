import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import million from 'million/compiler';
// million.vite()
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [million.vite()],
});
