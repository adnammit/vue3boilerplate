<template>
	<v-card variant="tonal" class="pa-6">
		<div class="d-flex flex-no-wrap justify-space-between">
			<div>
				<v-card-title>
					Settings
				</v-card-title>
				<v-card-text>
					<div class="text--primary">
						Secret settings that only users can see
					</div>
				</v-card-text>
				<v-card-actions>
					<!-- <v-btn>Click me</v-btn> -->
				</v-card-actions>
			</div>
		</div>
	</v-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useMainStore } from '@/store'

export default defineComponent({
	name: 'Settings',
	computed: {
		username(): string {
			return this.mainStore.username;
		},
		fullName(): string {
			return this.mainStore.fullName;
		},
	},
	setup() {
		const mainStore = useMainStore()
		return { mainStore }
	}
})
</script>