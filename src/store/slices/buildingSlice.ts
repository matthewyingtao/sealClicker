import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Building, buildings } from "../../data/buildings";

export interface BuildingState {
	building: Building;
	quantity: number;
}

type MultiBuildingPurchase = {
	id: number;
	amount: number;
};

const initialState: BuildingState[] = buildings.map((building) => ({
	building,
	quantity: 0,
}));

export const buildingSlice = createSlice({
	name: "buildings",
	initialState,
	reducers: {
		purchase: (state, action: PayloadAction<number>) => {
			state[action.payload].quantity += 1;
		},
		sell: (state, action: PayloadAction<number>) => {
			state[action.payload].quantity -= 1;
		},
		buyAmount: (state, action: PayloadAction<MultiBuildingPurchase>) => {
			state[action.payload.id].quantity += action.payload.amount;
		},
	},
});

export const { purchase, sell, buyAmount } = buildingSlice.actions;

export const buildingReducer = buildingSlice.reducer;
