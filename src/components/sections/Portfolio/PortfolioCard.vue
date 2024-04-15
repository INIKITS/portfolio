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
		class="
			card
			[ flex flex-col flex-[0_0_306px] relative mx-auto overflow-hidden ]
			[ text-black bg-[#0f1010] border-2 border-black hover:border-bg-theme-dark ]
			[ group transition duration-200 ]
		"
		@mouseover="isHovered = true"
		@mouseleave="isHovered = false"
	>
		<div
			v-if="project.name === 'chickasaw.tv'"
			src="/src/assets/imgs/noise-2.png"
			aria-hidden="true"
			class="[ absolute z-10 top-0 left-0 w-full h-full ] [ opacity-35 pointer-events-none ]"
			:class="{ noise: isHovered }"
		/>
		<a target="_blank" :href="project.url" aria-label="View project">
			<img
				:src="`/src/assets/imgs/${project.name}.png`"
				:alt="project.name"
				class="[ h-full min-h-[163px] object-center object-fit ] [ group-hover:brightness-100 brightness-75 transition duration-200 ]"
				:class="{
					'[ relative overflow-hidden ]': project.name === 'chickasaw.tv',
				}"
			/>
		</a>
		<div class="[ flex flex-col relative h-full p-4 ]">
			<PortfolioCardAnimation
				:project-name="project.name"
				:is-hovered="isHovered"
			/>
			<a
				:href="project.url"
				target="_blank"
				class="[ z-10 w-fit pb-4 ] [ text-xl first-letter:uppercase font-bold text-primary tracking-widest font-cabin ]"
			>
				{{ project.name }}
			</a>
			<div class="[ pb-4 flex flex-wrap gap-4 ]">
				<PortfolioCardTag v-for="tag in project.tags" :key="tag" :name="tag" />
			</div>
			<div
				class="[ z-0 overflow-visible ] [ text-primary text-sm ] [ transition duration-200 ]"
				:class="{ 'group-hover:bg-[#0f1010]/60': project.name === 'clevyr' }"
			>
				{{ project.description }}
			</div>
		</div>
	</div>
</template>
