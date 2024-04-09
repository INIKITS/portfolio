<script setup>
import Icon from '@/components/Icon.vue';

const props = defineProps({
	icon: {
		type: String,
		required: true,
	},
	url: {
		type: String,
		required: true,
	},
});
</script>

<template>
	<li>
		<a
			:href="url"
			class="fill-white hover:fill-text-theme-secondary hover:animate-pulse transition-all duration-300"
		>
			<Icon :name="icon" width="24" />
		</a>
	</li>
</template>
