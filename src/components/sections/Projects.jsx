import Image from "next/image";
import dataProjects from "@/data/projects";
import { cn } from "@/lib/utils";

const cardHeader = cn(
	" w-90  flex flex-col justify-between gap-3 bg-panel text-white rounded-lg overflow-hidden p-3 gap-5 ",
	"outline-1 shadow-[0px_0px_5px_#ffffff] hover:shadow-[0px_0px_8px_#ffffff]  hover:-translate-y-2 ",
	"hover:bg-panel-hover duration-1000 group ",
);
const buttonProject = cn("bg-primary hover:bg-secondary p-1 font-semibold rounded-md duration-300 outline-1");
const badge = cn("text-xs font-semibold p-2 text-nowrap text-center bg-secondary rounded-sm first:bg-gray-700/75");

export default function Projects() {
	return (
		<section id="projects" className="px-8 pt-20 container mx-auto py-300">
			<h1 className="text-accent/75 font-semibold text-2xl">| Things I&apos;ve Created</h1>
			
			<div className="flex justify-center mt-20 flex-wrap gap-10">
				{dataProjects.map((item, index) => (
					<div key={index} className={cardHeader}>
						<div className="h-50 overflow-hidden rounded-lg ">
							<Image src={item.image} alt={item.title} width={500} height={500} className="h-full w-120 w-30" priority={true} />
						</div>

						<div className="flex flex-col gap-2 grow">
							<h2 className="text-2xl font-bold mb-1 ">{item.title}</h2>
							<div className="flex items-center gap-3 flex-wrap pb-3">
								{item.tech.slice(0, 4).map((tech, index) => (
									<div key={index} className={badge}>
										{tech}
									</div>
								))}
								{item.tech.length > 4 && <div className="bg-gray-700/75 text-xs text-center p-2 rounded-sm font-semibold">+{item.tech.length - 4}</div>}
							</div>
							<div className="overflow-hidden h-30">
								<p className="text-base/tight text-muted group-hover:text-white pb-3 duration-500">{item.description}</p>
							</div>
						</div>

						<button
							onClick={() => {
								window.open(item.demo, "_blank", "noopener,noreferrer");
							}}
							className={buttonProject}
						>
							See Project
						</button>
					</div>
				))}
			</div>
		</section>
	);
}
