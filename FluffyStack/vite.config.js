// vite.config.js
import { defineConfig } from 'vite';
import path from 'path';
import fs from 'fs';

function cleanUrlPlugin() {
  return {
    name: 'clean-url-plugin',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.originalUrl.length > 1 && !path.extname(req.originalUrl)) {
          const filePath = path.join(process.cwd(), `src/pages${req.originalUrl}.html`);

          if (fs.existsSync(filePath)) {
            req.url = `/src/pages${req.originalUrl}.html`;
          }
        }
        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [
    cleanUrlPlugin()
  ],
  build: {
    rollupOptions: {
      input: {
        pancakes: path.resolve(__dirname, 'src/pages/pancakes.html'),
        about: path.resolve(__dirname, 'src/pages/about.html')
      }
    }
  }
});