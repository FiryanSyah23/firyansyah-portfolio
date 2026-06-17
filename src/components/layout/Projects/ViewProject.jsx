"use client";
import dataProjects from "@/data/projects";
import React, { use } from "react";
import { useRouter } from "next/navigation";

export default function ViewProject({ params }) {
	const { slug } = use(params);
	const project = dataProjects.find((item) => item.slug === slug);

	const router = useRouter();
	if (!project) return <div>Project not found</div>;
	return (
		<div className="container mx-auto h-dvh flex justify-center  py-30">
			<div className="bg-panel/35 w-full  relative rounded-xl border-2 border-white">
				<button
					className={`text-white text-lg bg-primary hover:bg-secondary outline-2 hover:outline-offset-3 py-1 w-20 left-5 top-4 rounded-xl absolute flex items-center justify-center `}
					onClick={() => router.back()}
				>
					&laquo; Back
				</button>
				<div className="flex flex-col ">
					<h1 className="col-span-2  text-center text-white xl:text-3xl pt-5 font-extrabold ">{project.title}</h1>
					<div className="grid grid-cols-2 w-full pt-5"></div>
				</div>
			</div>
		</div>
	);
}
