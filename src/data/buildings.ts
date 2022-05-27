export type Building = {
	name: string;
	baseCost: number;
	productionSpeed: number;
	icon: string;
	id: number;
};

export const buildings: Building[] = [
	{
		name: "Building 1",
		baseCost: 15,
		productionSpeed: 1,
		icon: "../assets/trash.png",
	},
	{
		name: "Building 2",
		baseCost: 100,
		productionSpeed: 5,
		icon: "../assets/radar.png",
	},
].map((building, i) => ({
	...building,
	icon: new URL(building.icon, import.meta.url).href,
	id: i,
}));
