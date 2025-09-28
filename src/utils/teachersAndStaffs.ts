interface TeachersType {
	id: number;
	name: string;
	title: string;
	role: string;
	imageSrc: string;
}

export const teachers: TeachersType[] = [
	{
		id: 1,
		name: "Wiro",
		title: "S.Sos., M.Si",
		role: "Guru Matematika",
		imageSrc: "./english-flag.jpg",
	},
	{
		id: 2,
		name: "Imam Rakhmat",
		title: "S.Sos., M.Si",
		role: "Kepala Sekolah",
		imageSrc: "./teachers/imam.jpg",
	},
	{
		id: 3,
		name: "Imam Rakhmat",
		title: "S.Sos., M.Si",
		role: "Kepala Sekolah",
		imageSrc: "./teachers/imam.jpg",
	},
	{
		id: 4,
		name: "Imam Rakhmat",
		title: "S.Sos., M.Si",
		role: "Kepala Sekolah",
		imageSrc: "./teachers/imam.jpg",
	},
	// {
	// 	id: 5,
	// 	name: "Imam Rakhmat",
	// 	title: "S.Sos., M.Si",
	// 	role: "Kepala Sekolah",
	// 	imageSrc: "./teachers/imam.jpg",
	// },
	{
		id: 6,
		name: "Rahmat Widi R",
		title: "S.Sos., M.Si",
		role: "Guru Informatika",
		imageSrc: "./indonesia-flag.jpg",
	},
];

export type { TeachersType };
