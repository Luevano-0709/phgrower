import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";

const manifestForPlugin: Partial<VitePWAOptions> = {
  registerType: "prompt",
  includeAssets: ["vite.svg"],
  manifest: {
    name: "Weather Ups",
    short_name: "Weathe Ups",
    description: "An app that can show weather forecast for your city.",
    icons: [
      {
        src: "logo.png",
        sizes: "323x374",
        type: "image/png",
        purpose: ""
      },
      {
        src: "logo1.png",
        sizes: "124x144",
        type: "image/jpg"
      },
      {
        src: "logo192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "favicon.ico",
        sizes: "48x48",
        type: "image"
      }
    ],
    theme_color: "#171717",
    background_color: "#e8ebf2",
    display: "/",
    start_url: "/",
    orientation: "portrait",
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react(), VitePWA(manifestForPlugin)],
})




