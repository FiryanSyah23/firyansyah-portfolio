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
		default: "Firyan Syah | Dev Full-stack ",
		template: "%s | Firyan Syah", // tiap page bisa custom
	},
	description: "Hi, I'm Firyan Syah — a Full Stack Developer who loves turning ideas into real web products using Next.js, MongoDB and Express.js",
	verification: {
		google: "Qi3tFwJMO2-UkhkngxLnY20qrdN0PfyqvvLqBx4BRnQ",
	},
	keywords: [
		"web developer Banda Aceh",
		"freelance web developer Indonesia",
		"next.js developer Indonesia",
		"full stack developer Aceh",
		"Firyan Syah developer",
		"FiSOCTASYM developer",
		"jasa pembuatan website Banda Aceh",
	],
	authors: [{ name: "Firyan Syah" }],
	openGraph: {
		type: "website",
		url: "https://firyansyah-portfolio.vercel.app",
		title: "Firyan Syah | Full Stack Developer",
		description: "Hi, I'm Firyan Syah — Full Stack Developer from Banda Aceh. I build web apps, IoT systems, and embedded software.",
		images: [{ url: "/octaSys.png", width: 1200, height: 630 }],
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="id" className={`${geistSans.variable} ${geistMono.variable} h-full scrollbar-none scroll-smooth`}>
			<body className="bg-radial-[at_50%_100%] from-dark to-[#000000]  bg-fixed">
				<main>{children}</main>
			</body>
		</html>
	);
}
