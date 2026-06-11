"use client";

import dataSkills from "@/data/skills";
import Image from "next/image";

// ✅ Pindah ke luar komponen
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
				delay: -(Math.random() * duration), // ✅ aman karena ssr:false
			})),
		};
	});
}

// Dipanggil sekali saat module load
const skillRows = buildSkillRows();

export default function TechSkills() {
	return (
		<div className="mt-20 text-white overflow-hidden">
			<div className="flex cursor-default flex-col gap-5 relative">
				{skillRows.map((row, rowIndex) => (
					<div key={rowIndex} className="relative h-14">
						{row.items.map((item, index) => (
							<div
								key={index}
								className={`
                  bg-panel px-4 py-2 rounded-xl
                  flex gap-2 items-center absolute
                  hover:[animation-play-state:paused]
                  ${row.direction}
                `}
								style={{
									animationDuration: `${row.duration}s`,
									animationDelay: `${item.delay}s`,
								}}
							>
								<Image src={item.logo} width={50} height={50} alt={item.name} className="h-auto md:w-5 w-4" />
								<p className="text-text md:text-lg text-sm">{item.name}</p>
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	);
}
