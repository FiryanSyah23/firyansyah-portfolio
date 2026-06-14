"use client";
import Experience from "@/components/sections/Experience";
import Homepage from "@/components/sections/Homepage";
import Projects from "@/components/sections/Projects";
import ScrollToTop from "@/hooks/ScrollToTop";

export default function Home() {
	return (
		<>
			<ScrollToTop />
			<Homepage />
			<Experience />
			<Projects />
		</>
	);
}
