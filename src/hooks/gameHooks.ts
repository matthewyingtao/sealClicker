import { useEffect } from "react";
import { incrementByAmount } from "../store/slices/counterSlice";
import { AppDispatch } from "../store/store";
import { useBuildings } from "./gameHooks/useBuildings";
import { useAppSelector } from "./storeHooks";

export const useGame = (dispatch: AppDispatch): number => {
	const count = useAppSelector((state) => state.counter.value);
	const building = useBuildings();

	useEffect(() => {
		function tick(dispatch: AppDispatch, incrementByAmount: Function) {
			setTimeout(() => {
				dispatch(incrementByAmount(building));
				tick(dispatch, incrementByAmount);
			}, 100);
		}
		tick(dispatch, incrementByAmount);
	}, []);

	return count;
};
