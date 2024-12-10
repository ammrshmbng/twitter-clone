import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const originalFetch = window.fetch;
window.fetch = async (url, options = {}) => {
	const baseURL = 'https://twitter-clone-production-8ae4.up.railway.app';
	
	// Jika URL dimulai dengan /api, tambahkan baseURL
	if (url.startsWith('/api')) {
		url = `${baseURL}${url}`;
	}

	return originalFetch(url, {
		...options,
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
			...options?.headers,
		},
	});
};

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
				<App />
			</QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
