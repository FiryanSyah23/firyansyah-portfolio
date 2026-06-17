"use client";
import { useRouter } from "next/navigation";

export default function ProjectPage() {
	const router = useRouter();

	return (
		<div className="h-dvh container mx-auto flex justify-center items-center flex-col gap-10">
			<h1 className="text-warning font-bold text-5xl">Coming Soon</h1>
			<button
				className={`bg-primary/75 hover:bg-secondary text-white text-xl text-center p-3 w-60 font-semibold rounded-md duration-600 outline-1`}
				onClick={() => router.back()}
			>
				&laquo; Back to home
			</button>
		</div>
	);
}
