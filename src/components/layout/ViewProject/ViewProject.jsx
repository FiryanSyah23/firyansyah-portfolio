"use client";
import dataProjects from "@/data/projects";
import React, { use, useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import SlideShow from "./SlideShow";
import InfoProject from "./InfoProject";

export default function ViewProject({ params }) {
	const { slug } = use(params);
	const [full, setFull] = useState(false);
	const project = dataProjects.find((item) => item.slug === slug);
	const router = useRouter();

	return (
		<div className={`container mx-auto md:h-dvh flex justify-center pt-20 xl:pb-10 px-5`}>
			<div className=" w-full relative rounded-xl ">
				<button
					className={cn(
						`text-white text-lg`,
						`bg-primary hover:bg-secondary active:bg-secondary outline-2 hover:outline-offset-3  active:outline-offset-3  rounded-xl`,
						`py-1 w-20 left-3 top-3 absolute flex items-center justify-center `,
					)}
					onClick={() => router.back()}
				>
					&laquo; Back
				</button>
				<div className="flex flex-col sm:p-4 h-full ">
					<SlideShow project={project} setFull={setFull} full={full} />

					<InfoProject project={project} />
					<div className={`${full ? "hidden" : ""}`}>
						<p className=" text-justify max-md:indent-10 sm:text-center text-base/relaxed xl:text-lg text-white bg-radial-[at_50%_50%] from-secondary/15 to-transparent to-75%">
							{project.longDescription}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
