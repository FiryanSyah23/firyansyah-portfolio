/** @type {import('next').NextConfig} */
const nextConfig = {
	/* config options here */
	reactCompiler: true,
	images: {
		remotePatterns: [
			{ protocol: "https", hostname: "github.com" },
			{ protocol: "https", hostname: "avatars.githubusercontent.com" },
		],
	},
	// Redirect domain tanpa www ke www
	async redirects() {
		return [];
	},
};

export default nextConfig;
