<script setup>
import { computed } from 'vue';
const props = defineProps({
	name: {
		type: String,
		required: true,
	},
	color: {
		type: String,
		default: 'black',
	},
});
let styles = computed(() => {
	switch (props.name) {
		case 'Vue':
			return 'border-[#41B883] shadow-[#41B883]';
		case 'TailwindCSS':
			return 'border-[#37BCF8] shadow-[#37BCF8]';
		case 'SCSS':
			return 'border-[#CE649A] shadow-[#CE649A]';
		case 'Angular':
			return 'border-[#DD1A16] shadow-[#DD1A16]';
		case 'TypeScript':
			return 'border-[#3077C6] shadow-[#3077C6]';
		default:
			return 'border text-white';
	}
});
</script>

<template>
	<div
		class="p-1 px-2 rounded-lg border text-[10px] tracking-wide text-white bg-black shadow-sm"
		:class="styles"
	>
		{{ name }}
	</div>
</template>
