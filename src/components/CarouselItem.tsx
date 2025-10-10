interface CarouselItemType {
	imgSrc: string;
	imgAlt: string;
	name: string;
}

export default function CarouselItem({
	imgSrc,
	imgAlt,
	name,
}: CarouselItemType) {
	return (
		<div className={`card carousel-card`}>
			<img src={imgSrc} className="card-img-top" alt={imgAlt} loading="lazy" />
			<div className="card-body text-center p-0 d-flex align-items-center justify-content-center">
				<p className="card-title mb-0">{name}</p>
			</div>
		</div>
	);
}
