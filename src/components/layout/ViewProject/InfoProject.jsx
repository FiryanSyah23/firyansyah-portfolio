"use client";
import Badge from "@/components/ui/Badge";
import React from "react";

export default function InfoProject({ project }) {
	return (
		<div className="flex justify-center my-5 ">
			<div className=" bg-panel-hover/75 p-3 lg:p-3 border-2 rounded-xl text-white capitalize max-md:w-full">
				<div className="flex flex-col md:flex-row gap-4  items-center max-lg:text-xs text-nowrap">
					<h1 className="text-accent  xl:text-3xl sm:text-1xl text-2xl text-center font-extrabold  text-nowrap ">
						{project.title}
					</h1>
					<div className="flex max-lg:flex-wrap max-lg:justify-center items-center  max-md:gap-2 gap-3 max-md:w-full ">
						<Badge className={"bg-gray-700/75 grow "}>{project.category}</Badge>
						{project.tech.map((item, index) => (
							<Badge key={index} className={"bg-secondary grow "}>
								{item}
							</Badge>
						))}
					</div>
					<div className="max-md:self-start ">
						<span>status : </span>
						<span className={`${project.status === "Completed" ? "text-success" : "text-danger"} font-bold`}>
							{project.status}
						</span>
					</div>
					<div className="max-md:w-full">
						<a
							href={project.demo}
							target="_blank"
							rel="noopener noreferrer"
							className={
								!project.demo
									? "hidden"
									: "bg-secondary p-1 font-bold rounded-lg outline-2 hover:outline-offset-3 active:outline-offset-3 max-md:w-full inline-block text-center text-sm"
							}
						>
							See Website
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
