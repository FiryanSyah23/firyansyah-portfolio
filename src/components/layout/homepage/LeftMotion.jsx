"use client";
import { delay } from "framer-motion";
import { motion } from "framer-motion";
import React from "react";

const container = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.3,
		},
	},
};

const word = {
	hidden: { opacity: 0, y: -20 },
	show: { opacity: 1, y: 0 },
};

export default function LeftMotion() {
	const text = ["Let's", "Bring", "Your", "Ideas", "to", "Life"];

	return (
		<motion.div
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="main-header title flex justify-center lg:text-start text-center flex-col gap-3 max-md:order-2"
		>
			<h1 className="max-md:text-2xl sm:text-4xl xl:text-4xl font-bold">Hello I&apos;m Firyan Syah</h1>

			<p className="max-md:text-5xl/tight sm:text-7xl md:text-6xl xl:text-8xl tracking-tight leading-tight">
				<motion.span variants={container} initial="hidden" animate="show">
					{text.map((item, i) => {
						const isAccent = item === "Bring" || item === "Ideas";

						return (
							<motion.span
								key={i}
								variants={word}
								className={`inline-block mr-3 ${isAccent ? "text-accent font-bold" : ""} `}
								translate="no"
							>
								{isAccent ? (
									<motion.span
										animate={{
											y: [0, -10, 0],
											rotate: [0, -5, 5, -5, 0],
										}}
										transition={{
											duration: 0.8,
											repeat: Infinity,
											repeatDelay: 5,
											ease: "easeInOut",
											delay: Number(i - 0.6),
										}}
										className="inline-block"
									>
										{item}
									</motion.span>
								) : (
									item
								)}
							</motion.span>
						);
					})}
				</motion.span>
			</p>

			<p className="text-muted mt-2 md:text-base/relaxed">
				I build web applications, mobile apps, embedded & IoT systems — bridging the gap between
				software and hardware. Always learning, always shipping.
			</p>
		</motion.div>
	);
}
