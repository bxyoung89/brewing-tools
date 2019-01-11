import UnitConversionService from "../unit-conversion-service";
import getCorrectedGravity from "./get-corrected-gravity";
import filterOutDryHops from "./filter-out-dry-hops";

const simpleWholeHopUtilizationFunction = (boilTime) => {
	if (boilTime < 10) {
		return 0.05;
	}
	if (boilTime < 20) {
		return 0.12;
	}
	if (boilTime < 30) {
		return 0.15;
	}
	if (boilTime < 45) {
		return 0.19;
	}
	if (boilTime < 60) {
		return 0.22;
	}
	if (boilTime < 75) {
		return 0.24;
	}
	return 0.27;
};

const simplePelletHopUtilizationFunction = (boilTime) => {
	if (boilTime < 10) {
		return 0.06;
	}
	if (boilTime < 20) {
		return 0.15;
	}
	if (boilTime < 30) {
		return 0.19;
	}
	if (boilTime < 45) {
		return 0.24;
	}
	if (boilTime < 60) {
		return 0.27;
	}
	if (boilTime < 75) {
		return 0.30;
	}
	return 0.34;
};

export default {
	name: "Rager",
	id: "Rager",
	calculateIBUs: (hops, gallonsOfWort, boilGravity) => {
		const boilHops = filterOutDryHops(hops);
		const correctedGravity = getCorrectedGravity(boilGravity);
		const gravityDenominator = UnitConversionService.convertGallonsToLitres(gallonsOfWort) * correctedGravity;
		const hopIBUs = boilHops.map(({
			alphaAcid, boilTime, isWholeHop, ounces,
		}) => {
			const grams = UnitConversionService.convertOuncesToGrams(ounces);
			const utilization = isWholeHop ? simpleWholeHopUtilizationFunction(boilTime) : simplePelletHopUtilizationFunction(boilTime);
			return (grams * utilization * (alphaAcid / 100) * 1000) / gravityDenominator;
		});
		return hopIBUs.reduce((sum, ibu) => sum + ibu, 0);
	},
};
