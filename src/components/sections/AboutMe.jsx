import Image from "next/image";
import React from "react";
import Typewriter from "../layout/aboutMe/TypeWriter";
import { cn } from "@/lib/utils";

export default function AboutMe() {
	const Devision = [
		"Software Engineering",
		"Frond-end Developer",
		"Back-end Developer",
		"Embedded System Enthusiast",
	];

	const resposiveCard = cn("xl:h-100 xl:w-80 md:h-80 md:w-60 h-70 w-50 ");

	return (
		<section id="about" className="w-full mb-50 scroll-mt-40">
			<div className="container mx-auto text-white px-8">
				<span className="expe-title text-accent/75 font-semibold text-2xl mb-5 ">| Who I&apos;am</span>
				<div className="grid grid-cols-[.7fr_1fr]  max-sm:grid-cols-1 md:my-35 max-sm:my-15 relative  gap-10 place-items-center">
					<div className=" *:shadow-[0px_0px_6px_#ffffff] relative ">
						<div
							className={cn(
								resposiveCard,
								"bg-panel rounded-xl relative overflow-hidden border-2 border-white z-2",
							)}
						>
							<Image
								src={"/profile.png"}
								alt="profilePicture"
								width={2000}
								height={2000}
								className=" object-cover z-10 bg-linear-to-bl from-panel-hover to-secondary "
								priority={true}
							/>
							<div className="flex justify-center items-center flex-col my-5">
								<h3 className=" text-white text-3xl max-xl:text-2xl font-extrabold z-10">Firyan Syah</h3>
								<Typewriter
									words={Devision}
									className="z-12 text-base max-xl:text-sm text-accent font-bold"
								/>
							</div>

							<div
								className={`w-100 h-30  bg-panel absolute rotate-20 right-10 xl:top-60 md:top-40 top-30`}
							></div>
							<div
								className={`w-100 h-30 bg-panel absolute rotate-160 left-10 xl:top-60 md:top-40 top-30`}
							></div>
						</div>
						<div
							className={`bg-secondary outline-2 rounded-xl ${resposiveCard} absolute z-1 rotate-6 top-0`}
						></div>
						<div
							className={`bg-panel outline-2 rounded-xl ${resposiveCard} absolute z-0 rotate-12 top-0`}
						></div>
					</div>
					<div className="flex-col flex justify-center">
						<h2 className="text-3xl font-extrabold mb-5">
							Get to Know <span className="text-accent">Firyan Syah</span>
						</h2>
						<p>
							I&apos;m a <strong className="text-accent">Software Engineering</strong> who is passionate
							about developing reliable and efficient solutions. From IoT and low-level systems to modern
							web applications, I enjoy creating technology that solves real-world problems.
						</p>
						<p className="mt-4">
							Working across software and hardware has taught me to think in systems, not just code. I
							focus on building scalable, maintainable, and user-centered applications while continuously
							exploring new technologies through hands-on projects.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
