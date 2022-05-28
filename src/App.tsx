import "./App.css";
import sealImage from "./assets/seal.png";
import BuildingButton from "./components/BuildingButton";
import Counter from "./components/Counter";
import { useGame } from "./hooks/gameHooks";
import { useBuildings } from "./hooks/gameHooks/useBuildings";
import { useAppDispatch, useAppSelector } from "./hooks/storeHooks";
import { changeCountBy } from "./store/slices/counterSlice";

function App() {
	useGame();
	const { countPerSecond } = useBuildings();
	const dispatch = useAppDispatch();

	const buildings = useAppSelector((state) => state.buildings);

	return (
		<div className="App">
			<header className="App-header">
				<img
					onClick={() => dispatch(changeCountBy(1))}
					src={sealImage}
					alt="seal"
				/>
				<Counter />
				<p>you are making {countPerSecond} per second</p>
				{buildings.map(({ building, state }) => (
					<BuildingButton key={building.id} building={building} state={state} />
				))}
			</header>
		</div>
	);
}

export default App;
