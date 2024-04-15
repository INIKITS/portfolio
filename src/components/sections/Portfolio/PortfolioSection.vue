<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import PortfolioCard from './PortfolioCard.vue';
const props = defineProps({
	name: String,
	alt: String,
});

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
];
</script>
<template>
	<div data-element="portfolio-section" class="portfolio">
		<div class="text-text-theme-primary text-center text-3xl text-cabin">
			Projects and Recent Work
		</div>
		<div class="[ flex pb-44 pt-24 flex-wrap ]">
			<PortfolioCard
				v-for="project in projects"
				:key="project.name"
				:project="project"
			/>
		</div>
	</div>
</template>
