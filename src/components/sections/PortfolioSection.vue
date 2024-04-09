<script setup>
import PortfolioCard from './Portfolio/PortfolioCard.vue';
const props = defineProps({
	name: String,
	alt: String,
});
</script>
<template>
	<div class="[ flex pb-44 ]">
		<PortfolioCard 
			name="preducation"
			:tags="['Vue', 'TailwindCSS', 'SCSS', 'Angular', 'TypeScript']"
		/>
	</div>
</template>
