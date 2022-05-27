import { useAppSelector } from "../hooks/storeHooks";

export default function Counter() {
	const count = useAppSelector((state) => state.counter.value);

	return (
		<div style={{ display: "flex", flexDirection: "column" }}>
			<p>{count.toFixed(0)}</p>
		</div>
	);
}
