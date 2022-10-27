<template>
	<v-app id="inspire">
		<NavBar />
		<v-main class="main-body">
			<v-container>
				<v-row>
					<v-col cols="2">
						<v-sheet rounded="lg">
							<v-list rounded="lg">
								<v-list-item v-for="(link, i) in links" :key="i" :value="link">
									<template v-slot:prepend>
										<v-icon :icon="link.icon"></v-icon>
									</template>
									<v-list-item-title>
										{{ link.text }}
									</v-list-item-title>
								</v-list-item>
							</v-list>
						</v-sheet>
					</v-col>

					<v-col>
						<v-sheet min-height="70vh" rounded="lg" class="pa-6">
							<router-view />
						</v-sheet>
					</v-col>
				</v-row>
			</v-container>
		</v-main>
		<Footer />
	</v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import { useDisplay } from 'vuetify'
import { useMainStore } from '@/store'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default defineComponent({
	name: 'App',
	components: {
		NavBar,
		Footer
	},
	data() {
		return {
			links: [
				{ text: 'Cows', icon: 'mdi-cow' },
				{ text: 'Tack', icon: 'mdi-horseshoe' },
				{ text: 'Rodeo', icon: 'mdi-horse-human' },
			]
		}
	},
	setup() {
		const { mobile } = useDisplay() // is our client mobile-sized?
		const mainStore = useMainStore()
		return { mobile, mainStore }
	}
})
</script>

