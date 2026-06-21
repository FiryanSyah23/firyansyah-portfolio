import { cn } from "@/lib/utils";
import getExperienceDuration from "@/lib/utils/countDateExperience";
import Image from "next/image";

export default function RenderTechList({ category, setExpandList, expandList }) {
	return (
		<div className="flex flex-col gap-4 w-full">
			{category.items.map((tech, techIndex) => {
				const hoverList = expandList?.name === tech.name;
				const duration = tech.startDate ? getExperienceDuration(tech.startDate) : null;

				return (
					<div
						key={techIndex}
						onMouseEnter={() => setExpandList(tech)}
						onMouseLeave={() => setExpandList(null)}
					>
						<div
							className={cn(
								`text-muted hover:text-white cursor-pointer outline-1 `,
								` duration-700 delay-200 p-2 flex flex-col h-11 justify-between  `,
								`${hoverList ? " bg-panel-hover  shadow-[0px_0px_5px_#ffffff] " : "bg-panel/80"}`,
								`${hoverList && category.category !== "Tools" ? "h-31" : ""}  `,
								`${hoverList && category.category === "Tools" ? "h-26 " : ""}`,
							)}
						>
							<div className={`flex justify-center items-center gap-2 `}>
								<Image src={tech.logo} alt={tech.name} width={50} height={50} className="w-7 h-auto" />
								<p className="text-sm">{tech.name}</p>
							</div>

							<div
								className={`${hoverList ? "opacity-100  " : "opacity-0"} duration-2500 ease-in-out delay-150`}
							>
								<div
									className={`flex flex-col justify-between  ${category.category === "Tools" ? "" : ""} ${hoverList ? "" : "hidden"}`}
								>
									<p className={`text-white text-xs`}>{tech.description}</p>
								</div>
							</div>

							<div
								className={`${hoverList ? "opacity-100 " : "opacity-0"} delay-150 duration-2500 ease-in-out`}
							>
								<div className={`flex flex-col justify-between ${hoverList ? "" : "hidden"}`}>
									<div className="flex justify-between pt-2 text-secondary text-xs">
										{duration && (
											<span className="flex gap-1 items-center">
												<i className="ri-calendar-fill"></i>
												<p>
													&plusmn;{duration.value} {duration.unit}
												</p>
											</span>
										)}

										{tech.projectCount !== undefined && tech.projectCount >= 1 && (
											<span className="flex gap-1 items-center">
												<i className="ri-folders-line"></i>
												<p>{tech.projectCount} Projects</p>
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
	);
}
