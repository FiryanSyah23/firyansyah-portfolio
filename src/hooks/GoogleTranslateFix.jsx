// src/hooks/GoogleTranslateFix.jsx
"use client";
import { useEffect } from "react";

export default function GoogleTranslateFix() {
	useEffect(() => {
		if (typeof Node === "function" && Node.prototype) {
			const originalRemoveChild = Node.prototype.removeChild;
			Node.prototype.removeChild = function (child) {
				if (child.parentNode !== this) {
					if (process.env.NODE_ENV !== "production") {
						console.warn("[GoogleTranslateFix] Skipped removeChild on detached node", child);
					}
					return child;
				}
				return originalRemoveChild.apply(this, arguments);
			};

			const originalInsertBefore = Node.prototype.insertBefore;
			Node.prototype.insertBefore = function (newNode, referenceNode) {
				if (referenceNode && referenceNode.parentNode !== this) {
					if (process.env.NODE_ENV !== "production") {
						console.warn(
							"[GoogleTranslateFix] Skipped insertBefore, reference node detached",
							referenceNode,
						);
					}
					return newNode;
				}
				return originalInsertBefore.apply(this, arguments);
			};
		}
	}, []);

	return null; // komponen ini nggak render apa-apa, cuma "efek samping"
}
