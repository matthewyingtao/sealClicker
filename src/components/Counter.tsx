import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";
import { incrementByAmount } from "../store/slices/counterSlice";

export default function Counter() {
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
		const tick = setInterval(addCount, 50);
		return () => clearInterval(tick);
	}, [addCount]);

	return (
		<div style={{ display: "flex", flexDirection: "column" }}>
			<p>{count}</p>
		</div>
	);
}
