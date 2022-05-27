import React from "react";
import "./App.css";
import BuildingButton from "./components/BuildingButton";
import Counter from "./components/Counter";
import { buildings } from "./data/buildings";
import { useBuildings } from "./hooks/gameHooks/useBuildings";

function App() {
	const building = useBuildings();

	return (
		<div className="App">
			<header className="App-header">
				<Counter />
				{buildings.map((building) => (
					<BuildingButton key={building.id} building={building} />
				))}
			</header>
		</div>
	);
}

export default App;
