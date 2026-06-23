export default function robots() {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: [],
		},
		sitemap: "https://firyansyah-portfolio.vercel.app/sitemap.xml",
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
		},
	};
}
