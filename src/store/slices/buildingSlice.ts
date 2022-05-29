import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { costMultiplier } from "../../config/config";
import { buildings } from "../../data/buildings";
import { Building } from "../../shared/buyables";

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
			const { building, state: buildingState } = state[action.payload];

			buildingState.quantity += 1;
			buildingState.cost =
				building.baseCost * Math.pow(costMultiplier, buildingState.quantity);
		},
		purchaseAmount: (state, action: PayloadAction<MultiBuildingPurchase>) => {
			const { building, state: buildingState } = state[action.payload.id];

			buildingState.quantity += action.payload.amount;
			buildingState.cost =
				building.baseCost * Math.pow(costMultiplier, buildingState.quantity);
		},
	},
});

export const { purchase, purchaseAmount } = buildingSlice.actions;

export const buildingReducer = buildingSlice.reducer;
