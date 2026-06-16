import dataProjects from "@/data/projects";
import React from "react";

export default async function ViewProject({ params }) {
	const { slug } = await params;
	const project = dataProjects.find((item) => item.slug === slug);

	if (!project) return <div>Project not found</div>;
	return (
		<div className="container mx-auto h-screen flex justify-center items-center">
			<p className="text-9xl text-center text-white">{project.title}</p>
		</div>
	);
}
