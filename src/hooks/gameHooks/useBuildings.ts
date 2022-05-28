import { useCallback } from "react";
import { tickRate } from "../../config/config";
import { changeCountBy } from "../../store/slices/counterSlice";
import { useAppDispatch, useAppSelector } from "../storeHooks";

export const useBuildings = () => {
	const dispatch = useAppDispatch();

	const countPerSecond = useAppSelector((state) => {
		return state.buildings.reduce(
			(prev, curr) =>
				prev + curr.state.quantity * curr.building.productionSpeed,
			0
		);
	});

	const addCount = useCallback(
		() => dispatch(changeCountBy(countPerSecond / (1000 / tickRate))),
		[countPerSecond]
	);

	return {
		countPerSecond,
		addCount,
	};
};
