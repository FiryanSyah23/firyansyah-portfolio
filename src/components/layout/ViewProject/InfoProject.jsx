"use client";
import React from "react";

export default function InfoProject({ project }) {
	return (
		<div className="flex justify-center my-2 my-5">
			<div className=" bg-panel-hover/75 p-3 lg:p-3 border-2 rounded-xl text-white capitalize max-md:w-full">
				<div className="flex flex-col md:flex-row gap-4  items-center max-lg:text-xs text-nowrap">
					<h1 className="text-accent  xl:text-3xl sm:text-1xl text-2xl text-center font-extrabold  text-nowrap ">
						{project.title}
					</h1>
					<div className="flex max-md:flex-wrap items-center  max-md:gap-2 gap-3 max-md:w-full">
						{project.tech.map((item, index) => (
							<div
								key={index}
								className=" text-white bg-secondary p-1 rounded-lg max-md:w-full text-center "
							>
								{item}
							</div>
						))}
					</div>
					<div className="max-md:self-start ">
						<span>status : </span>
						<span
							className={`${project.status === "Completed" ? "text-success" : "text-danger"} font-bold`}
						>
							{project.status}
						</span>
					</div>
					<div className="max-md:w-full">
						<button
							className={
								!project.demo
									? "hidden"
									: " bg-secondary p-1 font-bold rounded-lg outline-2 hover:outline-offset-3 active:outline-offset-3 max-md:w-full"
							}
							onClick={() => window.open("")}
						>
							See Website
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
