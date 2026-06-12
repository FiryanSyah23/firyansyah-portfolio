"use client";

import React, { useState } from "react";
import RenderExperienceCard from "../layout/ExperinceLayout/RenderExperienceCard";
import dynamic from "next/dynamic";
const TechSkills = dynamic(() => import("@/components/layout/ExperinceLayout/TechSkills"), { ssr: true });

export default function Experience() {
	const [changeStyle, setChangeStyle] = useState(false);
	return (
		<section id="experience" className="lg:py-60 py-40 w-full -scroll-mt-50 ">
			<div className="expe-content px-8">
				<h2 className="expe-title text-white font-semibold text-end  text-xl">My Programming Journey |</h2>
				<RenderExperienceCard />
			</div>
			<div className="expe-skills pt-60 ">
				<div className="flex justify-center flex-col px-8">
					<h2 className="expe-title text-white font-semibold text-center text-xl">Programming Languages & Tools </h2>
					<p className="lg:text-lg/relaxed text-sm/relaxed text-muted mt-5 text-center">
						These are the technologies and tools I work with daily, backed by years of experience building fast, interactive web applications, and
						developing IoT systems that connect the digital world with the physical one.
					</p>
				</div>
				<div className="flex justify-center mt-10">
					<button
						className=" p-3  bg-primary hover:bg-secondary duration-500 rounded-ee-2xl rounded-ss-2xl shadow-[0px_0px_2px_2px_rgb(255,255,255)] text-white font-bold"
						onClick={() => {
							setChangeStyle(!changeStyle);
						}}
					>
						Change Style !
					</button>
				</div>
			</div>
			{changeStyle && <TechSkills />}
		</section>
	);
}
