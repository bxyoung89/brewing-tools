const specificGravityRatio = temperature => 1.00130346 - 0.000134722124 * temperature + 0.00000204052596 * (temperature ** 2) - 2.32820948E-09 * (temperature ** 3);

class HydrometerCorrectionService {
	getCorrectedValue(gravityReading, currentTemperature, calibrationTemperature) {
		const numberGravityReading = Number.parseFloat(gravityReading);
		const numberCurrentTemperature = Number.parseFloat(currentTemperature);
		const numberCalibrationTemperature = Number.parseFloat(calibrationTemperature);

		if (Number.isNaN(numberGravityReading) || Number.isNaN(numberCurrentTemperature) || Number.isNaN(numberCalibrationTemperature) || numberCalibrationTemperature === 0) {
			return "--";
		}
		const correctedValue = numberGravityReading * (specificGravityRatio(numberCurrentTemperature) / specificGravityRatio(numberCalibrationTemperature));
		return correctedValue.toFixed(3);
	}
}

export default new HydrometerCorrectionService();
