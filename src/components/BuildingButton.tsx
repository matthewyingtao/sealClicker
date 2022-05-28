import { Building } from "../data/buildings";
import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";
import { purchase } from "../store/slices/buildingSlice";
import { changeCountBy } from "../store/slices/counterSlice";

export default function BuildingButton({
	building,
	quantity,
}: {
	building: Building;
	quantity: number;
}) {
	const dispatch = useAppDispatch();
	const count = useAppSelector((state) => state.counter.value);
	const { name, icon, id, baseCost } = building;

	const purchaseBuilding = () => {
		if (count <= baseCost) return;

		dispatch(purchase(id));
		dispatch(changeCountBy(-baseCost));
	};

	return (
		<div key={name}>
			<p>{name}</p>
			<img src={icon} alt={`purchase ${name}`} />
			<button onClick={purchaseBuilding}>
				buy {name} ({quantity})
			</button>
		</div>
	);
}
