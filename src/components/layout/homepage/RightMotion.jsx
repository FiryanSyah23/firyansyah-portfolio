'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function RightMotion() {
	return (
		<motion.div
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1, delay: 0.5 }}
			className="logo lg:justify-end m-5 lg:m-0 justify-center flex items-center max-md:order-1"
		>
			<motion.div
				animate={{
					rotate: [0, -5, 5, -5, 0],
				}}
				transition={{
					duration: 0.7,
					delay: 1,
					repeat: Infinity,
					repeatDelay: 7,
					ease: "easeInOut",
				}}
			>
				<Image
					src="/OctaSym.png"
					alt="fisoctasym brand"
					width={500}
					height={500}
					className="xl:w-140 max-xl:w-110 max-lg:w-25 h-auto"
					priority
				/>
			</motion.div>
		</motion.div>
	);
}