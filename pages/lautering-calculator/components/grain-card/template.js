export default `
	<div class="grain-card">
		<div class="grain-content">
			<div class="input-section">
				<div class="input-section-title">
					Grain
				</div>
				<div class="dropdown-wrapper">
					<v-select :options="allGrains" label="name" v-model="grain.grain">
						<tempalte slot="option" slot-scope="option">
							<div class="dropdown-option">
								<img v-bind:src="getFlagFromCountry(option.origin)" />
								<div>
									{{option.name}}
								</div>
							</div>
						</tempalte>
					</v-select>	
				</div>
			</div>

			<div class="input-section">
				<div class="input-section-title">
					Pounds
				</div>
				<div class="regular-input">
					<input type="number" placeholder="pounds" value="0" v-model="grain.pounds">
				</div>
			</div>
		</div>
		<button class="remove-grain-button" v-on:click="removeGrainAtIndex(index)" v-if="numberOfCards > 1">
			X
		</button>
	</div>
`;