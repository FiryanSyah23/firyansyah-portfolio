"use client";
import Experience from "@/components/sections/Experience";
import Homepage from "@/components/sections/Homepage";
import ScrollToTop from "@/hooks/ScrollToTop";

export default function Home() {
	return (
		<>
			<ScrollToTop />
			<Homepage />
			<Experience />
		</>
	);
}
