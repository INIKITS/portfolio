<script setup>
import { defineAsyncComponent } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    required: false
  }
})

const Icon = defineAsyncComponent(() => import(`../assets/svg/${props.name}.svg`))
</script>

<template>
  <Icon :alt="alt"/>
</template>