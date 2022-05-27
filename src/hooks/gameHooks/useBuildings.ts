import { useEffect, useState } from "react";
import { useAppSelector } from "../storeHooks";

export const useBuildings = (): number => {
	const buildings = useAppSelector((state) => state.buildings);
	const [countPerSecond, setCountPerSecond] = useState(
		buildings.reduce(
			(prev, curr) => prev + curr.count * curr.building.productionSpeed,
			0
		)
	);

	useEffect(() => {
		setCountPerSecond(
			buildings.reduce(
				(prev, curr) => prev + curr.count * curr.building.productionSpeed,
				0
			)
		);
	}, [buildings]);

	return countPerSecond;
};
