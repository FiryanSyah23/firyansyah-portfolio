// src/app/project/layout.jsx
import NavbarProject from "@/components/layout/NavbarProject/NavbarProject";


export default function ProjectLayout({ children }) {
	return (
		<>
			<NavbarProject />
			<main>{children}</main>
		</>
	);
}
