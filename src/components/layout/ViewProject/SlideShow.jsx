"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect, useCallback } from "react";

export default function SlideShow({ project }) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState(1);
	const [isPaused, setIsPaused] = useState(false);

	const goNext = useCallback(() => {
		setDirection(1);
		setCurrentIndex((prev) => (prev + 1) % project.projectImg.length);
	}, [project.projectImg.length]);

	const goPrev = useCallback(() => {
		setDirection(-1);
		setCurrentIndex((prev) => (prev - 1 + project.projectImg.length) % project.projectImg.length);
	}, [project.projectImg.length]);

	useEffect(() => {
		if (isPaused) return;

		const interval = setInterval(() => {
			goNext();
		}, 3500);

		return () => clearInterval(interval);
	}, [isPaused, goNext]);

	const variant = {
		enter: (direction) => ({
			opacity: 0,
			x: direction > 0 ? "100%" : "-100%", // ← selalu mulai dari pinggir
		}),
		center: {
			opacity: 1,
			x: "0%",
		},
		exit: (direction) => ({
			opacity: 0,
			x: direction > 0 ? "-100%" : "100%",
		}),
	};

	return (
		<div
			className={cn(
				"mt-15 text-white w-full  shadow-[0px_0px_10px_#b13bff78] inset-shadow-2xs inset-shadow-[0px_0px_10px_#b13bff] ",
				"h-200 max-sm:h-50  rounded-xl overflow-hidden relative  ",
			)}
			onMouseEnter={() => setIsPaused(true)}
			onMouseLeave={() => setIsPaused(false)}
		>
			<AnimatePresence custom={direction}>
				<motion.div
					key={currentIndex}
					variants={variant}
					custom={direction}
					initial="enter"
					animate="center"
					exit="exit"
					transition={{ duration: 0.8, ease: [0.83, 0.03, 0.51, 0.99] }}
					className="absolute inset-0 "
				>
					<Image
						src={project.projectImg[currentIndex]}
						alt="slider"
						fill
						className="object-cover rounded-lg"
						priority={true}
					/>
				</motion.div>
			</AnimatePresence>

			<div className=" justify-between  sm:text-3xl text-2xl items-center h-full w-full top-0 z-2 absolute flex *:w-50">
				<button onClick={goPrev} className="h-full text-start">
					<i className="ri-arrow-left-wide-line   p-2 rounded-full bg-secondary/20  m-2"></i>
				</button>
				<button onClick={goNext} className="h-full text-end">
					<i className="ri-arrow-right-wide-line  p-2 rounded-full bg-secondary/20  m-2"></i>
				</button>
			</div>

			<div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-10">
				{project.projectImg.map((_, index) => (
					<button
						key={index}
						onClick={() => {
							setDirection(index > currentIndex ? 1 : -1);
							setCurrentIndex(index);
						}}
						className={cn(
							"h-2 rounded-full transition-all duration-300",
							index === currentIndex ? "bg-white w-4" : "bg-white/40 w-2",
						)}
					/>
				))}
			</div>
		</div>
	);
}
