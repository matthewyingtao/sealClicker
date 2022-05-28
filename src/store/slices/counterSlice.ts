import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
	value: number;
}

const initialState: CounterState = {
	value: 0,
};

export const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		changeCountBy: (state, action: PayloadAction<number>) => {
			state.value += action.payload;
		},
	},
});

export const { changeCountBy } = counterSlice.actions;

export const counterReducer = counterSlice.reducer;
