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

	const maxBuy = canPurchase
		? Math.floor(
				Math.log(1 - (count / cost) * (1 - costMultiplier)) /
					Math.log(costMultiplier)
		  )
		: 0;

	const upgradeClick = () => {
		if (!canPurchase) return;

		dispatch(increaseClickPower());
		dispatch(changeCountBy(-cost));
	};

	const maxUpgradeClick = () => {
		if (!canPurchase) return;

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
		<div className="shopItem">
			<button className="buyOne" onClick={upgradeClick}>
				<img src={clickIcon} alt={`purchase ${name}`} />
				<div className="buyText">
					<p>Upgrade Click</p>
					<p>upgrade click for ${Math.round(cost)}</p>
				</div>
			</button>
			<button className="buyMany" onClick={maxUpgradeClick}>
				buy x{maxBuy}
			</button>
		</div>
	);
}
