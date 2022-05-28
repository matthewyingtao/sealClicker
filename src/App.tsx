import "./App.css";
import sealImage from "./assets/seal.png";
import BuildingButton from "./components/BuildingButton";
import Counter from "./components/Counter";
import { useGame } from "./hooks/gameHooks";
import { useAppDispatch, useAppSelector } from "./hooks/storeHooks";
import { changeCountBy } from "./store/slices/counterSlice";

function App() {
	const dispatch = useAppDispatch();
	const { countPerSecond } = useGame();

	const buildings = useAppSelector((state) => state.buildings);

	return (
		<div className="App">
			<header className="App-header">
				<img
					onClick={() => dispatch(changeCountBy(5))}
					src={sealImage}
					alt=""
				/>
				<Counter />
				<p>you are making {countPerSecond} per second</p>
				{buildings.map(({ building, quantity }) => (
					<BuildingButton
						key={building.id}
						building={building}
						quantity={quantity}
					/>
				))}
			</header>
		</div>
	);
}

export default App;
