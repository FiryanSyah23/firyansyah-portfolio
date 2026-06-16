import Link from "next/link";

export default function ProjectPage() {
	return (
		<div className=" h-screen container flex justify-center items-center flex-col gap-10">
			<h1 className="text-warning font-bold text-5xl">Coming Soon</h1>
			<Link
				href={"/"}
				scroll={false}
				className={`bg-primary/75 hover:bg-secondary text-white text-xl text-center p-3 w-60 font-semibold rounded-md duration-600 outline-1`}
			>
				&laquo; Back to home
			</Link>
		</div>
	);
}
