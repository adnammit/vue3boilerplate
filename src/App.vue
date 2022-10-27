<template>
	<v-app id="inspire">
		<NavBar />
		<v-main class="main-body">
			<v-container fluid>
				<v-row justify="center">
					<v-col cols="12" md="3" xl="2">
						<FeedBar />
					</v-col>

					<v-col cols="12" md="8" xl="6">
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
import FeedBar from '@/components/FeedBar.vue'
import Footer from '@/components/Footer.vue'

export default defineComponent({
	name: 'App',
	components: {
		NavBar,
		FeedBar,
		Footer
	},
	created() {
		this.mainStore.loadFeed()
		this.mainStore.setMobile(this.mobile)
	},
	setup() {
		const { mobile } = useDisplay()
		const mainStore = useMainStore()
		return { mobile, mainStore }
	}
})
</script>

