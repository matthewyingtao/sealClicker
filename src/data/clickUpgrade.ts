import { costMultiplier } from "../config/config";
import { ScalingBuyable } from "../shared/buyables";

export const clickUpgrade: ScalingBuyable = {
	name: "Upgrade Click",
	baseCost: 50,
	costMultiplier: costMultiplier,
};
