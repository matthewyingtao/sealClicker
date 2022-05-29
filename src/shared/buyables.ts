export interface Buyable {
	name: string;
	baseCost: number;
}

export interface ScalingBuyable extends Buyable {
	costMultiplier: number;
}

export interface Building extends ScalingBuyable {
	productionSpeed: number;
	icon: string;
	id: number;
}

type calcMaxBuyAmountProps = {
	cost: number;
	multiplier: number;
	money: number;
};

export const calcMaxBuyAmount = ({
	cost,
	multiplier,
	money,
}: calcMaxBuyAmountProps) => {
	return Math.floor(
		Math.log(1 - (money / cost) * (1 - multiplier)) / Math.log(multiplier)
	);
};

type calcBulkBuyPriceProps = {
	cost: number;
	multiplier: number;
	amount: number;
};

export const calcBulkBuyPrice = ({
	amount,
	cost,
	multiplier,
}: calcBulkBuyPriceProps) => {
	return (cost * (1 - multiplier ** amount)) / (1 - multiplier);
};
