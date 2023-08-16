import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";

const manifestForPlugin: Partial<VitePWAOptions> = {
  registerType: "prompt",
  includeAssets: ["favicon.ico", "vite.svg"],
  manifest: {
    name: "Weather Ups",
    short_name: "Weathe Ups",
    description: "An app that can show weather forecast for your city.",
    icons: [
      {
        src: "logo1.png",
        sizes: "124x144",
        type: "image/jpg",
        purpose: "any"
      },
      {
        src: "logo192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any"
      },
      {
        src: "favicon.ico",
        sizes: "41x48",
        type: "image",
        purpose: "maskable"
      },
      {
        src: "logo512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any"
      }
    ],
    theme_color: "#171717",
    background_color: "#e8ebf2",
    display: "standalone",
    start_url: "/",
    orientation: "portrait",
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react(), VitePWA(manifestForPlugin)],
})

/* me gusta la pizza*/


