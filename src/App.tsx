import "./App.css";
import sealImage from "./assets/seal.png";
import BuildingButton from "./components/BuildingButton";
import BuyClickButton from "./components/BuyClickButton";
import { useGame } from "./hooks/gameHooks";
import { useBuildings } from "./hooks/gameHooks/useBuildings";
import { useAppDispatch, useAppSelector } from "./hooks/storeHooks";
import { changeCountBy } from "./store/slices/counterSlice";

function App() {
	useGame();
	const { countPerSecond } = useBuildings();
	const dispatch = useAppDispatch();

	const { count, buildings, clickPower } = useAppSelector((state) => ({
		count: state.counter.value,
		buildings: state.buildings,
		clickPower: state.counter.clickPower,
	}));

	return (
		<div className="App">
			<header className="App-header">
				<img
					onClick={() => dispatch(changeCountBy(clickPower))}
					src={sealImage}
					alt="seal"
				/>
				<p>{count.toFixed(0)}</p>
				<p>you are making {countPerSecond} per second</p>
				<BuyClickButton />
				{buildings.map(({ building, state }) => (
					<BuildingButton key={building.id} building={building} state={state} />
				))}
			</header>
		</div>
	);
}

export default App;
