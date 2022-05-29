import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";
import {
	Building,
	calcBulkBuyPrice,
	calcMaxBuyAmount,
} from "../shared/buyables";
import { readableNum } from "../shared/utils";
import {
	BuildingState,
	purchase,
	purchaseAmount,
} from "../store/slices/buildingSlice";
import { changeCountBy } from "../store/slices/counterSlice";

export default function BuildingButton({
	building,
	state,
}: {
	building: Building;
	state: BuildingState;
}) {
	const dispatch = useAppDispatch();
	const count = useAppSelector((state) => state.counter.value);
	const { name, icon, id, baseCost, costMultiplier } = building;

	const canPurchase = count >= baseCost;

	const maxBuy = canPurchase
		? calcMaxBuyAmount({
				cost: state.cost,
				multiplier: costMultiplier,
				money: count,
		  })
		: 0;

	const purchaseBuilding = () => {
		if (!canPurchase) return;

		dispatch(purchase(id));
		dispatch(changeCountBy(-baseCost));
	};

	const purchaseMaxBuilding = () => {
		if (!canPurchase) return;

		dispatch(purchaseAmount({ id, amount: maxBuy }));
		dispatch(
			changeCountBy(
				-calcBulkBuyPrice({
					amount: maxBuy,
					cost: state.cost,
					multiplier: costMultiplier,
				})
			)
		);
	};

	return (
		<div key={name} className="shopItem">
			<button className="buyOne" onClick={purchaseBuilding}>
				<img src={icon} alt={`purchase ${name}`} />
				<div className="buyText">
					<p>{name}</p>
					<p>
						buy {name} for ${readableNum(state.cost)} ({state.quantity})
					</p>
				</div>
			</button>
			<button className="buyMany" onClick={purchaseMaxBuilding}>
				buy x{maxBuy}
			</button>
		</div>
	);
}
