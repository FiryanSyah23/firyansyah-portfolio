import "./globals.css";
import "remixicon/fonts/remixicon.css";
import { Analytics } from "@vercel/analytics/next";
import GoogleTranslateFix from "@/hooks/GoogleTranslateFix";

export const metadata = {
	metadataBase: new URL("https://firyansyah-portfolio.vercel.app"),
	alternates: {
		canonical: "https://firyansyah-portfolio.vercel.app",
	},
	title: {
		default: "Firyan Syah | Software Engineer",
		template: "%s | Firyan Syah",
	},
	description:
		"Hai, saya Firyan Syah, seorang Software Engineer yang bersemangat mengubah ide menjadi produk web dunia nyata dengan desain responsif dan minimalis.",
	verification: {
		google: "Qi3tFwJMO2-UkhkngxLnY20qrdN0PfyqvvLqBx4BRnQ",
	},
	icons: {
		icon: "/favicon.svg",
		shortcut: "/favicon.svg",
		apple: "/favicon.svg",
	},
	keywords: [
		"Firyan Syah",
		"Software Engineer",
		"Web Developer",
		"Freelance Web Developer",
		"Next.js Developer",
		"Full-Stack Developer ",
		"Firyan Syah Developer",
		"Fisoctasym",
		"Custom Website Development ",
		"Professional Web Developer ",
	],
	authors: [{ name: "Firyan Syah" }],
	openGraph: {
		type: "website",
		url: "https://firyansyah-portfolio.vercel.app",
		siteName: "Firyan Syah Portfolio",
		title: "Firyan Syah | Software Engineer",
		description:
			"Hai, saya Firyan Syah, seorang Software Engineer yang bersemangat mengubah ide menjadi produk web dunia nyata dengan desain responsif dan minimalis",
		images: [{ url: "/OctaSym.png", width: 1200, height: 630 }],
	},
	twitter: {
		card: "summary_large_image",
		title: "Firyan Syah | Software Engineer",
		description:
			"Hai, saya Firyan Syah, seorang Software Engineer yang bersemangat mengubah ide menjadi produk web dunia nyata dengan desain responsif dan minimalis",
		images: ["/OctaSym.png"],
	},
};

export const viewport = {
	width: "device-width",
	initialScale: 1,
	themeColor: "#090040",
};

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Firyan Syah",
	jobTitle: "Software Engineer",
	url: "https://firyansyah-portfolio.vercel.app",
	image: "https://firyansyah-portfolio.vercel.app/profile.png",
	sameAs: ["https://github.com/FiryanSyah23", "https://linkedin.com/in/firyansyah"],
	address: {
		"@type": "PostalAddress",
		addressLocality: "Banda Aceh",
		addressCountry: "ID",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" data-scroll-behavior="smooth">
			<body>
				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
				<GoogleTranslateFix />
				<Analytics />
				<main>{children}</main>
			</body>
		</html>
	);
}
