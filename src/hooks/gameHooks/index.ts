import { useEffect } from "react";
import { tickRate } from "../../config/config";
import { useBuildings } from "./useBuildings";

export const useGame = () => {
	const { addCount } = useBuildings();

	useEffect(() => {
		const tick = setInterval(addCount, tickRate);
		return () => clearInterval(tick);
	}, [addCount]);
};
