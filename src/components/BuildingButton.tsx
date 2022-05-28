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

	const maxBuy = Math.floor(
		Math.log(1 - (count / state.cost) * (1 - costMultiplier)) /
			Math.log(costMultiplier)
	);

	const purchaseBuilding = () => {
		if (!canPurchase) return;

		dispatch(purchase(id));
		dispatch(changeCountBy(-baseCost));
	};

	const purchaseMaxBuilding = () => {
		dispatch(purchaseAmount({ id, amount: maxBuy }));
		dispatch(
			changeCountBy(
				-(state.cost * (1 - costMultiplier ** maxBuy)) / (1 - costMultiplier)
			)
		);
	};

	return (
		<div key={name}>
			<p>{name}</p>
			<img src={icon} alt={`purchase ${name}`} />
			<button onClick={purchaseBuilding}>
				buy {name} for ${Math.round(state.cost)} ({state.quantity})
			</button>
			<button onClick={purchaseMaxBuilding}>buy x{maxBuy}</button>
		</div>
	);
}
