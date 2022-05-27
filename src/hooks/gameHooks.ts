import { useEffect } from "react";
import { incrementByAmount } from "../store/slices/counterSlice";
import { useAppDispatch, useAppSelector } from "./storeHooks";

export const useGame = () => {
	const dispatch = useAppDispatch();
	const countPerSecond = useAppSelector((state) => {
		return state.buildings.reduce(
			(prev, curr) => prev + curr.count * curr.building.productionSpeed,
			0
		);
	});

	const addCount = () => dispatch(incrementByAmount(countPerSecond));

	useEffect(() => {
		const tick = setInterval(addCount, 16);
		return () => clearInterval(tick);
	}, [addCount]);

	return;
};
