import { useEffect } from "react";
import { incrementByAmount } from "../store/slices/counterSlice";
import { useAppDispatch, useAppSelector } from "./storeHooks";

export const useGame = (): number => {
	const dispatch = useAppDispatch();
	const { count, countPerSecond } = useAppSelector((state) => {
		return {
			count: state.counter.value,
			countPerSecond: state.buildings.reduce(
				(prev, curr) => prev + curr.count * curr.building.productionSpeed,
				0
			),
		};
	});

	const addCount = () => dispatch(incrementByAmount(countPerSecond));

	useEffect(() => {
		setInterval(addCount, 50);
	}, []);

	return count;
};
