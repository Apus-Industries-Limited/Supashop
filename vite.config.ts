import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import { VitePWA } from 'vite-plugin-pwa'
import {URL} from "url"

const __dirname = path.dirname(new URL(import.meta.url).pathname);


const vitePWA = VitePWA({
  manifest: {
    name: "SupaShop Ecommerce",
    short_name: "SupaShop",
    description: "E-commerce platform bringing accessibility and transparency to your doorstep 🧡",
    start_url: "/",
    display: "standalone",
    theme_color: "#ffffff",
    background_color: "#ffffff",
    icons: [
      {
        src: "/logo.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png"
      }, 
      {
        src: "/logo.png",
        sizes: "64x64 32x32 24x24 16x16",
        type: "image/x-icon"
      }
    ],
    lang: "en-US",
    dir: "ltr",
    orientation: "portrait-primary"
  }

})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),vitePWA],
  resolve: {
    alias: {
      "@":path.resolve(__dirname,"./src"),
    }
  }
})
