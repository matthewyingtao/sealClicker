export type Building = {
	name: string;
	baseCost: number;
	productionSpeed: number;
	icon: string;
	id: number;
};

export const buildings: Building[] = [
	{
		name: "Osu Player",
		baseCost: 15,
		productionSpeed: 1,
		icon: new URL("../assets/trash.png", import.meta.url).href,
	},
	{
		name: "Radar",
		baseCost: 100,
		productionSpeed: 5,
		icon: new URL("../assets/radar.png", import.meta.url).href,
	},
	{
		name: "Factory",
		baseCost: 200,
		productionSpeed: 100,
		icon: new URL("../assets/factory.png", import.meta.url).href,
	},
	{
		name: "Astolfo Bean",
		baseCost: 50000,
		productionSpeed: 250,
		icon: new URL("../assets/bean.png", import.meta.url).href,
	},
	{
		name: "Collector",
		baseCost: 200000,
		productionSpeed: 750,
		icon: new URL("../assets/collector.png", import.meta.url).href,
	},
	{
		name: "Hell",
		baseCost: 500000,
		productionSpeed: 1750,
		icon: new URL("../assets/fire.png", import.meta.url).href,
	},
	{
		name: "CertainlyT",
		baseCost: 2,
		productionSpeed: -500,
		icon: new URL("../assets/riot.png", import.meta.url).href,
	},
	{
		name: "Beeg Seal",
		baseCost: 1000000,
		productionSpeed: 5000,
		icon: new URL("../assets/plush_seal.png", import.meta.url).href,
	},
	{
		name: "Seal of Hell",
		baseCost: 5000000,
		productionSpeed: 20000,
		icon: new URL("../assets/hell_seal.png", import.meta.url).href,
	},
].map((building, i) => ({
	...building,
	id: i,
}));
