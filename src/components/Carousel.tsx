import { useEffect, useRef } from "react";
import CarouselItem from "./CarouselItem";

import "../styles/carousel.css";

export default function Carousel() {
	const carouselRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const carouselChildren = Array.from(carouselRef.current!.children);
		const totalChildren = carouselChildren.length;
		const duration = 30;
		carouselChildren.forEach((item, index) => {
			console.log(item);
			const delay =
				(duration / totalChildren) * (totalChildren - (index + 1)) * -1;
			console.log(delay);
			(item as HTMLElement).style.left = `max(${totalChildren * 150}px, 100%)`;
			(item as HTMLElement).style.animationDelay = delay.toString() + "s";
		});
	});

	return (
		<div
			ref={carouselRef}
			className="carousel border-top border-bottom border-success border-opacity-25 d-flex align-items-center">
			<CarouselItem
				imgSrc="./teachers/ramadhan.jpg"
				imgAlt="Ramadhan, S.T"
				name="Ramadhan, S.T"
			/>
			<CarouselItem
				imgSrc="./teachers/riyan.jpg"
				imgAlt="Riyan Sujatmiko, S.T"
				name="Riyan Sujatmiko, S.T"
			/>
			<CarouselItem
				imgSrc="./teachers/ica.jpg"
				imgAlt="Ica Krismayasanti, S.Pd"
				name="Ica Krismayasanti, S.Pd"
			/>
			<CarouselItem
				imgSrc="./teachers/sukadianto.jpg"
				imgAlt="Sukadianto Lantu, S.T"
				name="Sukadianto Lantu, S.T"
			/>
			<CarouselItem
				imgSrc="./teachers/rachmat-hidayat.jpg"
				imgAlt="Rachmat Hidayat, S.M"
				name="Rachmat Hidayat, S.M"
			/>
			<CarouselItem
				imgSrc="./teachers/endah.jpg"
				imgAlt="Sri Endah Puspitarini, S.T"
				name="Sri Endah Puspitarini, S.T"
			/>
			<CarouselItem
				imgSrc="./teachers/adhi.jpg"
				imgAlt="Adhi Dharma, S.T"
				name="Adhi Dharma, S.T"
			/>
			<CarouselItem
				imgSrc="./teachers/rizal.jpg"
				imgAlt="Rizal Pahlevi, S.Pd"
				name="Rizal Pahlevi, S.Pd"
			/>
		</div>
	);
}
