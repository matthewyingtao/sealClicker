import { useEffect } from "react";
import { increment } from "../store/slices/counterSlice";
import { AppDispatch } from "../store/store";
import { useAppSelector } from "./storeHooks";

function tick(dispatch: AppDispatch, increment: Function) {
	setTimeout(() => {
		dispatch(increment());
		tick(dispatch, increment);
	}, 100);
}

export const useCounter = (dispatch: AppDispatch): number => {
	const count = useAppSelector((state) => state.counter.value);

	useEffect(() => {
		tick(dispatch, increment);
	}, []);

	return count;
};
