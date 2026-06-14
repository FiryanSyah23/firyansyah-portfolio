"use client";

import React, { useEffect, useState } from "react";
import RenderExperienceCard from "../layout/ExperinceLayout/RenderExperienceCard";
import TechSkillsList from "../layout/ExperinceLayout/TechSkillsList";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import TechSkills from "../layout/ExperinceLayout/TechSkills";

const variantsInit = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
};

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
		<section id="experience" className="pt-30 w-full -scroll-mt-50 ">
			<div className="expe-content px-8 container mx-auto">
				<h2 className="expe-title text-white font-semibold text-xl ">|My Programming Journey</h2>

				<RenderExperienceCard />
			</div>
			<div className="expe-skills pt-60 container mx-auto">
				<div className="flex justify-center flex-col px-8">
					<h2 className="expe-title text-white font-semibold text-center text-xl">Programming Languages & Tools </h2>
					<p className="lg:text-lg/relaxed text-sm/relaxed text-muted mt-5 text-center">
						These are the technologies and tools I work with daily, backed by years of experience building fast, interactive web applications, and
						developing IoT systems that connect the digital world with the physical one.
					</p>
					<div className="flex justify-end mt-2 ">
						<button
							className=" p-1  bg-primary hover:bg-secondary duration-500 rounded-lg shadow-[0px_0px_2px_1px_rgb(255,255,255)] text-white font-semibold text-xs"
							onClick={() => {
								setChangeStyle(!changeStyle);
							}}
						>
							Change Style
						</button>
					</div>
				</div>
			</div>

			<div className="overflow-hidden">
				<AnimatePresence mode="wait">
					{changeStyle ? (
						<motion.div
							key={`tech-skills`}
							variants={variantsInit}
							initial="initial"
							animate="animate"
							exit="exit"
							transition={{ duration: 0.4, ease: "easeInOut" }}
						>
							<TechSkills />
						</motion.div>
					) : (
						<motion.div
							key={`tech-skills-list`}
							variants={variantsInit}
							initial="initial"
							animate="animate"
							exit="exit"
							transition={{ duration: 0.4, ease: "easeInOut" }}
						>
							<TechSkillsList />
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</section>
	);
}
