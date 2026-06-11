"use client";

import dataSkills from "@/data/skills";
import Image from "next/image";
import { useState } from "react";
import { IoNotificationsCircleOutline } from "react-icons/io5";

function buildSkillRows() {
	const categories = [
		{ key: "Frontend", direction: "animate-slider-left" },
		{ key: "Backend", direction: "animate-slider-right" },
		{ key: "Database", direction: "animate-slider-left" },
		{ key: "Tools", direction: "animate-slider-right" },
		{ key: "Embedded & IoT", direction: "animate-slider-left" },
	];

	return categories.map(({ key, direction }) => {
		const category = dataSkills.find((item) => item.category === key);
		const items = [...(category?.items || [])];
		const total = items.length;
		const duration = total * 4;

		return {
			direction,
			duration,
			items: items.map((item) => ({
				...item,
				delay: -(Math.random() * duration),
			})),
		};
	});
}

// Dipanggil sekali saat module load
const skillRows = buildSkillRows();

export default function TechSkills() {
	const [expand, setExpand] = useState(null);

	return (
		<div className="mt-20 text-white overflow-hidden ">
			<div className="flex cursor-default flex-col gap-5 relative pb-40">
				{skillRows.map((row, rowIndex) => (
					<div key={rowIndex} className="relative h-20 ">
						{row.items.map((item, index) => (
							<div
								key={index}
								className={` px-4 py-2 rounded-xl  flex ${expand?.name === item.name ? "flex-col z-50 w-60 bg-panel-hover" : "bg-panel/90 "} gap-2 items-center absolute hover:[animation-play-state:paused] ${row.direction} `}
								style={{
									animationDuration: `${row.duration}s`,
									animationDelay: `${item.delay}s`,
								}}
								onMouseEnter={() => setExpand(item)}
								// ✅ Reset state saat mouse pergi
								onMouseLeave={() => setExpand(null)}
							>
								<Image
									src={item.logo}
									width={50}
									height={50}
									alt={item.name}
									className={`h-auto md:w-5 w-4 ${expand?.name === item.name ? "md:w-10" : ""}`}
								/>
								<p className="text-text md:text-lg text-sm">{item.name}</p>
								<div className={`${expand?.name === item.name ? "opacity-100" : "opacity-0  overflow-hidden"}  duration-2000`}>
									<div className={`${expand?.name === item.name ? "" : "hidden"}`}>
										<p className="description text-sm/tight text-muted  text-center">{item.description}</p>
										<div className="experience flex justify-between mt-2 text-secondary capitalize font-semibold text-xs">
											<span className="flex gap-1">
												<i class="ri-calendar-fill"></i>
												{item.experienceYear} years
											</span>
											<span className="flex gap-1">
												{item.projectCount} projects <i class="ri-folders-line"></i>
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
