// src/app/sitemap.js
import dataProjects from "@/data/projects";

export default function sitemap() {
	const projectPages = dataProjects.map((project) => ({
		url: `https://firyansyah-portfolio.vercel.app/project/${project.slug}`,
		lastModified: new Date(),
	}));

	return [
		{
			url: "https://firyansyah-portfolio.vercel.app",
			lastModified: new Date(),
		},
		{
			url: "https://firyansyah-portfolio.vercel.app/project",
			lastModified: new Date(),
		},
		...projectPages, // ← otomatis generate dari data
	];
}
