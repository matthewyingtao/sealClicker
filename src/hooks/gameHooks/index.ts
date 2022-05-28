import { useCallback, useEffect } from "react";
import { changeCountBy } from "../../store/slices/counterSlice";
import { useAppDispatch, useAppSelector } from "../storeHooks";

export const useGame = () => {
	const dispatch = useAppDispatch();

	const countPerSecond = useAppSelector((state) => {
		return state.buildings.reduce(
			(prev, curr) => prev + curr.quantity * curr.building.productionSpeed,
			0
		);
	});

	const addCount = useCallback(
		() => dispatch(changeCountBy(countPerSecond / 20)),
		[countPerSecond]
	);

	useEffect(() => {
		const tick = setInterval(addCount, 50);
		return () => clearInterval(tick);
	}, [addCount]);

	return {
		countPerSecond,
	};
};
