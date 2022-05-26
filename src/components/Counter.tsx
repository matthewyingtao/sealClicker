import React from "react";
import { useCounter } from "../hooks/counterHooks";
import { useAppDispatch } from "../hooks/storeHooks";

export default function Counter() {
	const dispatch = useAppDispatch();
	const count = useCounter(dispatch);

	return (
		<div style={{ display: "flex", flexDirection: "column" }}>
			<p>{count}</p>
		</div>
	);
}
