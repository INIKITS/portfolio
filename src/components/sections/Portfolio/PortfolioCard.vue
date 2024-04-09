<script setup>
import PortfolioCardTag from './PortfolioCardTag.vue';
const props = defineProps({
	name: {
		type: String,
		required: true,
	},
	tags: {
		type: Array,
		required: true,
	},
});
</script>
<template>
	<div
		class="[ relative flex-[0_0_306px] min-h-96 text-black flex flex-col rounded-xl overflow-hidden mx-auto border border-black hover:border hover:border-bg-theme-dark shadow-bg-theme-dark ]"
	>
		<a href="#" aria-label="View project">
			<img
				:src="`/src/assets/imgs/${name}.png`"
				:alt="name"
				class="w-auto h-full object-center object-fit brightness-75 -z-10"
			/>
		</a>
		<div class="p-4 flex flex-col justify-between">
			<div
				class="text-xl pb-4 first-letter:uppercase font-bold text-white tracking-widest font-cabin"
			>
				{{ name }}
			</div>
			<div class="pb-2 flex flex-wrap gap-4">
				<PortfolioCardTag v-for="tag in tags" :key="tag" :name="tag" />
			</div>
		</div>
	</div>
</template>
