import dataProjects from "@/data/projects";
import React from "react";

export default function ViewProject({ params }) {
	const { slug } = params;
	const project = dataProjects.find((item) => item.slug === slug);

	if (!project) return <div>Project not found</div>;
	return (
		<div className="container mx-auto h-dvh flex justify-center items-center">
			<p className="text-9xl text-center text-white">{project.title}</p>
		</div>
	);
}
