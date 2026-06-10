/** @type {import('next').NextConfig} */
const nextConfig = {
	reactCompiler: true,
	images: {
		remotePatterns: [
			// GitHub
			{ protocol: "https", hostname: "github.com" },
			{ protocol: "https", hostname: "avatars.githubusercontent.com" },

			// Flaticon CDN (untuk icon solar panel & IoT)
			{ protocol: "https", hostname: "cdn-icons-png.flaticon.com" },

			// Wikimedia Commons (untuk logo UIN Ar-Raniry)
			{ protocol: "https", hostname: "upload.wikimedia.org" },
		],
	},
	async redirects() {
		return [];
	},
};

export default nextConfig;
