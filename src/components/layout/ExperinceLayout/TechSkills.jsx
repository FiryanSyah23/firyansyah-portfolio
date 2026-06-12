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
		const category = dataSkills.find((item) => item.category === key);
		const items = [...(category?.items || [])];
		const total = items.length;
		const duration = total * 6;

		// ✅ Generate delays yang sudah tersebar merata & di-shuffle
		const delays = generateShuffledDelays(total, duration);

		return {
			direction,
			duration,
			items: items.map((item, i) => ({
				...item,
				delay: delays[i], // ✅ Pakai delay dari array, bukan random murni
			})),
		};
	});
}

const skillRows = buildSkillRows();

// ... sisa kode sama persis, tidak perlu diubah

export default function TechSkills() {
	const [expand, setExpand] = useState(null);

	return (
		<div className="mt-10 text-white overflow-hidden ">
			<div className="flex cursor-default flex-col gap-5 relative pb-40">
				{skillRows.map((row, rowIndex) => (
					<div key={rowIndex} className="relative h-15 py-2">
						{row.items.map((item, index) => (
							<div
								key={index}
								className={` px-4 py-2 rounded-xl  flex ${expand?.name === item.name ? "flex-col z-50 w-60 bg-panel-hover shadow-[0px_1px_5px_2px_rgb(255,255,255)] " : "bg-panel/90 "} gap-2 items-center absolute hover:[animation-play-state:paused] ${row.direction} `}
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
