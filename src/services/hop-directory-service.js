import allHops from "../data/hop-directory";

class HopDirectoryService {
	getMaxValues() {
		return allHops.reduce((maxHop, hop) => ({
			averageAlphaAcidPercentage: Math.max(maxHop.averageAlphaAcidPercentage, hop.averageAlphaAcidPercentage),
			averageBetaAcidPercentage: Math.max(maxHop.averageBetaAcidPercentage, hop.averageBetaAcidPercentage),
			averageTotalOil: Math.max(maxHop.averageTotalOil, hop.averageTotalOil),
			oilBreakdown: {
				bPinene: Math.max(maxHop.oilBreakdown.bPinene, hop.oilBreakdown.bPinene),
				myrcene: Math.max(maxHop.oilBreakdown.myrcene, hop.oilBreakdown.myrcene),
				linalool: Math.max(maxHop.oilBreakdown.linalool, hop.oilBreakdown.linalool),
				caryophyllene: Math.max(maxHop.oilBreakdown.caryophyllene, hop.oilBreakdown.caryophyllene),
				farnesene: Math.max(maxHop.oilBreakdown.farnesene, hop.oilBreakdown.farnesene),
				humulene: Math.max(maxHop.oilBreakdown.humulene, hop.oilBreakdown.humulene),
				geraniol: Math.max(maxHop.oilBreakdown.geraniol, hop.oilBreakdown.geraniol),
				selinene: Math.max(maxHop.oilBreakdown.selinene, hop.oilBreakdown.selinene),
				other: Math.max(maxHop.oilBreakdown.other, hop.oilBreakdown.other),
			},
		}),
		{
			averageAlphaAcidPercentage: Number.NEGATIVE_INFINITY,
			averageBetaAcidPercentage: Number.NEGATIVE_INFINITY,
			averageTotalOil: Number.NEGATIVE_INFINITY,
			oilBreakdown: {
				bPinene: Number.NEGATIVE_INFINITY,
				myrcene: Number.NEGATIVE_INFINITY,
				linalool: Number.NEGATIVE_INFINITY,
				caryophyllene: Number.NEGATIVE_INFINITY,
				farnesene: Number.NEGATIVE_INFINITY,
				humulene: Number.NEGATIVE_INFINITY,
				geraniol: Number.NEGATIVE_INFINITY,
				selinene: Number.NEGATIVE_INFINITY,
				other: Number.NEGATIVE_INFINITY,
			},
		});
	}
}

export default new HopDirectoryService();
