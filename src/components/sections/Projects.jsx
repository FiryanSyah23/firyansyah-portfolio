"use client";
import Image from "next/image";
import dataProjects from "@/data/projects";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Badge from "../ui/Badge";
import { motion } from "framer-motion";

const cardVariants = {
	hidden: { opacity: 0, y: -20 },
	show: { opacity: 1, y: 0 },
};

export default function Projects() {
	return (
		<section id="projects" className="px-3 sm:px-1 lg:px-8 pt-20 container mx-auto scroll-mt-10 py-20">
			<motion.h2
				initial={{ opacity: 0, y: -100, scale: 0 }}
				whileInView={{ opacity: 1, y: 0, scale: 1 }}
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 0.7, delay: 0.2 }}
				className="text-accent font-semibold text-center text-3xl "
			>
				Things I&apos;ve Created
			</motion.h2>
			<div className="flex justify-center mt-10 flex-wrap gap-5 xl:gap-10 select-none">
				{dataProjects.slice(0, 8).map((item, index) => (
					<motion.div
						key={index}
						variants={cardVariants}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, amount: 0.5 }}
						transition={{
							duration: 0.5,
							delay: 0.2,
						}}
						className={cn(
							" w-full sm:w-75 md:w-90  max-sm:grow flex flex-col justify-between ",
							"bg-panel text-white rounded-lg overflow-hidden p-3 gap-5 ",
							"outline-1 shadow-[0px_0px_5px_#ffffff] ",
							"hover:shadow-[0px_0px_8px_#ffffff]  hover:-translate-y-2 hover:bg-panel-hover duration-1000 group ",
						)}
					>
						<div className="overflow-hidden rounded-lg shrink-0  ">
							<Image
								src={item.image}
								alt={`${item.title} project image`}
								width={400}
								height={400}
								className="object-cover h-50 w-full duration-300 group-hover:scale-105 group-active:scale-105 duration-1000"
							/>
						</div>

						<div className="flex flex-col gap-2 ">
							<h3 className="text-2xl font-bold mb-1 text-accent ">{item.title}</h3>
							<div className="flex items-center gap-3 flex-wrap pb-3 ">
								<Badge className={"bg-gray-700/75 rounded-sm"}>{item.category}</Badge>
								{item.tech.slice(0, 3).map((tech, index) => (
									<Badge key={index} className={"bg-secondary"}>
										{tech}
									</Badge>
								))}
								{item.tech.length > 3 && (
									<div className="bg-gray-700/75 text-xs text-center p-2 rounded-sm font-semibold">
										+{item.tech.length - 3}
									</div>
								)}
							</div>

							<div className="overflow-hidden h-30 ">
								<p className="text-base/tight text-muted  group-hover:text-white group-active:text-white duration-1000 pb-3 text-justify">
									{item.description.split(" ").length > 30
										? item.description.split(" ").slice(0, 30).join(" ") + " ..."
										: item.description}
								</p>
							</div>
							<div className="flex justify-between gap-3 text-xs lg:text-base *:active:outline-offset-5">
								<a
									href={`${item.demo}`}
									target="_blank"
									rel="noopener noreferrer"
									className={`bg-primary hover:bg-secondary p-1 font-semibold rounded-md outline-2 hover:outline-offset-5 w-full text-center ${!item.demo ? "hidden" : "inline-block"}`}
								>
									Live Demo
								</a>
								<Link
									href={`/project/${item.slug}`}
									className={`bg-primary hover:bg-secondary text-center p-1 font-semibold rounded-md  outline-2 hover:outline-offset-5  w-full  `}
								>
									Lihat Detail
								</Link>
							</div>
						</div>
					</motion.div>
				))}
			</div>
			<div className={` flex justify-center pb-10  ${dataProjects.length < 8 ? "hidden" : ""} `}>
				<Link
					href={"/project"}
					scroll={false}
					className={`bg-primary/75 hover:bg-secondary text-white text-xl text-center mt-10 p-3 w-40 font-semibold rounded-md duration-600 outline-1`}
				>
					Lihat Project Selengkapnya
				</Link>
			</div>
		</section>
	);
}
