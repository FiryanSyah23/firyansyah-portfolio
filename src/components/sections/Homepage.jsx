import React from "react";
import Image from "next/image";

export default function Homepage() {
	return (
		<section id="home" className="h-dvh scroll-mt-20 flex items-center">
			<div className="container mx-auto px-4 ">
				<div className="grid lg:grid-cols-2 grid-cols-1  text-white">
					<div className="main-header title flex justify-center lg:text-start text-center flex-col gap-3  ">
						<h1 className="max-md:text-2xl sm:text-4xl md:text-2xl xl:text-4xl font-bold">
							Hello I&apos;m Firyan Syah
						</h1>
						<p className="max-md:text-5xl/tight sm:text-7xl md:text-6xl xl:text-8xl tracking-tight">
							Let&apos;s <span className="text-accent font-bold">Bring</span> <br /> Your{" "}
							<span className="text-accent font-bold">Ideas</span> to Life
						</p>
						<p className="md:text-base/relaxed sm:text-base/relaxed max-md:text-sm/relaxed xl:text-lg/relaxed text-muted mt-2 ">
							I build web applications, mobile apps, embedded & IoT systems — bridging the gap between
							software and hardware. Always learning, always shipping.
						</p>
					</div>
					<div className="logo lg:justify-end m-5 lg:m-0 justify-center flex items-center rounded-full row-1 lg:col-2">
						<Image
							src={"/OctaSys.png"}
							alt="FISoctasys brand"
							width={500}
							height={500}
							className="xl:w-140 max-xl:w-110  max-lg:w-25 h-auto"
							priority={true}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
