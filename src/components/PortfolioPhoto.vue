<script setup>
const props = defineProps({
	name: String,
	alt: String,
})
</script>
<template>
	<img :src=`/src/assets/imgs/{name}` :alt="{alt}" />
</template>