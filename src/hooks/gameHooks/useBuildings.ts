import { useAppSelector } from "../storeHooks";

export const useBuildings = (): number => {
	const buildings = useAppSelector((state) => state.buildings);

	const countPerSecond = buildings.reduce(
		(prev, curr) => prev + curr.count * curr.building.productionSpeed,
		0
	);

	return countPerSecond;
};
