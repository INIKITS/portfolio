<script setup>
import { computed } from 'vue'
const props = defineProps({
	name: {
		type: String,
		required: true,
	},
})
let styles = computed(() => {
	switch (props.name) {
		case 'Vue':
			return 'border-[#41B883] shadow-[#41B883]'
		case 'TailwindCSS':
			return 'border-[#37BCF8] shadow-[#37BCF8]'
		case 'SCSS':
			return 'border-[#CE649A] shadow-[#CE649A]'
		case 'Angular':
			return 'border-[#DD1A16] shadow-[#DD1A16]'
		case 'TypeScript':
			return 'border-[#3077C6] shadow-[#3077C6]'
		case 'Rive':
			return 'border-gradient-purple border-gradient shadow-[#d53a9d]'
		default:
			return
	}
})
</script>

<template>
	<div
		class="[ z-10 p-1 px-2 ] [ bg-black shadow-sm border ] [ text-[10px] tracking-wide text-primary ]"
		:class="styles"
	>
		{{ name }}
	</div>
</template>
