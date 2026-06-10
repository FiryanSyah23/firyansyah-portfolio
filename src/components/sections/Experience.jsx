import React from "react";
import RenderExperienceCard from "../layout/SectionExperience/RenderExperienceCard";
import TechSkills from "../layout/SectionExperience/TechSkills";

export default function Experience() {
	return (
		<section id="experience" className="lg:py-60 py-40 w-full ">
			<div className="container mx-auto px-4 ">
				<div className="expe-content">
					<div className="expe-title text-white font-semibold text-end text-2xl">My Programming Journey |</div>
					<RenderExperienceCard />
				</div>
				<div className="expe-skills pt-60">
					<div className="expe-title text-white font-semibold text-end text-2xl">Programming Languages & Tools |</div>
					<TechSkills />
				</div>
			</div>
		</section>
	);
}
