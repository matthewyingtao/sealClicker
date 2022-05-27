import React from "react";
import "./App.css";
import BuildingButton from "./components/BuildingButton";
import Counter from "./components/Counter";
import { useGame } from "./hooks/gameHooks";
import { useAppSelector } from "./hooks/storeHooks";

function App() {
	const { countPerSecond } = useGame();

	const buildings = useAppSelector((state) => state.buildings);

	return (
		<div className="App">
			<header className="App-header">
				<Counter />
				<p>you are making {countPerSecond} per second</p>
				{buildings.map(({ building, count }) => (
					<BuildingButton key={building.id} building={building} count={count} />
				))}
			</header>
		</div>
	);
}

export default App;
