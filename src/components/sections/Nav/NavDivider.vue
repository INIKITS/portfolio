<script setup>
const props = defineProps({
	solidNav: {
		type: Boolean,
		required: true,
	},
});
</script>

<template>
	<div
		data-element="nav-divider"
		class="
			[ absolute h-px w-[44%] top-full left-1/2 ]
			[ bg-white transition-all duration-500 ]
		"
		:class="{ 'w-[50%] bg-bg-theme-dark': solidNav }"
	/>
	<div
		class="
			[ absolute h-px w-[44%] top-full right-1/2 ]
			[ bg-white transition-all duration-500 ]
		"
		:class="{ 'w-[50%] bg-bg-theme-dark': solidNav }"
	/>
</template>
