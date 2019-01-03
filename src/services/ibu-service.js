import SimpleIBUCalculator from "./ibu-calculators/simple-ibu-calculator";
// import TinsenthIBUCalculator from "./ibu-calculators/tinsenth-ibu-calculator";

const calculators = [
	// TinsenthIBUCalculator,
	SimpleIBUCalculator,
];

class IBUService {
	getAllIBUCalculators() {
		return calculators;
	}

	getIBUs(calculatorId, hops, gallonsOfWort, boilGravity) {
		const matchingCalculator = calculators.find(calc => calc.id === calculatorId) || calculators[0];
		return matchingCalculator.calculateIBUs(hops, gallonsOfWort, boilGravity).toFixed(0);
	}
}

export default new IBUService();
