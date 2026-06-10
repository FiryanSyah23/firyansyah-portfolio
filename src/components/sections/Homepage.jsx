import React from "react";
import Image from "next/image";

export default function Homepage() {
	return (
		<section id="home" className="lg:py-32 py-20">
			<div className="container mx-auto pt-30 px-4 ">
				<div className="grid lg:grid-cols-2 grid-cols-1  text-white">
					<div className="main-header title flex justify-center lg:text-start text-center flex-col gap-3">
						<h1 className="lg:text-4xl/snug text-2xl/snug font-bold">Hello I&apos;m Firyan Syah</h1>
						<p className="lg:text-8xl text-6xl tracking-tight">
							Let&apos;s <span className="text-accent font-bold">Bring</span> <br /> Your <span className="text-accent font-bold">Ideas</span> to Life.
						</p>
						<p className="lg:text-lg/relaxed text-sm/relaxed text-muted ">
							I enjoy building websites, mobile applications, and embedded systems that are both functional and engaging. With a background in Electrical
							Engineering and hands-on experience in IoT automation and hardware control, I use technologies such as JavaScript, Node.js, React, React
							Native, Python, and C/C++ to continuously learn and create solutions — from web interfaces to real-world hardware systems.
						</p>
					</div>
					<div className="logo justify-end items-center rounded-full hidden lg:flex">
						<Image src={"/OctaSys.png"} alt="Logo Main Page" width={500} height={500} className="w-121 h-auto" priority={true} />
					</div>
				</div>
			</div>
		</section>
	);
}
