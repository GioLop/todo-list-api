import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import sass from 'sass';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  
  const PORT = env.API_PORT ? Number(env.UI_SERVICE_PORT) : 8000;

  return {
    server: {
      port: PORT,
      host: '0.0.0.0',
    },
    plugins: [react()],
    css: {
      preprocessorOptions: {
        scss: {
          implementation: sass
        }
      }
    }
  }
});
