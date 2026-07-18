"use client";
import { useState } from "react";
import RenderTechList from "./RenderTechList";
import dataSkillsWithCount from "@/lib/dataUpdateSkill";
import { motion } from "framer-motion";

export default function TechSkillsList({ fadeTop, container }) {
	const [expandList, setExpandList] = useState(null);

	return (
		<div className="container mx-auto text-white mt-5 xl:h-140 pb-10  ">
			<motion.div
				initial={{ y: -30, scale: 0, opacity: 0 }}
				whileInView={{ y: 0, scale: 1, opacity: 1 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.5, delay: 0.2 }}
				className="flex justify-center relative"
			>
				<div className="w-300 h-px bg-linear-to-l from-transparent via-accent to-transparent relative  " />
			</motion.div>
			<div className="techlist flex flex-wrap justify-center gap-10 ">
				{dataSkillsWithCount.map((category, catIndex) => {
					const allZero = category.items.every((tech) => tech.projectCount === 0);
					return (
						<motion.div
							key={catIndex}
							variants={container}
							initial="hidden"
							whileInView="show"
							viewport={{ once: true, amount: 0.3 }}
							className={`flex flex-col text-base items-center w-60 sm:w-49 text-center font-semibold ${
								allZero ? "hidden" : ""
							}`}
						>
							<motion.div
								initial={{ y: -30, scale: 0, opacity: 0 }}
								whileInView={{ y: 0, scale: 1, opacity: 1 }}
								viewport={{ once: true, amount: 0.3 }}
								transition={{ duration: 0.5, delay: 0.3 }}
								className="w-px h-4 bg-linear-to-b from-transparent via-accent to-transparent relative  my-0 lg:my-3 opacity-0 lg:opacity-100 "
							/>

							<motion.div
								variants={fadeTop}
								className="bg-panel/90 w-full hover:bg-panel-hover cursor-pointer outline-1  duration-500 py-3 "
							>
								<i className={category.icon}></i> {category.category}
							</motion.div>

							<motion.div
								initial={{ y: -30, scale: 0, opacity: 0 }}
								whileInView={{ y: 0, scale: 1, opacity: 1 }}
								viewport={{ once: true, amount: 0.3 }}
								transition={{ duration: 0.5, delay: 0.4 }}
								className="w-px h-8 bg-linear-to-b from-transparent via-accent to-transparent relative  my-3"
							/>
							<RenderTechList
								fadeTop={fadeTop}
								category={category}
								setExpandList={setExpandList}
								expandList={expandList}
							/>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
}
