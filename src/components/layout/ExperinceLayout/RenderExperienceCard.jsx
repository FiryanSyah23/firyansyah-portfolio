import dataExperience from "@/data/experience";
import Image from "next/image";

export default function RenderExperienceCard() {
	return (
		<div className="expe-main  flex justify-center gap-15 mt-20 flex-wrap">
			{dataExperience.map((item, index) => (
				<div key={index} className="lg:w-115 md:w-139 w-100 flex flex-col items-center  gap-4 w-70 text-center bg-panel p-5 text-white rounded-xl ">
					<div className="w-50 h-auto outline outline-white rounded-full overflow-hidden p-5 bg-white ">
						<Image src={item.img} alt={item.company} width={500} height={500} className="w-50 h-auto " priority={true} />
					</div>

					<div className="bg-secondary/10 rounded-xl p-2 w-full h-18">
						<h2 className="text-lg font-bold">{item.title}</h2>
					</div>

					<div className="text-sm/tight">
						<p className="text-lg font-semibold text-accent">{item.company}</p>
						<p>{item.period}</p>
						<p>{item.location}</p>
					</div>

					<p className="lg:text-lg/relaxed text-sm/relaxed text-muted ">{item.description} </p>
					<div className="badge flex gap-5 flex-wrap justify-center">
						{item.tech.map((t, i) => (
							<span key={i} className="p-1.5 bg-primary text-white/75 text-[12px] rounded-lg font-bold self-center ">
								{t}
							</span>
						))}
					</div>
				</div>
			))}
		</div>
	);
}
