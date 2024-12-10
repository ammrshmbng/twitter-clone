import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		outDir: "dist",
		assetsDir: "assets",
		// Tambahkan ini untuk menangani routing
		rollupOptions: {
			output: {
				manualChunks: undefined,
			},
		},
	},
	server: {
		port: 3000,
		proxy: {
			"/api": {
				target: "https://twitter-clone-production-8ae4.up.railway.app",
				changeOrigin: true,
			},
		},
	},
	// Tambahkan base URL
	base: "/",
	// Tambahkan konfigurasi untuk production
	preview: {
		port: 3000,
		host: true,
	},
});
