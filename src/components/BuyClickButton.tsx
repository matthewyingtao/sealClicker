import clickIcon from "../assets/cursor.png";
import { costMultiplier } from "../config/config";
import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";
import {
	changeCountBy,
	increaseClickPower,
} from "../store/slices/counterSlice";

export default function BuyClickButton() {
	const dispatch = useAppDispatch();
	const { count, cost } = useAppSelector((state) => ({
		count: state.counter.value,
		cost: state.counter.clickUpgradeCost,
	}));

	const canPurchase = count >= cost;

	const maxBuy = Math.floor(
		Math.log(1 - (count / cost) * (1 - costMultiplier)) /
			Math.log(costMultiplier)
	);

	const upgradeClick = () => {
		if (!canPurchase) return;

		dispatch(increaseClickPower());
		dispatch(changeCountBy(-cost));
	};

	const maxUpgradeClick = () => {
		for (let i = 0; i < maxBuy; i++) {
			dispatch(increaseClickPower());
		}
		dispatch(
			changeCountBy(
				-(cost * (1 - costMultiplier ** maxBuy)) / (1 - costMultiplier)
			)
		);
	};

	return (
		<div>
			<p>Upgrade Click</p>
			<img src={clickIcon} alt={`purchase ${name}`} />
			<button onClick={upgradeClick}>
				upgrade click for ${Math.round(cost)}
			</button>
			<button onClick={maxUpgradeClick}>buy x{maxBuy}</button>
		</div>
	);
}
