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
		class="absolute h-px w-[44%] bg-white top-full left-1/2 transition-all duration-500"
		:class="{ 'w-[66%] bg-bg-theme-dark': solidNav }"
	/>
	<div
		class="absolute h-px w-[44%] bg-white top-full right-1/2 transition-all duration-500"
		:class="{ 'w-[66%] bg-bg-theme-dark': solidNav }"
	/>
</template>
