"use client";
import RenderExperienceCard from "../layout/ExperinceLayout/RenderExperienceCard";
import TechSkillsList from "../layout/ExperinceLayout/TechSkillsList";
import { motion } from "framer-motion";

const container = {
	hidden: {},
	show: {
		transition: {
			delayChildren: 0.4,
			staggerChildren: 0.3,
		},
	},
};

const fadeTop = {
	hidden: {
		y: -30,
		scale: 0,
		opacity: 0,
	},
	show: {
		y: 0,
		scale: 1,
		opacity: 1,
	},
};

export default function Experience() {
	return (
		<section id="experience" className="w-full py-20 scroll-mt-10  ">
			<div className="max-sm:px-4 px-8 container mx-auto ">
				<motion.h2
					initial={{ opacity: 0, y: -30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.8 }}
					transition={{ duration: 0.3, delay: 0.2, ease: "easeIn" }}
					className="text-accent font-semibold text-center text-3xl mt-10"
				>
					Experience & Tech Stack
				</motion.h2>
				<motion.div
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, amount: 0.2 }}
					className="mt-10"
				>
					<motion.h3 variants={fadeTop} className=" text-white font-semibold text-center text-xl  ">
						My Journey
					</motion.h3>
					<motion.p variants={fadeTop} className="lg:text-lg/relaxed text-sm/relaxed text-muted py-2 text-center">
						Setiap proyek menjadi kesempatan untuk terus belajar dan meningkatkan kemampuan. Dari pengembangan website
						hingga embedded system, saya selalu berusaha memberikan hasil yang rapi, efisien, dan mudah digunakan.
					</motion.p>
					<RenderExperienceCard fadeTop={fadeTop} />
				</motion.div>
				<div id="skillExperience" className="flex justify-center flex-col pt-20 scroll-mt-40">
					<motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
						<motion.h3 variants={fadeTop} className=" text-white font-semibold text-center text-xl">
							Programming Languages & Tools
						</motion.h3>
						<motion.p variants={fadeTop} className="lg:text-lg/relaxed text-sm/relaxed text-muted mt-5 text-center">
							Teknologi yang sering saya gunakan untuk membangun website modern, aplikasi, database, hingga proyek
							embedded dan Internet of Things.
						</motion.p>
					</motion.div>

					<TechSkillsList container={container} fadeTop={fadeTop} />
				</div>
			</div>
		</section>
	);
}
