<script setup>
import Icon from '@/components/Icon.vue';

const props = defineProps({
	projectName: {
		type: String,
		required: true,
	},
})
</script>

<template>
	<Icon
		v-if="projectName === 'preducation'"
		name="monster"
		aria-hidden="true"
		class="absolute top-4 group-hover:translate-x-[-54%] -right-[22%] transition duration-300 w-24 h-24 z-10"
	/>
	<Icon
		v-if="projectName === 'preducation'"
		name="butterfly"
		aria-hidden="true"
		class="absolute -bottom-[75%] group-hover:translate-x-[150%] -left-[22%] transition duration-300 w-14 h-14 z-10"
	/>
</template>
