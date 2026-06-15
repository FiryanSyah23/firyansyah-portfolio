import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar/Navbar";
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
		default: "Hi, I'm Firyan Syah — a Full Stack Developer who loves turning ideas into real web products using Next.js, MongoDB and Express.js",
		template: "%s | Firyan Syah", // tiap page bisa custom
	},
	description: "Hello I'm firyan syah ,",
	verification: {
		google: "Qi3tFwJMO2-UkhkngxLnY20qrdN0PfyqvvLqBx4BRnQ",
	},
	keywords: ["web developer", "react developer", "next.js"],
	authors: [{ name: "Firyan Syah" }],
	openGraph: {
		// tampil saat link di-share
		type: "website",
		url: "https://firyansyah.vercel.app",
		title: "Firyan Syah | Full Stack Developer",
		description: "Portfolio ...",
		images: [{ url: "/og-image.png", width: 1200, height: 630 }],
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full scrollbar-none`}>
			<body className="bg-radial-[at_50%_100%] from-dark to-[#000000]  bg-fixed">
				<Navbar />
				<main>{children}</main>
			</body>
		</html>
	);
}
