import React from "react";
import { useGame } from "../hooks/gameHooks";
import { useAppDispatch } from "../hooks/storeHooks";

export default function Counter() {
	const dispatch = useAppDispatch();
	const count = useGame(dispatch);

	return (
		<div style={{ display: "flex", flexDirection: "column" }}>
			<p>{count}</p>
		</div>
	);
}
