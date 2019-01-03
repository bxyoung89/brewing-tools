import filterOutDryHops from "./filter-out-dry-hops";

export default {
	name: "Tinsenth",
	id: "Tinsenth",
	calculateIBUs: (hops, gallonsOfWort, boilGravity) => {
		const boilHops = filterOutDryHops(hops);
		const hopIBUs = boilHops.map(({
			alphaAcid, boilTime, ounces,
		}) => {
			const timeContribution = (1 - (Math.E ** (-0.04 * boilTime))) / 4.15;
			return (75 * alphaAcid * ounces * 1.65 * (0.000125 ** (boilGravity - 1)) * timeContribution) / gallonsOfWort;
		});
		return hopIBUs.reduce((sum, ibu) => sum + ibu, 0);
	},
};
