import Image from "next/image";

export default function Home() {
	return (
		<>
			<div className="container mx-auto pt-30 px-4 ">
				<section id="home" className="py-32">
					<div className="grid grid-cols-2  gap-10 text-white">
						<div className="main-header title flex justify-center flex-col gap-3">
							<h1 className="text-4xl/snug font-bold">Hello I&apos;m Firyan Syah</h1>
							<p className="text-8xl tracking-tight">
								Let&apos;s <span className="text-accent ">Bring</span> <br /> Your Ideas to Life.
							</p>
							<p className="text-lg/relaxed text-muted">
								I enjoy building websites and mobile applications that are both functional and engaging. Using technologies such as JavaScript, Node.js, Rust,
								React, and React Native, I continuously learn and create solutions that help bring ideas to life.
							</p>
						</div>
						<div className="logo flex justify-center items-center rounded-full">
							<Image src={"/OctaSys.png"} alt="Logo Main Page" width={500} height={500} />
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
