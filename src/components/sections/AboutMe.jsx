"use client";
import Image from "next/image";
import React from "react";
import Typewriter from "../layout/aboutMe/TypeWriter";
import { cn } from "@/lib/utils";
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

const CardProfile = {
	hidden: {
		scale: 0.8,
		opacity: 0,
		x: -20,
		rotate: -20,
	},
	show: {
		scale: 1,
		opacity: 1,
		rotate: 0,
		x: 0,
		transition: {
			duration: 0.5,
		},
	},
};

const title = {
	hidden: {
		opacity: 0,
		x: 100,
		scale: 0,
	},
	show: {
		scale: 1,
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.5,
			ease: "easeInOut",
		},
	},
};

const item = {
	hidden: {
		opacity: 0,
		y: 50,
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: "easeOut",
		},
	},
};

export default function AboutMe() {
	const divisions = [
		"Software Engineer",
		"Front-end Developer",
		"Back-end Developer",
		"Embedded System Enthusiast",
	];

	const resposiveCard = cn("xl:h-100 xl:w-80 md:h-80 md:w-60 h-80 w-60 ");

	return (
		<section id="about" className="w-full py-20 scroll-mt-40">
			<div className="container mx-auto text-white sm:px-8 px-4 ">
				<motion.div
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="grid grid-cols-[.5fr_1fr]  max-sm:grid-cols-1 md:my-35 max-sm:my-28 relative  gap-10 place-items-center"
				>
					<div className=" *:shadow-[0px_0px_6px_#ffffff] relative ">
						<motion.div
							variants={CardProfile}
							className={`bg-panel outline-2 rounded-xl ${resposiveCard} absolute z-0 rotate-12 top-0`}
						></motion.div>
						<motion.div
							variants={CardProfile}
							className={`bg-secondary outline-2 rounded-xl ${resposiveCard} absolute z-1 rotate-6 top-0`}
						></motion.div>

						<motion.div
							variants={CardProfile}
							className={cn(
								resposiveCard,
								"bg-panel rounded-xl relative overflow-hidden border-2 border-white z-2",
							)}
						>
							<Image
								src={"/profile.png"}
								alt="Firyan Syah profile photo - Software Engineer"
								width={350}
								height={350}
								className=" object-cover z-10 bg-linear-to-bl from-panel-hover to-secondary "
							/>
							<div className="flex justify-center items-center flex-col my-5">
								<span className=" text-white text-3xl max-xl:text-2xl font-extrabold z-10">
									Firyan Syah
								</span>
								<Typewriter
									words={divisions}
									className="z-12 text-base max-xl:text-sm text-accent font-bold"
								/>
							</div>

							<div
								className={`w-100 h-30  bg-panel absolute rotate-20 right-10 xl:top-60 md:top-40 top-40`}
							></div>
							<div
								className={`w-100 h-30 bg-panel absolute rotate-160 left-10 xl:top-60 md:top-40 top-40`}
							></div>
						</motion.div>
					</div>
					<div className="flex-col flex justify-center">
						<motion.h2 variants={title} className="text-3xl font-extrabold mb-5">
							Get to Know <span className="text-accent">Firyan Syah</span>
						</motion.h2>

						<div className="text-muted space-y-4 max-h-full ">
							<motion.p variants={item}>
								I&apos;m a passionate <strong className="text-accent">Software Engineer </strong>
								focused on building reliable and efficient solutions. From embedded systems and IoT to
								modern web applications, I enjoy turning ideas into products that solve real-world problems.
							</motion.p>

							<motion.p variants={item}>
								Besides working as a developer, I founded
								<strong className="text-accent"> FISOCTASYM</strong>, my personal brand and web development
								service. Through FISOCTASYM, I help individuals, businesses, and organizations create
								modern, responsive, and high-performance websites with a strong emphasis on user experience
								and clean design.
							</motion.p>

							<motion.p variants={item}>
								The FISOCTASYM symbol represents creativity, technology, and continuous growth. It reflects
								my mission to bridge software and hardware while delivering digital solutions that bring
								ideas to life.
							</motion.p>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
