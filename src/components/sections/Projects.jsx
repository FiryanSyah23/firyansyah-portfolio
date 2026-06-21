import Image from "next/image";
import dataProjects from "@/data/projects";
import { cn } from "@/lib/utils";
import Link from "next/link";
import DemoButton from "../ui/DemoButton";
import Badge from "../ui/Badge";

const cardHeader = cn(
	" w-90 flex flex-col max-md:flex-col justify-between gap-3 bg-panel text-white rounded-lg overflow-hidden p-3 gap-5 ",
	"outline-1 shadow-[0px_0px_5px_#ffffff] ",
	"hover:shadow-[0px_0px_8px_#ffffff]  hover:-translate-y-2 hover:bg-panel-hover duration-1000 group ",
	"max-lg:w-full max-lg:flex-row ",
);

export default function Projects() {
	return (
		<section id="projects" className="px-4 sm:px-8 pt-20 container mx-auto scroll-mt-40">
			<h2 className="text-accent/75 font-semibold text-2xl">| Things I&apos;ve Created</h2>

			<div className="flex justify-center py-20 flex-wrap gap-10 select-none">
				{dataProjects.slice(0, 8).map((item, index) => (
					<div key={index} className={cardHeader}>
						<div className="overflow-hidden rounded-lg max-lg:shrink-0  ">
							<Image
								src={item.image}
								alt={`${item.title} image project`}
								width={2000}
								height={2000}
								className="object-cover h-50  max-md:w-121 max-lg:w-90 max-lg:h-full duration-300 group-hover:scale-105 group-active:scale-105 duration-1000"
							/>
						</div>

						<div className="flex flex-col gap-2 ">
							<h3 className="text-2xl font-bold mb-1 ">{item.title}</h3>
							<div className="flex items-center gap-3 flex-wrap pb-3 ">
								{item.tech.slice(0, 4).map((tech, index) => (
									<Badge key={index} className={"first:bg-gray-700/75 "}>
										{tech}
									</Badge>
								))}
								{item.tech.length > 4 && (
									<div className="bg-gray-700/75 text-xs text-center p-2 rounded-sm font-semibold">
										+{item.tech.length - 4}
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
								<DemoButton item={item} />
								<Link
									href={`project/${item.slug}`}
									className={`bg-primary hover:bg-secondary text-center p-1 font-semibold rounded-md  outline-2 hover:outline-offset-5  w-full  `}
								>
									View Project Detail
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className={` flex justify-center pb-10  ${dataProjects.length < 8 ? "hidden" : ""} `}>
				<Link
					href={"/project"}
					scroll={false}
					className={`bg-primary/75 hover:bg-secondary text-white text-xl text-center p-3 w-40 font-semibold rounded-md duration-600 outline-1`}
				>
					See more
				</Link>
			</div>
		</section>
	);
}
