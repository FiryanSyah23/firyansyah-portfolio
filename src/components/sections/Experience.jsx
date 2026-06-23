"use client";
import RenderExperienceCard from "../layout/ExperinceLayout/RenderExperienceCard";
import TechSkillsList from "../layout/ExperinceLayout/TechSkillsList";

export default function Experience() {
	return (
		<section id="experience" className="w-full py-20 scroll-mt-40  ">
			<div className="max-sm:px-4 px-8 container mx-auto ">
				<h2 className="text-accent font-semibold text-center text-3xl mt-10">
					Experience & Tech Stack
				</h2>
				<div className="mt-10">
					<h3 className=" text-white font-semibold text-center text-xl ">Journey Programing Experience</h3>
					<p className="lg:text-lg/relaxed text-sm/relaxed text-muted py-2 text-center">
						My passion for programming has grown through freelance work and hands-on training experiences.
						Every challenge I&apos;ve faced has shaped my skills, and I&apos;m proud of the journey that
						continues to inspire me.
					</p>
					<RenderExperienceCard />
				</div>
				<div id="skillExperience" className="flex justify-center flex-col pt-20 scroll-mt-40">
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
