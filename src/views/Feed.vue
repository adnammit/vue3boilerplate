<template>
	<div>
		<div class="app-title">
			<h1>{{ feedTitle }}</h1>
		</div>
		<div class="text--primary">
			{{ feedSubtitle }}
		</div>
		<!-- if no content, display 'no content' -->
		<FeedItemDisplay v-for="(item, index) in filteredFeed" :title="item.title" :text="item.text"
			:author="item.author" :imgUrl="item.imgUrl" :key="item.id" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useMainStore } from '@/store'
import type { FeedItem } from '@/models/feedItem';
import FeedItemDisplay from '@/components/FeedItemDisplay.vue'

export default defineComponent({
	name: 'Feed',
	components: { FeedItemDisplay },
	computed: {
		feed(): FeedItem[] {
			return this.mainStore.feed
		},
		feedTitle(): string {
			return `${this.mainStore.filterSubject == '' ? 'The' : this.mainStore.filterSubject} Feed`;
		},
		feedSubtitle(): string {
			return `All the latest in ${this.mainStore.filterSubject == '' ? 'Cowpoke' : this.mainStore.filterSubject} news!`
		},
		filteredFeed(): FeedItem[] {
			let feed = this.mainStore.feed.filter(f => f.text != '')
			feed = this.mainStore.filterSubject == '' ? feed : feed.filter(f => f.subject == this.mainStore.filterSubject)
			return feed
		}
	},
	setup() {
		const mainStore = useMainStore()
		return { mainStore }
	}
})
</script>
