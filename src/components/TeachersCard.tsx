import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

import "../styles/teacherCards.css";

import type { TeachersType } from "../utils/teachersAndStaffs";

export default function TeachersCard({
	teachers,
}: {
	teachers: TeachersType[];
}) {
	// const cardsWidth = teachers.length * 288;
	const cardRefs = useRef<HTMLDivElement[]>([]);

	// useEffect(() => {

	// })

	useGSAP(() => {
		gsap.set(cardRefs.current, {
			x: (i) => i * 288,
		});
		gsap.to(cardRefs.current, {
			x: "+=1584",
			duration: 8,
			ease: "none",

			modifiers: {
				x: gsap.utils.unitize((x) => (parseFloat(x) % 1440) + 250 / 2),
			},
			repeat: -1,
		});
	}, []);
	return teachers.map((teacher: TeachersType, i: number) => {
		return (
			<div
				ref={(el) => {
					if (el) cardRefs.current[i] = el;
				}}
				className="card position-absolute"
				style={{ width: "18rem" }}
				key={teacher.id}>
				<img
					src={teacher.imageSrc}
					className="card-img-top "
					alt="Teacher"
					height={"200px"}
					style={{ objectFit: "cover", objectPosition: "top" }}
				/>
				<div className="card-body bg-info rounded-bottom-1">
					<p className="card-text">
						{teacher.name}, {teacher.title}
					</p>
				</div>
			</div>
		);
	});
}
