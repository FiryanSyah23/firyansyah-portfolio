"use client";

import dataSkills from "@/data/skills";
import Image from "next/image";
import { useState } from "react";

const generateShuffledDelays = (count, duration) => {
	const delays = Array.from({ length: count }, (_, i) => -((i / count) * duration));

	for (let i = delays.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[delays[i], delays[j]] = [delays[j], delays[i]];
	}

	return delays;
};

function buildSkillRows() {
	const categories = [
		{ key: "Frontend", direction: "animate-slider-left" },
		{ key: "Backend", direction: "animate-slider-right" },
		{ key: "Database", direction: "animate-slider-left" },
		{ key: "Embedded & IoT", direction: "animate-slider-right" },
		{ key: "Tools", direction: "animate-slider-left" },
	];

	return categories.map(({ key, direction }) => {
		const findCategory = dataSkills.find((item) => item.category === key);
		const items = [...(findCategory?.items || [])];
		const total = items.length;
		const duration = total * 6;
		const delays = generateShuffledDelays(total, duration);

		return {
			direction,
			duration,
			items: items.map((item, i) => ({
				...item,
				delay: delays[i],
				key,
			})),
		};
	});
}

const skillRows = buildSkillRows();

export default function TechSkills() {
	const [expand, setExpand] = useState(null);

	return (
		<div className="mt-10 text-white overflow-hidden ">
			<div className="flex cursor-default flex-col gap-5 relative pb-40">
				{skillRows.map((row, rowIndex) => (
					<div key={rowIndex} className="relative h-15 py-4 ">
						{row.items.map((item, index) => (
							<div
								key={index}
								className={` px-4 py-2 flex justify-center gap-2 items-center absolute hover:[animation-play-state:paused]   hover:rounded-ee-4xl hover:rounded-ss-4xl rounded-ss-4xl rounded-ee-4xl shadow-[0px_0px_2px_2px_rgb(255,255,255)] transition-all duration-1000  ${row.direction} ${expand?.name === item.name ? "bg-panel-hover" : "bg-panel/90"} ${expand?.name === item.name && expand?.key !== "Tools" ? "z-50 w-56 h-45 flex-col " : "h-10"} ${expand?.key === "Tools" && expand?.name === item.name ? "flex-col h-37 w-56 " : ""}`}
								style={{
									animationDuration: `${row.duration}s`,
									animationDelay: `${item.delay}s`,
								}}
								onMouseEnter={() => setExpand(item)}
								onMouseLeave={() => setExpand(null)}
							>
								<Image
									src={item.logo}
									width={50}
									height={50}
									alt={item.name}
									priority={true}
									className={`h-auto md:w-5 w-4 ${expand?.name === item.name ? "md:w-10" : ""}`}
								/>
								<p className="text-text md:text-lg text-sm">{item.name}</p>
								<div className={`${expand?.name === item.name ? "opacity-100" : "opacity-0  overflow-hidden"}   transition-all duration-3000`}>
									<div className={expand?.name === item.name ? "" : "hidden"}>
										<p className="description text-sm/tight text-muted  text-center">{item.description}</p>
										<div className="experience flex justify-between mt-2 text-secondary capitalize font-semibold text-xs">
											<span className="flex gap-1">
												{item.experienceYear ? <i className="ri-calendar-fill"></i> : ""}
												{item.experienceYear ? `${item.experienceYear} years` : ""}
											</span>
											<span className="flex gap-1">
												{item.projectCount >= 0 ? <i className="ri-folders-line"></i> : ""}
												{item.projectCount ? `${item.projectCount} project` : ""}
											</span>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	);
}
