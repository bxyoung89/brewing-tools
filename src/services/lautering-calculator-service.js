const defaultValue = "--";

class LauteringCalculatorService {
	getEfficiency(wortVolume, gravityMeasurement, grains) {
		if (!wortVolume || !gravityMeasurement) {
			return defaultValue;
		}
		const filteredGrains = grains.filter(grain => grain.grain && grain.pounds > 0);
		if (filteredGrains.length === 0) {
			return defaultValue;
		}
		const maxPointsByGrain = filteredGrains.map(({ grain, pounds }) => {
			const { ppg } = grain;
			return (ppg * pounds) / wortVolume;
		});

		const totalMaxPoints = maxPointsByGrain.reduce((sum, point) => sum + point, 0);

		const gravityMeasurementInPoints = (gravityMeasurement - 1) * 1000;


		return `${((gravityMeasurementInPoints / totalMaxPoints) * 100).toFixed(2)}%`;
	}
}

export default new LauteringCalculatorService();
