<script setup>
import PortfolioCardTag from './PortfolioCardTag.vue';
import Icon from '@/components/Icon.vue';

const props = defineProps({
	project: {
		type: Object,
		required: true,
	},
});
</script>
<template>
	<div
		class="[ relative flex-[0_0_306px] min-h-96 text-black flex flex-col bg-[#0f1010] mx-auto border-2 border-black hover:border-2 hover:border-bg-theme-dark shadow-bg-theme-dark group transition duration-200 overflow-hidden ]"
	>
		<a :href="project.url" aria-label="View project">
			<img
				:src="`/src/assets/imgs/${project.name}.png`"
				:alt="project.name"
				class="w-auto h-full min-h-[163px] object-center object-fit group-hover:brightness-100 brightness-75 transition duration-200"
			/>
		</a>
		<div class="relative p-4 flex flex-col justify-between">
			<Icon
				v-if="project.name === 'preducation'"
				name="monster"
				class="absolute top-4 group-hover:translate-x-[-54%] -right-[22%] transition duration-300 w-24 h-24 z-10"
			/>
			<a
				:href="project.url"
				class="z-10 text-xl pb-4 first-letter:uppercase font-bold text-white tracking-widest font-cabin"
			>
				{{ project.name }}
			</a>
			<div class="pb-2 flex flex-wrap gap-4">
				<PortfolioCardTag v-for="tag in project.tags" :key="tag" :name="tag" />
			</div>
		</div>
	</div>
</template>