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
		icon: new URL("../assets/trash.png", import.meta.url).href,
	},
	{
		name: "Building 2",
		baseCost: 100,
		productionSpeed: 5,
		icon: new URL("../assets/radar.png", import.meta.url).href,
	},
].map((building, i) => ({
	...building,
	id: i,
}));
