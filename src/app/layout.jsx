import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "remixicon/fonts/remixicon.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata = {
	metadataBase: new URL("https://firyansyah-portfolio.vercel.app"),
	alternates: {
		canonical: "https://firyansyah-portfolio.vercel.app",
	},
	title: {
		default: "Firyan Syah | Software Engineer",
		template: "%s | Firyan Syah", // tiap page bisa custom
	},
	description:
		"Hi, I'm Firyan Syah, a Software Engineer passionate about turning ideas into real-world web products with responsive and minimalist designs.",
	verification: {
		google: "Qi3tFwJMO2-UkhkngxLnY20qrdN0PfyqvvLqBx4BRnQ",
	},
	keywords: [
		"firyan syah",
		"software engineer",
		"web developer",
		"banda aceh",
		"freelance web developer indonesia",
		"next.js developer indonesia",
		"full stack developer aceh",
		"firyan syah developer",
		"fisoctasym",
		"jasa pembuatan website banda aceh",
		"jasa pembuatan website indonesia",
	],
	authors: [{ name: "Firyan Syah" }],
	openGraph: {
		type: "website",
		url: "https://firyansyah-portfolio.vercel.app",
		title: "Firyan Syah | Software Engineer",
		description:
			"Hi, I'm Firyan Syah — Software Engineering. I build web apps, IoT systems, and embedded system.",
		images: [{ url: "/OctaSym.png", width: 1200, height: 630 }],
	},
	twitter: {
		card: "summary_large_image",
		title: "Firyan Syah | Software Engineer",
		description:
			"Hi, I'm Firyan Syah, a Software Engineer passionate about turning ideas into real-world web products.",
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
		<html
			lang="en"
			className={`${geistSans.variable} ${geistMono.variable} h-full scrollbar-none scroll-smooth`}
		>
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</head>
			<body className="bg-radial-[at_50%_100%] from-dark to-[#000000]  bg-fixed">
				<main>{children}</main>
			</body>
		</html>
	);
}
