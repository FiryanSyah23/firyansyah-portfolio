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
	title: {
		default: "Firyan Syah | Software Engineering",
		template: "%s | Firyan Syah", // tiap page bisa custom
	},
	description:
		"Hi, I'm Firyan Syah — a Software Engineering who loves turning ideas into real web products using Next.js, MongoDB and Express.js",
	verification: {
		google: "Qi3tFwJMO2-UkhkngxLnY20qrdN0PfyqvvLqBx4BRnQ",
	},
	keywords: [
		"firyan syah",
		"software engineering",
		"web developer ",
		"banda aceh",
		"freelance web developer indonesia",
		"next.js developer indonesia",
		"full stack developer ceh",
		"firyan syah developer",
		"fisotasym",
		"jasa pembuatan website banda aceh",
		"jasa pembuatan website indonesia",
	],
	authors: [{ name: "Firyan Syah" }],
	openGraph: {
		type: "website",
		url: "https://firyansyah-portfolio.vercel.app",
		title: "Firyan Syah | Software Engineering",
		description:
			"Hi, I'm Firyan Syah — Software Engineering. I build web apps, IoT systems, and embedded system.",
		images: [{ url: "/octaSys.png", width: 1200, height: 630 }],
	},
};

export default function RootLayout({ children }) {
	return (
		<html
			lang="id"
			className={`${geistSans.variable} ${geistMono.variable} h-full scrollbar-none scroll-smooth`}
		>
			<body className="bg-radial-[at_50%_100%] from-dark to-[#000000]  bg-fixed">
				<main>{children}</main>
			</body>
		</html>
	);
}
