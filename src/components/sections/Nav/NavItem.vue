<script setup>
import Icon from '@/components/Icon.vue'

const props = defineProps({
	icon: {
		type: String,
		required: true,
	},
	url: {
		type: String,
		required: true,
	},
})
</script>

<template>
	<li data-element="nav-item">
		<a
			:href="url"
			class="[ fill-primary hocus:fill-text-theme-secondary hocus:animate-pulse transition-all duration-300 ]"
		>
			<Icon :name="icon" width="30" />
		</a>
	</li>
</template>
