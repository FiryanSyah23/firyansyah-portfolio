import dataExperience from "@/data/experience";
import Image from "next/image";

export default function RenderExperienceCard() {
	return (
		<div className="expe-main  flex justify-center lg:gap-20 gap-5 mt-10 flex-wrap ">
			{dataExperience.map((item, index) => (
				<div
					key={index}
					className=" w-85 flex flex-col items-center  gap-3  text-center bg-panel p-5 text-white rounded-xl outline-1 shadow-[0px_0px_8px_#ffffff]"
				>
					<div className=" h-auto outline outline-white rounded-full overflow-hidden p-5 bg-white ">
						<Image src={item.img} alt={item.company} width={500} height={500} className="w-30 h-auto " priority={true} />
					</div>

					<div className="bg-secondary/10 rounded-xl p-2 w-full h-13 ">
						<h2 className="text-sm font-bold">{item.title}</h2>
					</div>

					<div className="text-sm/tight">
						<p className="text-lg/tight font-semibold text-accent ">{item.company}</p>
						<p className=" mt-3">{item.period}</p>
						<p>{item.location}</p>
					</div>
				</div>
			))}
		</div>
	);
}
