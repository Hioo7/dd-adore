import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: 
   [
    react(), 
    tailwindcss()  
  ],
  server: {
    allowedHosts: [
      'operators-overall-purpose-tagged.trycloudflare.com',
      "manufacturer-boost-grand-immunology.trycloudflare.com",
      "candy-began-stay-designs.trycloudflare.com",
      'needs-officials-pharmacology-integrated.trycloudflare.com'
    ]
  },
    base: "./"
})
