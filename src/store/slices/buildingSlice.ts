import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Building, buildings } from "../../data/buildings";

export interface BuildingState {
	building: Building;
	count: number;
}

type SingleBuildingPurchase = {
	id: number;
};

type MultiBuildingPurchase = {
	id: number;
	amount: number;
};

const initialState: BuildingState[] = buildings.map((building) => ({
	building,
	count: 0,
}));

export const buildingSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		purchase: (state, action: PayloadAction<SingleBuildingPurchase>) => {
			state[action.payload.id].count += 1;
		},
		sell: (state, action: PayloadAction<SingleBuildingPurchase>) => {
			state[action.payload.id].count -= 1;
		},
		buyAmount: (state, action: PayloadAction<MultiBuildingPurchase>) => {
			state[action.payload.id].count += action.payload.amount;
		},
	},
});

export const { purchase, sell, buyAmount } = buildingSlice.actions;

export const buildingReducer = buildingSlice.reducer;
