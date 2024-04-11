<script setup>
import PortfolioCardTag from './PortfolioCardTag.vue';
import PortfolioCardAnimation from './PortfolioCardAnimation.vue';

const props = defineProps({
	project: {
		type: Object,
		required: true,
	},
});
</script>
<template>
	<div
		class="[ card relative flex-[0_0_306px] min-h-96 text-black flex flex-col bg-[#0f1010] mx-auto border-2 border-black hover:border-2 hover:border-bg-theme-dark shadow-bg-theme-dark group transition duration-200 overflow-hidden ]"
	>
		<a target="_blank" :href="project.url" aria-label="View project">
			<img
				:src="`/src/assets/imgs/${project.name}.png`"
				:alt="project.name"
				class="w-auto h-full min-h-[163px] object-center object-fit group-hover:brightness-100 brightness-75 transition duration-200"
			/>
		</a>
		<div class="relative p-4 flex flex-col justify-between">
			<PortfolioCardAnimation :project-name="project.name" />
			<a
				:href="project.url"
				target="_blank"
				class="z-10 text-xl pb-4 first-letter:uppercase font-bold text-white tracking-widest font-cabin"
			>
				{{ project.name }}
			</a>
			<div class="pb-4 flex flex-wrap gap-4">
				<PortfolioCardTag v-for="tag in project.tags" :key="tag" :name="tag" />
			</div>
			<div
				class="text-white text-sm overflow-visible group-hover:bg-[#0f1010]/60 transition duration-200 z-0"
			>
				A marketing page for an app designed to help teachers and parents teach
				children about the importance of diversity and inclusion.
			</div>
		</div>
	</div>
</template>
