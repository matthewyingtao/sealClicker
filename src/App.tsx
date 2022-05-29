import sealImage from "./assets/seal.png";
import BuildingButton from "./components/BuildingButton";
import BuyClickButton from "./components/BuyClickButton";
import { useGame } from "./hooks/gameHooks";
import { useBuildings } from "./hooks/gameHooks/useBuildings";
import { useAppDispatch, useAppSelector } from "./hooks/storeHooks";
import { readableNum } from "./shared/utils";
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
		<main className="pageWrapper">
			<section className="sealArea">
				<div className="countHeader">
					<p className="countPerSecondDisplay">
						you are making {readableNum(countPerSecond)} seals per second
					</p>
					<h1 className="countDisplay">{readableNum(count)}</h1>
				</div>
				<img
					onClick={() => dispatch(changeCountBy(clickPower))}
					src={sealImage}
					alt="seal"
					className="seal"
				/>
			</section>
			<section className="shopList">
				<BuyClickButton />
				{buildings.map(({ building, state }) => (
					<BuildingButton key={building.id} building={building} state={state} />
				))}
			</section>
		</main>
	);
}

export default App;
