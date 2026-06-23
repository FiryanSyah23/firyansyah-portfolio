import dataExperience from "@/data/experience";
import Image from "next/image";

export default function RenderExperienceCard() {
	return (
		<div className="flex justify-center gap-5  flex-wrap ">
			
			{dataExperience.map((item, index) => (
				<div
					key={index}
					className=" md:basis-85  lg:basis-95 basis-full flex flex-col items-center  gap-3  text-center bg-panel p-5 text-white rounded-xl outline-1 shadow-[0px_0px_4px_#ffffff] "
				>
					<div className=" h-auto outline outline-white rounded-full overflow-hidden p-5 bg-white ">
						<Image
							src={item.img}
							alt={`${item.company} image experience`}
							width={500}
							height={500}
							className="w-30 h-auto "
						/>
					</div>

					<div className="bg-secondary/10 rounded-xl p-2 w-full h-13 ">
						<h2 className="text-sm font-bold">{item.title}</h2>
					</div>

					<div className="text-sm/tight grow">
						<span className="font-bold text-accent text-base capitalize">{item.type}</span>
						<p className="text-lg/tight font-semibold text-accent ">{item.company}</p>
						<p className=" mt-3">{item.period}</p>
						<p>{item.location}</p>
						<h3 className="mt-2 text-start">Achievements:</h3>
						<ul className="text-start px-5  list-disc flex flex-col gap-2 ">
							{item.achievements.map((achv, index) => (
								<li key={index} className="">
									{achv}
								</li>
							))}
						</ul>
					</div>
				</div>
			))}
		</div>
	);
}
