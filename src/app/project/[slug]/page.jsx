// src/app/project/[slug]/page.jsx
import dataProjects from "@/data/projects";
import ViewProject from "../../../components/layout/Projects/ViewProject";

export async function generateMetadata({ params }) {
	const { slug } = await params;
	const project = dataProjects.find((item) => item.slug === slug);

	return {
		title: project ? `Project-${project.title}` : "Project",
		description: project?.description ?? "Project detail",
	};
}

export default function HomeProject({ params }) {
	return <ViewProject params={params} />;
}
