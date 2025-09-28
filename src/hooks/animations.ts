import { useState } from "react";
import useUpdateEffect from "./useUpdateEffect";

export function useRotating(initialize: boolean, theme: string) {
	const [icon, setIcon] = useState(true);
	const [rotating, setRotating] = useState(false);

	useUpdateEffect(() => {
		if (initialize) return;
		setRotating(true);

		const timerStart = setTimeout(() => {
			const isSunIcon = theme === "light" ? true : false;
			setIcon(isSunIcon);
		}, 400);

		const timerEnd = setTimeout(() => {
			setRotating(false);
		}, 600);

		return () => {
			clearTimeout(timerStart);
			clearTimeout(timerEnd);
		};
	}, [theme]);
	return { icon, rotating };
}

export function useFlip(
	initialize: boolean,
	locale: string,
	element: HTMLElement
) {
	useUpdateEffect(() => {
		if (initialize) return;
		element.classList.add("flip");
		const timerStart = setTimeout(() => {
			if (locale === "id")
				element.setAttribute("src", "indonesia-flag-removebg-cropped.png");
			else element.setAttribute("src", "english-flag-removebg.png");
		}, 300);

		const timerEnd = setTimeout(() => {
			element.classList.remove("flip");
		}, 600);

		return () => {
			clearTimeout(timerStart);
			clearTimeout(timerEnd);
		};
	}, [locale]);
}
