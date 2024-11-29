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
				target: "http://localhost:5000",
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
