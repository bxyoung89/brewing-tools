import UnitConversionService from "../unit-conversion-service";
import getCorrectedGravity from "./get-corrected-gravity";
import filterOutDryHops from "./filter-out-dry-hops";

export default {
	name: "Tinsenth",
	id: "Tinsenth",
	calculateIBUs: (hops, gallonsOfWort, boilGravity) => {
		const fG = 1.65 * (0.000125 ** (boilGravity - 1));
		const boilHops = filterOutDryHops(hops);
		const correctedGravity = getCorrectedGravity(boilGravity);
		const gravityDenominator = UnitConversionService.convertGallonsToLitres(gallonsOfWort) * correctedGravity;
		const hopIBUs = boilHops.map(({
			alphaAcid, boilTime, ounces,
		}) => {
			const grams = UnitConversionService.convertOuncesToGrams(ounces);
			const fT = 1 - (Math.E ** (-0.04 * boilTime)) / 4.15;
			const utilization = fG * fT;
			return (grams * utilization * (alphaAcid / 100) * 1000) / gravityDenominator;
		});
		return hopIBUs.reduce((sum, ibu) => sum + ibu, 0);
	},
};
