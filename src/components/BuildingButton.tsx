import React from "react";
import { Building } from "../data/buildings";
import { useAppDispatch } from "../hooks/storeHooks";
import { purchase } from "../store/slices/buildingSlice";

export default function BuildingButton({ building }: { building: Building }) {
	const dispatch = useAppDispatch();
	const { name, icon, id } = building;

	return (
		<div key={name}>
			<p>{name}</p>
			{/* <img src={icon} alt="" /> */}
			<button onClick={() => dispatch(purchase(id))}>buy {name}</button>
		</div>
	);
}
