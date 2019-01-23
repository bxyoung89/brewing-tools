const abvFormulae = [
	{
		name: 'Alternate (optimized for high gravity)',
		getAbv: (originalGravity, finalGravity) => {
			return ((76.08 * (originalGravity - finalGravity)) / (1.775 - originalGravity)) * (finalGravity / 0.794);
		},
	},
	{
		name: 'Basic',
		getAbv: (originalGravity, finalGravity) => {
			return (originalGravity - finalGravity) * 131.25;
		},
	},
];

class ABVService {
	getABVFormulae() {
		return abvFormulae;
	}
}

export default new ABVService();