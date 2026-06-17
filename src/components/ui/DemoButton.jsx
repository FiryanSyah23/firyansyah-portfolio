'use client'
import React from "react";

export default function DemoButton({ item }) {
	return (
		<button
			onClick={() => {
				window.open(item.demo, "_blank", "noopener,noreferrer");
			}}
			className={`bg-primary hover:bg-secondary p-1 font-semibold rounded-md  outline-2 hover:outline-offset-5  w-full  ${!item.demo ? "hidden" : ""} `}
		>
			View Project
		</button>
	);
}
