import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
	value: number;
	clickPower: number;
}

const initialState: CounterState = {
	value: 0,
	clickPower: 1,
};

export const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		changeCountBy: (state, action: PayloadAction<number>) => {
			state.value += action.payload;
		},
		increaseClickPower: (state) => {
			state.clickPower *= 1.1;
		},
	},
});

export const { changeCountBy, increaseClickPower } = counterSlice.actions;

export const counterReducer = counterSlice.reducer;
