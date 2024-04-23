<script setup>
import Icon from '@/components/Icon.vue'
import { Vue3Lottie } from 'vue3-lottie'
import coin from '@/assets/lottie/coin.json'
const props = defineProps({
	projectName: {
		type: String,
		required: true,
	},
	isHovered: {
		type: Boolean,
		required: true,
	},
})
</script>

<template>
	<Icon
		v-if="projectName === 'preducation'"
		name="monster"
		aria-hidden="true"
		class="[ absolute top-4 -right-[22%] w-24 h-24 z-10 ] [ group-hocus-within:translate-x-[-54%] transition duration-300 ]"
	/>
	<Icon
		v-if="projectName === 'preducation'"
		name="butterfly"
		aria-hidden="true"
		class="[ absolute -bottom-2 -left-[22%] w-14 h-14 z-10 ] [ group-hocus-within:translate-x-[450%] transition duration-500 ]"
	/>
	<div v-if="projectName === 'clevyr'" class="stroke-[#FF5900] opacity-75">
		<Icon
			name="binary"
			aria-hidden="true"
			class="[ w-6 h-6 absolute bottom-0 left-0 ] [ translate-y-[100vh] group-hocus-within:-translate-y-full transition ease-in-out ] [ duration-300 blur-[1px] ]"
		/>
		<Icon
			name="element-tag"
			aria-hidden="true"
			class="[ w-5 h-5 absolute bottom-12 left-[10%] ] [ translate-y-[100vh] group-hocus-within:-translate-y-full transition ease-in-out ] [ duration-200 ]"
		/>
		<Icon
			name="docker"
			aria-hidden="true"
			class="[ w-3 h-3 absolute bottom-[44%] left-[17%] translate-y-[100vh] ] [ group-hocus-within:-translate-y-full transition ease-in-out ] [ duration-150 blur-[2px] ]"
		/>
		<Icon
			name="binary"
			aria-hidden="true"
			class="[ w-3 h-3 absolute bottom-[33%] left-[25%] translate-y-[100vh] ] [ group-hocus-within:-translate-y-full transition ease-in-out ] [ duration-75 blur-[1px] ]"
		/>
		<Icon
			name="javascript"
			aria-hidden="true"
			class="[ w-2 h-2 absolute bottom-[44%] left-[45%] translate-y-[100vh] ] [ group-hocus-within:-translate-y-full transition ease-in-out ] [ duration-100 blur-[1px] ]"
		/>
		<Icon
			name="vue"
			aria-hidden="true"
			class="[ w-4 h-4 absolute bottom-[15%] left-[30%] translate-y-[100vh] ] [ group-hocus-within:-translate-y-full transition ease-in-out ] [ duration-200 blur-[1px] ]"
		/>
		<Icon
			name="element-tag"
			aria-hidden="true"
			class="[ w-4 h-4 absolute bottom-[2%] left-[34%] translate-y-[100vh] ] [ group-hocus-within:-translate-y-full transition ease-in-out ] [ duration-300 blur-[1px] ]"
		/>
		<Icon
			name="docker"
			aria-hidden="true"
			class="[ w-3 h-3 absolute bottom-[35%] left-[40%] translate-y-[100vh] ] [ group-hocus-within:-translate-y-full transition ease-in-out ] [ duration-75 blur-[2px] ]"
		/>
		<Icon
			name="vue"
			aria-hidden="true"
			class="[ w-2 h-2 absolute bottom-[0%] left-[55%] translate-y-[100vh] ] [ group-hocus-within:-translate-y-full transition ease-in-out ] [ duration-200 blur-[3px] ]"
		/>
		<Icon
			name="binary"
			aria-hidden="true"
			class="[ w-6 h-6 absolute bottom-[24%] left-[53%] translate-y-[100vh] ] [ group-hocus-within:-translate-y-full transition ease-in-out ] [ duration-75 blur-[3px] ]"
		/>
		<Icon
			name="docker"
			aria-hidden="true"
			class="[ w-3 h-3 absolute bottom-[33%] left-[65%] translate-y-[100vh] ] [ group-hocus-within:-translate-y-full transition ease-in-out ] [ duration-150 blur-[0px] ]"
		/>
		<Icon
			name="javascript"
			aria-hidden="true"
			class="[ w-3 h-3 absolute bottom-[46%] left-[63%] translate-y-[100vh] ] [ group-hocus-within:-translate-y-full transition ease-in-out ] [ duration-100 blur-[1px] ]"
		/>
		<Icon
			name="docker"
			aria-hidden="true"
			class="[ w-3 h-3 absolute bottom-[22%] left-[70%] translate-y-[100vh] ] [ group-hocus-within:-translate-y-full transition ease-in-out ] [ duration-300 blur-[2px] ]"
		/>
		<Icon
			name="element-tag"
			aria-hidden="true"
			class="[ w-4 h-4 absolute bottom-[2%] left-[74%] translate-y-[100vh] ] [ group-hocus-within:-translate-y-full transition ease-in-out ] [ duration-200 blur-[1px] ]"
		/>
		<Icon
			name="binary"
			aria-hidden="true"
			class="[ w-3 h-3 absolute bottom-[34%] left-[76%] translate-y-[100vh] ] [ group-hocus-within:-translate-y-full transition ease-in-out ] [ duration-75 blur-[0px] ]"
		/>
		<Icon
			name="vue"
			aria-hidden="true"
			class="[ w-3 h-3 absolute bottom-[5%] left-[85%] translate-y-[100vh] ] [ group-hocus-within:-translate-y-full transition ease-in-out ] [ duration-150 blur-[2px] ]"
		/>
		<Icon
			name="docker"
			aria-hidden="true"
			class="[ w-4 h-4 absolute bottom-[22%] left-[83%] translate-y-[100vh] ] [ group-hocus-within:-translate-y-full transition ease-in-out ] [ duration-100 blur-[2px] ]"
		/>
		<Icon
			name="javascript"
			aria-hidden="true"
			class="[ w-3 h-3 absolute bottom-[16%] left-[93%] translate-y-[100vh] ] [ group-hocus-within:-translate-y-full transition ease-in-out ] [ duration-300 blur-[0px] ]"
		/>
		<Icon
			name="vue"
			aria-hidden="true"
			class="[ w-2 h-2 absolute bottom-[44%] left-[87%] translate-y-[100vh] ] [ group-hocus-within:-translate-y-full transition ease-in-out ] [ duration-150 blur-[2px] ]"
		/>
		<Icon
			name="binary"
			aria-hidden="true"
			class="[ w-6 h-6 absolute bottom-[33%] left-[86%] translate-y-[100vh] ] [ group-hocus-within:-translate-y-full transition ease-in-out ] [ duration-150 blur-[1px] ]"
		/>
	</div>
	<div v-if="projectName === 'clevyr'" class="stroke-[#FF5900] opacity-75">
		<Icon
			name="binary"
			aria-hidden="true"
			class="[ w-6 h-6 absolute top-[37%] left-0 translate-y-[100vh] ] [ group-hocus-within:-translate-y-full transition ease-in-out ] [ duration-200 blur-[1px] ]"
		/>
		<Icon
			name="element-tag test"
			aria-hidden="true"
			class="[ w-4 h-4 absolute top-6 left-[4%] translate-y-[100vh] ] [ group-hocus-within:-translate-y-full transition ease-in-out ] [ duration-100 ]"
		/>
		<Icon
			name="docker"
			aria-hidden="true"
			class="[ w-3 h-3 absolute top-[30%] left-[17%] translate-y-[100vh] ] [ group-hocus-within:-translate-y-full transition ease-in-out ] [ duration-150 blur-[2px] ]"
		/>
		<Icon
			name="binary"
			aria-hidden="true"
			class="[ w-3 h-3 absolute top-[33%] left-[25%] translate-y-[100vh] ] [ group-hocus-within:-translate-y-full transition ease-in-out ] [ duration-200 blur-[1px] ]"
		/>
		<Icon
			name="javascript"
			aria-hidden="true"
			class="[ w-2 h-2 absolute top-[25%] left-[45%] translate-y-[100vh] ] [ group-hocus-within:-translate-y-full transition ease-in-out ] [ duration-100 blur-[1px] ]"
		/>
		<Icon
			name="vue"
			aria-hidden="true"
			class="[ w-4 h-4 absolute top-[15%] left-[30%] translate-y-[100vh] ] [ group-hocus-within:-translate-y-full transition ease-in-out ] [ duration-100 blur-[1px] ]"
		/>
		<Icon
			name="element-tag"
			aria-hidden="true"
			class="[ w-4 h-4 absolute top-[22%] left-[34%] translate-y-[100vh] ] [ group-hocus-within:-translate-y-full transition ease-in-out ] [ duration-300 blur-[1px] ]"
		/>
		<Icon
			name="docker"
			aria-hidden="true"
			class="[ w-3 h-3 top-[35%] left-[40%] absolute translate-y-[100vh] ] [ group-hocus-within:-translate-y-full transition ease-in-out ] [ duration-150 blur-[2px] ]"
		/>
		<Icon
			name="vue"
			aria-hidden="true"
			class="[ w-2 h-2 absolute top-[55%] left-[55%] translate-y-[100vh] ] [ group-hocus-within:-translate-y-full transition ease-in-out ] [ duration-75 blur-[3px] ]"
		/>
		<Icon
			name="binary"
			aria-hidden="true"
			class="[ w-6 h-6 absolute top-[24%] left-[53%] translate-y-[100vh] ] [ group-hocus-within:-translate-y-full transition ease-in-out ] [ duration-200 blur-[3px] ]"
		/>
		<Icon
			name="docker"
			aria-hidden="true"
			class="[ w-3 h-3 absolute top-[12%] left-[65%] translate-y-[100vh] ] [ group-hocus-within:-translate-y-full transition ease-in-out ] [ duration-300 blur-[0px] ]"
		/>
		<Icon
			name="javascript"
			aria-hidden="true"
			class="[ w-3 h-3 absolute top-[46%] left-[63%] translate-y-[100vh] ] [ group-hocus-within:-translate-y-full transition ease-in-out ] [ duration-75 blur-[1px] ]"
		/>
		<Icon
			name="docker"
			aria-hidden="true"
			class="[ w-3 h-3 absolute top-[30%] left-[70%] translate-y-[100vh] ] [ group-hocus-within:-translate-y-full transition ease-in-out ] [ duration-300 blur-[2px] ]"
		/>
		<Icon
			name="element-tag"
			aria-hidden="true"
			class="[ w-4 h-4 absolute top-[12%] left-[74%] translate-y-[100vh] ] [ group-hocus-within:-translate-y-full transition ease-in-out ] [ duration-200 blur-[1px] ]"
		/>
		<Icon
			name="binary"
			aria-hidden="true"
			class="[ w-3 h-3 absolute top-[34%] left-[76%] translate-y-[100vh] ] [ group-hocus-within:-translate-y-full transition ease-in-out ] [ duration-100 blur-[1px] ]"
		/>
		<Icon
			name="vue"
			aria-hidden="true"
			class="[ w-3 h-3 absolute top-[44%] left-[85%] translate-y-[100vh] ] [ group-hocus-within:-translate-y-full transition ease-in-out] [ duration-150 blur-[2px] ]"
		/>
		<Icon
			name="docker"
			aria-hidden="true"
			class="[ w-4 h-4 absolute top-[25%] left-[83%] translate-y-[100vh] ] [ group-hocus-within:-translate-y-full transition ease-in-out ] [ duration-75 blur-[2px] ]"
		/>
		<Icon
			name="javascript"
			aria-hidden="true"
			class="[ w-3 h-3 absolute top-[10%] left-[82%] translate-y-[100vh] ] [ group-hocus-within:-translate-y-full transition ease-in-out ] [ duration-300 blur-[0px] ]"
		/>
		<Icon
			name="vue"
			aria-hidden="true"
			class="[ w-2 h-2 absolute top-[44%] left-[87%] translate-y-[100vh] ] [ group-hocus-within:-translate-y-full transition ease-in-out ] [ duration-150 blur-[2px] ]"
		/>
		<Icon
			name="binary"
			aria-hidden="true"
			class="[ w-6 h-6 absolute top-[33%] left-[86%] translate-y-[100vh] ] [ group-hocus-within:-translate-y-full transition ease-in-out ] [ duration-75 blur-[1px] ]"
		/>
	</div>
	<div
		v-if="projectName === 'groove' && isHovered"
		class="[ absolute top-0 left-0 w-full h-full ]"
	>
		<Vue3Lottie
			:animationData="coin"
			:height="30"
			:width="30"
			class="[ absolute top-[30%] left-[6%] ]"
			:class="{ 'coin-1': isHovered }"
		/>
		<Vue3Lottie
			:animationData="coin"
			:height="30"
			:width="30"
			class="[ absolute top-[30%] left-[28%] ]"
			:class="{ 'coin-2': isHovered }"
		/>
		<Vue3Lottie
			:animationData="coin"
			:height="30"
			:width="30"
			class="[ absolute top-[30%] left-[54%] ]"
			:class="{ 'coin-3': isHovered }"
		/>
	</div>
</template>
