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
		class="[ absolute h-px w-[44%] top-full left-1/2 ] [ transition-all duration-500 divider-gradient-right ]"
		:class="{ 'w-[50%] opacity-35': solidNav }"
	/>
	<div
		class="[ absolute h-px w-[44%] top-full right-1/2 ] [ transition-all duration-500 divider-gradient-left ]"
		:class="{ 'w-[50%] opacity-35': solidNav }"
	/>
</template>
