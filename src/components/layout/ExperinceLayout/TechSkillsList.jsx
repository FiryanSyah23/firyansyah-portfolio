"use client";
import dataSkills from "@/data/skills";
import { useState } from "react";
import RenderTechList from "./RenderTechList";
 import dataSkillsWithCount from "@/lib/dataUpdateSkill";
export default function TechSkillsList({ data }) {
	const [expandList, setExpandList] = useState(null);

	return (
		<div className="container mx-auto text-white mt-5 xl:h-140 pb-10">
			<div className="flex justify-center relative">
				<div className="w-300 h-px bg-linear-to-l from-transparent via-accent to-transparent relative  " />
			</div>
			<div className="techlist flex flex-wrap justify-center gap-10 ">
				{dataSkillsWithCount.map((category, catIndex) => (
					<div
						key={catIndex}
						className="flex flex-col text-base items-center  w-60 md:w-49 text-center font-semibold "
					>
						<div className="w-px h-4 bg-linear-to-b from-transparent via-accent to-transparent relative  my-0 lg:my-3 opacity-0 lg:opacity-100 " />

						<div className="bg-panel/90 w-full hover:bg-panel-hover cursor-pointer outline-1 shadow-[0px_0px_8px_#ffffff] duration-500 py-3 ">
							<i className={category.icon}></i> {category.category}
						</div>

						<div className="w-px h-8 bg-linear-to-b from-transparent via-accent to-transparent relative  my-3" />
						<RenderTechList category={category} setExpandList={setExpandList} expandList={expandList} />
					</div>
				))}
			</div>
		</div>
	);
}
