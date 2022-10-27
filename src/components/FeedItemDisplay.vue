<template>
	<v-card class="ma-6">
		<v-card-title>
			{{ title }}
		</v-card-title>
		<v-card-text>
			<div class="text--primary pb-3">
				{{ author }}
			</div>
			<span style="white-space: pre-wrap;">
				{{ quickText }}
			</span>
		</v-card-text>
		<v-card-actions>
			<v-row class="pa-2">
				<v-col>
					<v-dialog v-model="dialog" scrollable width="60%">
						<template v-slot:activator="{ props }">
							<v-btn variant="tonal" v-bind="props">
								Read More
							</v-btn>
						</template>
						<v-card>
							<v-card-title>{{ title }}</v-card-title>
							<v-divider></v-divider>
							<v-card-text style="height: 50vh;">
								<div class="text--primary pb-3">
									Author: {{ author }}
								</div>
								<span style="white-space: pre-wrap;">
									{{ text }}
								</span>
							</v-card-text>
							<v-divider></v-divider>
							<v-card-actions>
								<v-btn variant="tonal" @click="dialog = false">
									Close
								</v-btn>
							</v-card-actions>
						</v-card>
					</v-dialog>
				</v-col>
			</v-row>
		</v-card-actions>
	</v-card>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
	props: {
		title: String,
		text: String,
		author: String
	},
	data() {
		return {
			dialog: false,
			maxPreviewWordLength: 75
		}
	},
	computed: {
		quickText(): string {
			let words = this.text?.split(' ') ?? []
			if (words?.length > this.maxPreviewWordLength)
			{
				words.slice(0, this.maxPreviewWordLength)
				words.push('(...)')
			}
			return words.join(' ')
		}
	}
})
</script>
