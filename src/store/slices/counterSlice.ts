import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { clickUpgrade } from "../../data/clickUpgrade";

const { baseCost, costMultiplier } = clickUpgrade;

const powerIncreaseMulti = 1.1;

interface CounterState {
	value: number;
	clickPower: number;
	clickUpgradeCost: number;
}

const initialState: CounterState = {
	value: 0,
	clickPower: 1,
	clickUpgradeCost: baseCost,
};

export const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		changeCountBy: (state, action: PayloadAction<number>) => {
			state.value += action.payload;
		},
		click: (state) => {
			state.value += state.clickPower;
		},
		purchaseClickUpgrade: (state) => {
			state.clickPower = (state.clickPower + 1) * powerIncreaseMulti;
			state.clickUpgradeCost *= costMultiplier;
		},
	},
});

export const { changeCountBy, purchaseClickUpgrade } = counterSlice.actions;

export const counterReducer = counterSlice.reducer;
