import React from "react";
import { useGame } from "../hooks/gameHooks";
import { useAppSelector } from "../hooks/storeHooks";

export default function Counter() {
	useGame();

	const count = useAppSelector((state) => state.counter.value);

	return (
		<div style={{ display: "flex", flexDirection: "column" }}>
			<p>{count}</p>
		</div>
	);
}
