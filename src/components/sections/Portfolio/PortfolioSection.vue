<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { useElementInView } from '@/composables/useElementInView.js'
import PortfolioCard from './PortfolioCard.vue'

const portfolioSectionText = ref(null)

const { isVisible, observer } = useElementInView(() => {}, {
	threshold: 0.2,
	rootMargin: '20%',
})

const props = defineProps({
	name: String,
	alt: String,
})

const projects = [
	{
		name: 'preducation',
		tags: ['Vue', 'TailwindCSS', 'Rive'],
		url: 'https://preducationproject.com/',
		description:
			'A marketing page for an app designed to help teachers and parents teach children about the importance of diversity and inclusion.',
	},
	{
		name: 'clevyr',
		tags: ['Vue', 'TailwindCSS', 'SCSS'],
		url: 'https://clevyr.com/company/',
		description:
			'Worked closely with the Clevyr team to update the design of their company page. This included new designs and animations.',
	},
	{
		name: 'chickasaw.tv',
		tags: ['Angular', 'SCSS'],
		url: 'https://www.chickasaw.tv/',
		description:
			'Full rework of the theme, the Chickasaws wanted a light mode with a modern look.',
	},
	{
		name: 'groove',
		tags: ['Vue', 'TailwindCSS', 'Rive'],
		url: 'https://groovemoney.org/',
		description:
			'Typography overhaul with an updated design. Custom animations and functionality were added to the site.',
	},
]

onMounted(() => {
	observer.observe(portfolioSectionText.value)
})

onUnmounted(() => {
	observer.disconnect()
})
</script>
<template>
	<div
		data-element="portfolio-section"
		class="[ relative z-10 mx-4 md:mt-14 ]"
	>
		<div
			ref="portfolioSectionText"
			class="[ text-primary text-center text-3xl text-cabin ]"
			:class="{ 'fade-in': isVisible }"
		>
			Projects and Recent Work
		</div>
		<div class="[ flex flex-wrap gap-2 justify-center py-24 ]">
			<PortfolioCard
				v-for="project in projects"
				:key="project.name"
				:project="project"
			/>
		</div>
		<div
			class="[ absolute -right-24 bottom-0 w-60 h-60 rounded-full ] [ bg-[#542676] blur-[100px] ]"
		/>
	</div>
</template>
