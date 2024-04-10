<script setup>
import PortfolioCard from './Portfolio/PortfolioCard.vue';
const props = defineProps({
	name: String,
	alt: String,
});
const projects = [
	{
		name: 'preducation',
		tags: ['Vue', 'TailwindCSS', 'Rive'],
		url: 'https://preducationproject.com/',
	},
	{
		name: 'clevyr',
		tags: ['Vue', 'TailwindCSS', 'SCSS'],
		url: 'https://clevyr.com/company/',
	},
	{
		name: 'chickasaw.tv',
		tags: ['Angular', 'SCSS'],
		url: 'https://www.chickasaw.tv/',
	},
	{
		name: 'groove',
		tags: ['Vue', 'TailwindCSS', 'Rive'],
		url: 'https://groovemoney.org/',
	},
];
</script>
<template>
	<div class="[ flex pb-44 ]">
		<PortfolioCard
			v-for="project in projects"
			:key="project.name"
			:project="project"
		/>
	</div>
</template>
