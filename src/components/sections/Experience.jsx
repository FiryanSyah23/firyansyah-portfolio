"use client";

import React, { useEffect, useState } from "react";
import RenderExperienceCard from "../layout/ExperinceLayout/RenderExperienceCard";
import TechSkillsList from "../layout/ExperinceLayout/TechSkillsList";

export default function Experience() {
	const [changeStyle, setChangeStyle] = useState(false);

	useEffect(() => {
		const saveStyle = async () => {
			const saveState = localStorage.getItem("changeStyle");

			if (saveState !== null) {
				setChangeStyle(JSON.parse(saveState));
			}
		};

		saveStyle();
	}, []);

	useEffect(() => {
		localStorage.setItem("changeStyle", JSON.stringify(changeStyle));
	}, [changeStyle]);

	return (
		<section id="experience" className="w-full scroll-mt-40  ">
			<div className=" px-4 sm:px-8 container mx-auto">
				<h2 className=" text-accent/75 font-semibold text-2xl ">| My Programming Journey</h2>
				<h3 className="text-white font-semibold text-center text-xl mt-10">Experience and Training</h3>
				<RenderExperienceCard />
				<div className="flex justify-center flex-col pt-20">
					<h3 className=" text-white font-semibold text-center text-xl">
						Programming Languages & Tools{" "}
					</h3>
					<p className="lg:text-lg/relaxed text-sm/relaxed text-muted mt-5 text-center">
						These are the technologies and tools I work with daily, backed by years of experience building
						fast, interactive web applications, and developing IoT systems that connect the digital world
						with the physical one.
					</p>
					<TechSkillsList />
				</div>
			</div>
		</section>
	);
}
