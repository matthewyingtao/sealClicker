import { configureStore } from "@reduxjs/toolkit";
import { buildingReducer } from "./slices/buildingSlice";
import { counterReducer } from "./slices/counterSlice";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		buildings: buildingReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
