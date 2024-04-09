<script setup>
const props = defineProps({
	name: String,
	alt: String,
});
</script>
<template>
	<div class="flex items-center ">
		<div>hejfikosamkfsmakfmsal</div>
		<slot />
		<!-- <i name="image" /> -->
	</div>
</template>
