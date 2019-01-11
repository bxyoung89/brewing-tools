const LITRES_IN_A_GALLON = 3.78541;
const GRAMS_IN_A_OUNCE = 28.3495;

const 	unitToOtherUnitMap = {
	gallons: {
		litres: LITRES_IN_A_GALLON,
	},
	litres: {
		gallons: 1 / LITRES_IN_A_GALLON,
	},
	ounces: {
		grams: GRAMS_IN_A_OUNCE,
	},
	grams: {
		ounces: 1 / GRAMS_IN_A_OUNCE,
	},
};

class UnitConversionService {
	convertGallonsToLitres(gallons) {
		return unitToOtherUnitMap.gallons.litres * gallons;
	}

	convertLitresToGallons(litres) {
		return unitToOtherUnitMap.litres.gallons * litres;
	}

	convertOuncesToGrams(ounces) {
		return unitToOtherUnitMap.ounces.grams * ounces;
	}

	convertGramsToOunces(grams) {
		return unitToOtherUnitMap.grams.ounces * grams;
	}
}

export default new UnitConversionService();
