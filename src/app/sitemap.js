// src/app/sitemap.js
import dataProjects from "@/data/projects";

const BASE_URL = "https://firyansyah-portfolio.vercel.app";

export default function sitemap() {
	const projectPages = dataProjects.map((project) => ({
		url: `${BASE_URL}/project/${project.slug}`,
		lastModified: project.updatedAt ? new Date(project.updatedAt) : new Date(),
		changeFrequency: "monthly",
		priority: 0.7,
	}));

	return [
		{
			url: BASE_URL,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 1.0,
		},
		{
			url: `${BASE_URL}/project`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.9,
		},
		...projectPages,
	];
}
