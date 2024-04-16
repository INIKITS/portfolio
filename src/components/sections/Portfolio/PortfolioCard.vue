<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { useElementInView } from '@/composables/useElementInView.js';
import PortfolioCardTag from './PortfolioCardTag.vue';
import PortfolioCardAnimation from './PortfolioCardAnimation.vue';

const isHovered = ref(false);
const portfolioCard = ref(null);

const { isVisible, observer } = useElementInView(() => {}, {
	threshold: 0.4,
	rootMargin: '30%',
});

const props = defineProps({
	project: {
		type: Object,
		required: true,
	},
});

onMounted(() => {
	observer.observe(portfolioCard.value);
});

onUnmounted(() => {
	observer.disconnect();
});
</script>
<template>
	<div
		ref="portfolioCard"
		class="card [ flex flex-col flex-[0_0_306px] relative mx-4 mb-12 overflow-hidden ] [ text-black bg-[#0f1010] border-2 border-transparent hover:border-bg-theme-dark backdrop-blur-sm ] [ group transition duration-200 ]"
		:class="{ 'fade-in': isVisible }"
		@mouseover="isHovered = true"
		@mouseleave="isHovered = false"
	>
		<div
			v-if="project.name === 'chickasaw.tv'"
			src="/assets/imgs/noise-2.png"
			aria-hidden="true"
			class="[ absolute z-10 top-0 left-0 w-full h-full ] [ opacity-35 pointer-events-none ]"
			:class="{ noise: isHovered }"
		/>
		<a target="_blank" :href="project.url" aria-label="View project">
			<img
				:src="`/assets/imgs/${project.name}.png`"
				:alt="project.name"
				class="[ h-full md:min-h-[163px] object-center object-fit ] [ group-hover:brightness-100 brightness-75 transition duration-200 ]"
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
