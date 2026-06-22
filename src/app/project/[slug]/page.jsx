// src/app/project/[slug]/page.jsx
import dataProjects from "@/data/projects";
import ViewProject from "../../../components/layout/ViewProject/ViewProject";

export async function generateMetadata({ params }) {
	const { slug } = await params;
	const project = dataProjects.find((item) => item.slug === slug);

	if (!project) {
		return { title: "Project Not Found", robots: { index: false, follow: false } };
	}

	const url = `https://firyansyah-portfolio.vercel.app/project/${slug}`;

	return {
		title: `${project.title}`,
		description: project.description,
		alternates: {
			canonical: url, // ← ini yang ditambahkan, paling penting
		},
		openGraph: {
			title: `${project.title} | Firyan Syah`,
			description: project.description,
			url,
			images: [{ url: project.image, width: 1200, height: 630 }],
		},
		twitter: {
			card: "summary_large_image",
			title: `${project.title} | Firyan Syah`,
			description: project.description,
			images: [project.image],
		},
	};
}

export default async function HomeProject({ params }) {
	const { slug } = await params;
	const project = dataProjects.find((item) => item.slug === slug);

	// kalau project gak ketemu, biar ViewProject yang handle notFound()
	const jsonLd = project && {
		"@context": "https://schema.org",
		"@type": "CreativeWork",
		name: project.title,
		description: project.description,
		image: `https://firyansyah-portfolio.vercel.app${project.image}`,
		creator: { "@type": "Person", name: "Firyan Syah" },
	};
	return (
		<>
			{jsonLd && (
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			)}
			<ViewProject params={params} />
		</>
	);
}
