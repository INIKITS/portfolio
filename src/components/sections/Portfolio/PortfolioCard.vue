<script setup>
import { ref } from 'vue';
import PortfolioCardTag from './PortfolioCardTag.vue';
import PortfolioCardAnimation from './PortfolioCardAnimation.vue';

const props = defineProps({
	project: {
		type: Object,
		required: true,
	},
});

const isHovered = ref(false);
</script>
<template>
	<div
		class="[ card relative flex-[0_0_306px] text-black flex flex-col bg-[#0f1010] mx-auto border-2 border-black hover:border-2 hover:border-bg-theme-dark shadow-bg-theme-dark group transition duration-200 overflow-hidden ]"
		@mouseover="isHovered = true"
		@mouseleave="isHovered = false"
	>
		<a target="_blank" :href="project.url" aria-label="View project">
			<img
				:src="`/src/assets/imgs/${project.name}.png`"
				:alt="project.name"
				class="h-full min-h-[163px] object-center object-fit group-hover:brightness-100 brightness-75 transition duration-200"
			/>
		</a>
		<div class="relative h-full p-4 flex flex-col">
			<PortfolioCardAnimation
				:project-name="project.name"
				:is-hovered="isHovered"
			/>
			<a
				:href="project.url"
				target="_blank"
				class="z-10 w-fit text-xl pb-4 first-letter:uppercase font-bold text-white tracking-widest font-cabin"
			>
				{{ project.name }}
			</a>
			<div class="pb-4 flex flex-wrap gap-4">
				<PortfolioCardTag v-for="tag in project.tags" :key="tag" :name="tag" />
			</div>
			<div
				class="text-white text-sm overflow-visible transition duration-200 z-0"
				:class="{ 'group-hover:bg-[#0f1010]/60': project.name === 'clevyr' }"
			>
				{{ project.description }}
			</div>
		</div>
	</div>
</template>
