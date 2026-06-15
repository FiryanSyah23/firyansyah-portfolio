"use client";
import dataSkills from "@/data/skills";
import Image from "next/image";
import { useState } from "react";

export default function TechSkillsList() {
	const [expandList, setExpandList] = useState(null);

	return (
		<div className="container mx-auto text-white mt-5 xl:h-140 pb-10">
			<div className="flex justify-center relative">
				<div className="w-300 h-px bg-linear-to-l from-transparent via-accent to-transparent relative  " />
			</div>
			<div className="techlist flex flex-wrap justify-center gap-10 ">
				{dataSkills.map((category, catIndex) => (
					<div key={catIndex} className="flex flex-col text-base items-center  w-60 md:w-49 text-center font-semibold ">
						<div className="w-px h-4 bg-linear-to-b from-transparent via-accent to-transparent relative  my-0 lg:my-3 opacity-0 lg:opacity-100 " />

						<div className="bg-panel/90 w-full hover:bg-panel-hover cursor-pointer shadow-[0px_0px_2px_1px_#ffffff] duration-500 py-3 ">
							<i className={category.icon}></i> {category.category}
						</div>

						<div className="w-px h-8 bg-linear-to-b from-transparent via-accent to-transparent relative  my-3" />

						<div className="flex flex-col gap-3 w-full">
							{category.items.map((tech, techIndex) => {
								const hoverList = expandList?.name === tech.name;

								return (
									<div key={techIndex} onMouseEnter={() => setExpandList(tech)} onMouseLeave={() => setExpandList(null)}>
										<div
											className={`text-muted hover:text-white   hover: cursor-pointer shadow-[0px_0px_2px_1px_#ffffff] duration-700 delay-200 p-2 flex flex-col p-2 h-11 justify-between ${hoverList ? " bg-panel-hover" : "bg-panel/80"} ${hoverList && category.category !== "Tools" ? "h-31" : ""} ${hoverList && category.category === "Tools" ? "h-26 " : ""} 
												`}
										>
											<div className={`flex justify-center items-center gap-2 `}>
												<Image src={tech.logo} alt={tech.name} width={50} height={50} className="w-7 h-auto" />
												<p className="text-sm">{tech.name}</p>
											</div>

											<div className={`${hoverList ? "opacity-100 delay-150 duration-2500 ease-in-out" : "opacity-0"}`}>
												<div
													className={`flex flex-col justify-between  ${category.category === "Tools" ? "" : ""} ${hoverList ? "" : "hidden"} 
													`}
												>
													<p className={`text-white text-xs `}>{tech.description}</p>
												</div>
											</div>

											<div className={`${hoverList ? "opacity-100 delay-150 duration-2500  ease-in-out" : "opacity-0"}`}>
												<div
													className={`flex flex-col justify-between  ${category.category === "Tools" ? "" : ""} ${hoverList ? "" : "hidden"} 
													`}
												>
													<div className="flex justify-between pt-2  text-secondary text-xs">
														{tech.experienceYear === undefined ? (
															" "
														) : (
															<span className="flex gap-1 items-center ">
																<i className="ri-calendar-fill"></i>
																<p className="">&plusmn;{tech.experienceYear} Years</p>
															</span>
														)}
														{tech.projectCount === undefined ? (
															" "
														) : (
															<span className="flex gap-1">
																<i className="ri-folders-line"></i>
																<p className={tech.projectCount < 1 ? "hidden" : ""}>{tech.projectCount} Projects</p>
															</span>
														)}
													</div>
												</div>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

function ComponentName() {
	return <div></div>;
}
