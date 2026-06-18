import React from "react";

export default function Badge({ children }) {
	return <div className={`text-xs font-semibold  p-2 text-nowrap text-center bg-secondary rounded-sm first:bg-gray-700/75`}>{children}</div>;
}
