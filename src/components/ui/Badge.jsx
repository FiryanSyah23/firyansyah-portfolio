import { cn } from "@/lib/utils";
import React from "react";

export default function Badge({ children, className }) {
	return (
		<div
			className={cn(
				`text-xs font-semibold  p-2 text-nowrap text-center bg-secondary rounded-sm `,
				className,
			)}
		>
			{children}
		</div>
	);
}
