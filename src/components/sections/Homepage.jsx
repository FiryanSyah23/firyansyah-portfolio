import React from "react";
import LeftMotion from "../layout/homepage/LeftMotion";
import RightMotion from "../layout/homepage/RightMotion";

export default function Homepage() {
	return (
		<section id="home" className="h-dvh scroll-mt-20 flex items-center">
			<div className="container mx-auto px-4">
				<div className="grid lg:grid-cols-2 grid-cols-1 text-white">
					<LeftMotion />

					<RightMotion />
				</div>
			</div>
		</section>
	);
}
