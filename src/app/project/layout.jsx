// src/app/project/layout.jsx
import NavbarProject from "@/components/layout/NavbarProject/NavbarProject";

export const metadata = {
	title: "All Projects",
	description: "Explore all projects by Firyan Syah — web apps, desktop apps, and IoT systems.",
	alternates: { canonical: "https://firyansyah-portfolio.vercel.app/project" },
};

export default function ProjectLayout({ children }) {
	return (
		<>
			<NavbarProject />
			<main>{children}</main>
		</>
	);
}
