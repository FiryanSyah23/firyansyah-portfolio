"use client";
import Badge from "@/components/ui/Badge";
import dataProjects from "@/data/projects";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Corben } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AllProject() {
	const [filter, setFilter] = useState(dataProjects.slice());
	const [activeCategory, setActiveCategory] = useState("all"); // default: "All" yang aktif pertama kali

	const router = useRouter();

	function filterCategory(category) {
		setActiveCategory(category);

		if (category === "all") {
			setFilter(dataProjects);
			return;
		}

		const projectCategory = dataProjects.filter((item) => item.tech[0].toLowerCase() === category.toLowerCase());
		setFilter(projectCategory);
	}

	return (
		<div className="container sm:mx-auto px-4  pt-24 h-dvh overflow-hidden flex flex-col relative">
			<div className="flex justify-between items-center mb-2">
				<button
					className={cn(
						`text-white text-lg`,
						`bg-primary hover:bg-secondary active:bg-secondary outline-2 hover:outline-offset-3  active:outline-offset-3  rounded-xl`,
						`w-20 h-8 xl:w-20 text-center   `,
					)}
					onClick={() => router.push("/")}
				>
					&laquo; Back
				</button>
				<h1 className=" text-accent text-base sm:text-2xl xl:text-3xl  font-extrabold  shrink-0">All Project |</h1>
			</div>

			<div className="grid lg:grid-cols-[130px_1fr]  lg:h-full gap-3  overflow-hidden lg:justify-center ">
				<div
					className={cn(
						"text-white flex items-end lg:flex-col border-r-2 border-r-border-active max-lg:border-r-0 max-lg:border-b-2 select-none",
						"max-lg:border-b-border-active gap-3 lg:gap-2 px-2 overflow-x-auto whitespace-nowrap py-2 shrink-0 scrollbar-thumb-border  ",
					)}
				>
					<button
						onClick={() => filterCategory("all")}
						className={`px-3 py-1 rounded-md transition-colors ${activeCategory === "all" ? "bg-secondary" : ""}`}
					>
						All
					</button>

					<button
						onClick={() => filterCategory("Website")}
						className={`px-3 py-1 rounded-md transition-colors ${activeCategory === "Website" ? "bg-secondary" : ""}`}
					>
						Website
					</button>

					<button
						onClick={() => filterCategory("Desktop App")}
						className={`px-3 py-1 rounded-md transition-colors ${activeCategory === "Desktop App" ? "bg-secondary" : ""}`}
					>
						Desktop App
					</button>

					<button
						onClick={() => filterCategory("Mobile")}
						className={`px-3 py-1 rounded-md transition-colors ${activeCategory === "Mobile" ? "bg-secondary" : ""}`}
					>
						Mobile
					</button>
				</div>

				<div className="flex flex-col gap-5 min-h-0 overflow-y-auto scrollbar-thumb-border p-2">
					{filter.map((item, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, scale: 0.5 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: false, amount: 0.1 }}
							transition={{ duration: 0.5 }}
							className="bg-panel p-3 rounded-xl flex gap-3 max-lg:flex-col text-white outline-2 select-none lg:h-75 shrink-0"
						>
							<div className="shrink-0 overflow-hidden rounded-lg w-72 lg:w-90 max-lg:w-full h-50 sm:h-70 lg:h-full">
								<Image
									src={item.image}
									alt={`${item.title} - project`}
									width={500}
									height={500}
									className="w-full h-full object-cover"
									priority={index === 0}
								/>
							</div>
							<div className="flex flex-col gap-3 w-full">
								<h2 className="text-accent text-xl lg:text-2xl font-bold">{item.title}</h2>
								<div className="flex flex-wrap gap-2">
									{item.tech.map((t, i) => (
										<Badge key={i} className={"first:bg-gray-700/75"}>
											{t}
										</Badge>
									))}
								</div>
								<p className="grow text-sm lg:text-base">{item.description}</p>
								<div className="flex justify-between gap-3 text-xs md:text-base text-center ">
									<Link
										href={`${item.demo}`}
										target="_blank"
										rel="noopener noreferrer"
										className={`bg-primary hover:bg-secondary p-1 font-semibold rounded-md outline-2 hover:outline-offset-5 w-full ${!item.demo ? "hidden" : "inline-block"}  `}
									>
										View Project
									</Link>
									<Link
										href={`/project/${item.slug}`}
										className="bg-primary hover:bg-secondary text-center p-1 font-semibold rounded-md outline-2 hover:outline-offset-5 w-full"
									>
										View Project Detail
									</Link>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
}
