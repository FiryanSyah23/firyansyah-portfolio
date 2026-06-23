import Link from "next/link";

export const metadata = {
	title: "Project Not Found",
	robots: { index: false, follow: false },
};

export default function NotFound() {
	return (
		<div className="container mx-auto h-dvh flex items-center justify-center flex-col gap-6 text-white px-4 pt-20">
			<div className="text-7xl sm:text-8xl mb-2">🔍</div>

			<h1 className="text-accent text-center text-3xl sm:text-5xl font-extrabold">
				404 | Project Not Found
			</h1>

			<p className="text-muted text-center max-w-md text-sm sm:text-base">
				The project you&apos;re looking for doesn&apos;t exist, may have been removed, or the URL is
				incorrect.
			</p>

			<Link
				href="/project"
				className="bg-primary hover:bg-secondary active:bg-secondary outline-2 hover:outline-offset-3 active:outline-offset-3 p-3 text-lg sm:text-xl rounded-2xl text-white w-70 text-center"
			>
				&laquo; Back to Projects
			</Link>
		</div>
	);
}
