import clickIcon from "../assets/cursor.png";
import { clickUpgrade } from "../data/clickUpgrade";
import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";
import { calcBulkBuyPrice, calcMaxBuyAmount } from "../shared/buyables";
import { readableNum } from "../shared/utils";
import {
	changeCountBy,
	purchaseClickUpgrade,
} from "../store/slices/counterSlice";

export default function BuyClickButton() {
	const { costMultiplier, name } = clickUpgrade;
	const dispatch = useAppDispatch();
	const { count, cost } = useAppSelector((state) => ({
		count: state.counter.value,
		cost: state.counter.clickUpgradeCost,
	}));

	const canPurchase = count >= cost;

	const maxBuy = canPurchase
		? calcMaxBuyAmount({ cost: cost, multiplier: costMultiplier, money: count })
		: 0;

	const upgradeClick = () => {
		if (!canPurchase) return;

		dispatch(purchaseClickUpgrade());
		dispatch(changeCountBy(-cost));
	};

	const maxUpgradeClick = () => {
		if (!canPurchase) return;

		for (let i = 0; i < maxBuy; i++) {
			dispatch(purchaseClickUpgrade());
		}
		dispatch(
			changeCountBy(
				-calcBulkBuyPrice({
					amount: maxBuy,
					cost: cost,
					multiplier: costMultiplier,
				})
			)
		);
	};

	return (
		<div className="shopItem">
			<button className="buyOne" onClick={upgradeClick}>
				<img src={clickIcon} alt={`purchase ${name}`} />
				<div className="buyText">
					<p>{name}</p>
					<p>Upgrade click for ${readableNum(cost)}</p>
				</div>
			</button>
			<button className="buyMany" onClick={maxUpgradeClick}>
				buy x{maxBuy}
			</button>
		</div>
	);
}
