import React from "react";
import Image from "next/image";

export default function Homepage() {
	return (
		<section id="home" className="lg:py-22 py-20 scroll-mt-20 h-screen flex items-center">
			<div className="container mx-auto px-4 ">
				<div className="grid lg:grid-cols-2 grid-cols-1  text-white">
					<div className="main-header title flex justify-center  sm:text-start text-center flex-col gap-3  ">
						<h1 className="lg:text-4xl/snug text-2xl/snug font-bold">Hello I&apos;m Firyan Syah</h1>
						<p className="lg:text-7xl text-6xl tracking-tight">
							Let&apos;s <span className="text-accent font-bold">Bring</span> <br /> Your <span className="text-accent font-bold">Ideas</span> to Life.
						</p>
						<p className="lg:text-lg/relaxed text-sm/relaxed text-muted mt-8 ">
							I enjoy building websites, mobile applications, and embedded systems that are both functional and engaging. With a background in Electrical
							Engineering and hands-on experience in IoT automation and hardware control, I use technologies such as JavaScript, Node.js, React, React
							Native, Python, and C/C++ to continuously learn and create solutions — from web interfaces to real-world hardware systems.
						</p>
					</div>
					<div className="logo sm:justify-end m-5 sm:m-0 justify-center flex items-center rounded-full row-1 sm:col-2">
						<Image src={"/OctaSys.png"} alt="Logo Main Page" width={500} height={500} className="xl:w-120 max-xl:w-90 max-md:w-25 h-auto" priority={true} />
					</div>
				</div>
			</div>
		</section>
	);
}
