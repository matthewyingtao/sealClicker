import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { costMultiplier } from "../../config/config";
import { Building, buildings } from "../../data/buildings";

export type BuildingState = {
	quantity: number;
	cost: number;
};

export interface BuildingWithState {
	building: Building;
	state: BuildingState;
}

type MultiBuildingPurchase = {
	id: number;
	amount: number;
};

const initialState: BuildingWithState[] = buildings.map((building) => ({
	building,
	state: { quantity: 0, cost: building.baseCost },
}));

export const buildingSlice = createSlice({
	name: "buildings",
	initialState,
	reducers: {
		purchase: (state, action: PayloadAction<number>) => {
			state[action.payload].state.quantity += 1;
			state[action.payload].state.cost =
				state[action.payload].building.baseCost *
				Math.pow(costMultiplier, state[action.payload].state.quantity);
		},
		purchaseAmount: (state, action: PayloadAction<MultiBuildingPurchase>) => {
			state[action.payload.id].state.quantity += action.payload.amount;
			state[action.payload.id].state.cost =
				state[action.payload.id].building.baseCost *
				Math.pow(costMultiplier, state[action.payload.id].state.quantity);
		},
	},
});

export const { purchase, purchaseAmount } = buildingSlice.actions;

export const buildingReducer = buildingSlice.reducer;
