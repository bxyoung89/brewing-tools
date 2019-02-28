import PrimingSugars from '../data/priming-sugars';

class PrimingSugarCalculatorService {
	getDisolvedCO2(temperature){
		return  (-0.9753) * Math.log(temperature) + 4.9648;
	}

	getSugarsWithWeights(beerVolume, desiredCO2, temperature) {
		const adjustedCO2Volume = desiredCO2 - this.getDisolvedCO2(temperature);
		const volumesInLiters = beerVolume * 3.78541;

		return PrimingSugars.map((sugar) => {
			const {factor, weightFactor} = sugar;
			const sugarRequiredInGrams = (adjustedCO2Volume * factor * volumesInLiters) * weightFactor;
			return {
				...sugar,
				ounces: (sugarRequiredInGrams/ 28.34952).toFixed(2),
			}
		});
	}
}

export default new PrimingSugarCalculatorService()