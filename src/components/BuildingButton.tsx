import { costMultiplier } from "../config/config";
import { Building } from "../data/buildings";
import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";
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
	const { name, icon, id, baseCost } = building;

	const canPurchase = count >= baseCost;

	const maxBuy = canPurchase
		? Math.floor(
				Math.log(1 - (count / state.cost) * (1 - costMultiplier)) /
					Math.log(costMultiplier)
		  )
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
				-(state.cost * (1 - costMultiplier ** maxBuy)) / (1 - costMultiplier)
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
						buy {name} for ${Math.round(state.cost)} ({state.quantity})
					</p>
				</div>
			</button>
			<button className="buyMany" onClick={purchaseMaxBuilding}>
				buy x{maxBuy}
			</button>
		</div>
	);
}
