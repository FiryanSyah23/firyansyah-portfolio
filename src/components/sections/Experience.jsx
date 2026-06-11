import React from "react";
import RenderExperienceCard from "../layout/SectionExperience/RenderExperienceCard";
import dynamic from "next/dynamic";
const TechSkills = dynamic(() => import("@/components/layout/SectionExperience/TechSkills"), { ssr: false });

export default function Experience() {
	return (
		<section id="experience" className="lg:py-60 py-40 w-full -scroll-mt-50 ">
			<div className="container mx-auto px-4 ">
				<div className="expe-content">
					<h2 className="expe-title text-white font-semibold text-end text-xl">My Programming Journey |</h2>
					<RenderExperienceCard />
				</div>
				<div className="expe-skills pt-70">
					<h2 className="expe-title text-white font-semibold text-center text-xl">Programming Languages & Tools </h2>
					<p className="lg:text-lg/relaxed text-sm/relaxed text-muted mt-5 text-center">
						These are the technologies and tools I work with daily to craft fast, interactive, and responsive websites from frontend to backend.
					</p>
				</div>
			</div>
			<TechSkills />
		</section>
	);
}
