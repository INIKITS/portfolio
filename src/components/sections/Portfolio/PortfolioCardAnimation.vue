<script setup>
import Icon from '@/components/Icon.vue';

const props = defineProps({
	projectName: {
		type: String,
		required: true,
	},
});

console.log('projectName :>> ', props.projectName);
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
		class="absolute -bottom-4 group-hover:translate-x-[450%] -left-[22%] transition duration-1000 w-14 h-14 z-10"
	/>
	<div v-if="projectName === 'clevyr'" class="stroke-[#FF5900]">
		<Icon
			name="binary"
			aria-hidden="true"
			class="w-6 h-6 absolute translate-y-[100vh] group-hover:-translate-y-full transition ease-in-out duration-300 bottom-0 left-0 blur-[1px]"
		/>
		<Icon
			name="element-tag"
			aria-hidden="true"
			class="w-5 h-5 absolute translate-y-[100vh] group-hover:-translate-y-full transition ease-in-out duration-200 bottom-12 left-[10%]"
		/>
		<Icon
			name="docker"
			aria-hidden="true"
			class="w-3 h-3 absolute translate-y-[100vh] group-hover:-translate-y-full transition ease-in-out duration-150 bottom-[0%] left-[17%] blur-[2px]"
		/>
		<Icon
			name="binary"
			aria-hidden="true"
			class="w-3 h-3 absolute translate-y-[100vh] group-hover:-translate-y-full transition ease-in-out duration-75 bottom-[33%] left-[25%] blur-[1px]"
		/>
		<Icon
			name="javascript"
			aria-hidden="true"
			class="w-2 h-2 absolute translate-y-[100vh] group-hover:-translate-y-full transition ease-in-out duration-100 bottom-[10%] left-[45%] blur-[0px]"
		/>
		<Icon
			name="vue"
			aria-hidden="true"
			class="w-4 h-4 absolute translate-y-[100vh] group-hover:-translate-y-full transition ease-in-out duration-200 bottom-[15%] left-[30%] blur-[1px]"
		/>
		<Icon
			name="element-tag"
			aria-hidden="true"
			class="w-4 h-4 absolute translate-y-[100vh] group-hover:-translate-y-full transition ease-in-out duration-300 bottom-[2%] left-[34%] blur-[1px]"
		/>
		<Icon
			name="docker"
			aria-hidden="true"
			class="w-3 h-3 absolute translate-y-[100vh] group-hover:-translate-y-full transition ease-in-out duration-75 bottom-[35%] left-[40%] blur-[2px]"
		/>
		<Icon
			name="vue"
			aria-hidden="true"
			class="w-2 h-2 absolute translate-y-[100vh] group-hover:-translate-y-full transition ease-in-out duration-200 bottom-[0%] left-[55%] blur-[3px]"
		/>
		<Icon
			name="binary"
			aria-hidden="true"
			class="w-6 h-6 absolute translate-y-[100vh] group-hover:-translate-y-full transition ease-in-out duration-75 bottom-[24%] left-[53%] blur-[3px]"
		/>
		<Icon
			name="docker"
			aria-hidden="true"
			class="w-3 h-3 absolute translate-y-[100vh] group-hover:-translate-y-full transition ease-in-out duration-150 bottom-[0%] left-[65%] blur-[0px]"
		/>
		<Icon
			name="javascript"
			aria-hidden="true"
			class="w-3 h-3 absolute translate-y-[100vh] group-hover:-translate-y-full transition ease-in-out duration-100 bottom-[46%] left-[63%] blur-[1px]"
		/>
		<Icon
			name="docker"
			aria-hidden="true"
			class="w-3 h-3 absolute translate-y-[100vh] group-hover:-translate-y-full transition ease-in-out duration-300 bottom-[16%] left-[70%] blur-[2px]"
		/>
		<Icon
			name="element-tag"
			aria-hidden="true"
			class="w-4 h-4 absolute translate-y-[100vh] group-hover:-translate-y-full transition ease-in-out duration-200 bottom-[2%] left-[74%] blur-[1px]"
		/>
		<Icon
			name="binary"
			aria-hidden="true"
			class="w-3 h-3 absolute translate-y-[100vh] group-hover:-translate-y-full transition ease-in-out duration-75 bottom-[34%] left-[76%] blur-[0px]"
		/>
		<Icon
			name="vue"
			aria-hidden="true"
			class="w-3 h-3 absolute translate-y-[100vh] group-hover:-translate-y-full transition ease-in-out duration-150 bottom-[5%] left-[85%] blur-[2px]"
		/>
		<Icon
			name="docker"
			aria-hidden="true"
			class="w-4 h-4 absolute translate-y-[100vh] group-hover:-translate-y-full transition ease-in-out duration-100 bottom-[22%] left-[83%] blur-[2px]"
		/>
		<Icon
			name="javascript"
			aria-hidden="true"
			class="w-3 h-3 absolute translate-y-[100vh] group-hover:-translate-y-full transition ease-in-out duration-300 bottom-[16%] left-[93%] blur-[0px]"
		/>
		<Icon
			name="vue"
			aria-hidden="true"
			class="w-2 h-2 absolute translate-y-[100vh] group-hover:-translate-y-full transition ease-in-out duration-150 bottom-[44%] left-[87%] blur-[2px]"
		/>
		<Icon
			name="binary"
			aria-hidden="true"
			class="w-6 h-6 absolute translate-y-[100vh] group-hover:-translate-y-full transition ease-in-out duration-150 bottom-[33%] left-[86%] blur-[1px]"
		/>
	</div>
	<div v-if="projectName === 'clevyr'" class="stroke-[#FF5900]">
		<Icon
			name="binary"
			aria-hidden="true"
			class="w-6 h-6 absolute translate-y-[100vh] group-hover:-translate-y-full transition ease-in-out duration-200 top-[37%] left-0 blur-[1px]"
		/>
		<Icon
			name="element-tag"
			aria-hidden="true"
			class="w-5 h-5 absolute translate-y-[100vh] group-hover:-translate-y-full transition ease-in-out duration-100 top-12 left-[10%]"
		/>
		<Icon
			name="docker"
			aria-hidden="true"
			class="w-3 h-3 absolute translate-y-[100vh] group-hover:-translate-y-full transition ease-in-out duration-150 top-[30%] left-[17%] blur-[2px]"
		/>
		<Icon
			name="binary"
			aria-hidden="true"
			class="w-3 h-3 absolute translate-y-[100vh] group-hover:-translate-y-full transition ease-in-out duration-200 top-[33%] left-[25%] blur-[1px]"
		/>
		<Icon
			name="javascript"
			aria-hidden="true"
			class="w-2 h-2 absolute translate-y-[100vh] group-hover:-translate-y-full transition ease-in-out duration-100 top-[25%] left-[45%] blur-[1px]"
		/>
		<Icon
			name="vue"
			aria-hidden="true"
			class="w-4 h-4 absolute translate-y-[100vh] group-hover:-translate-y-full transition ease-in-out duration-100 top-[15%] left-[30%] blur-[1px]"
		/>
		<Icon
			name="element-tag"
			aria-hidden="true"
			class="w-4 h-4 absolute translate-y-[100vh] group-hover:-translate-y-full transition ease-in-out duration-300 top-[22%] left-[34%] blur-[1px]"
		/>
		<Icon
			name="docker"
			aria-hidden="true"
			class="w-3 h-3 absolute translate-y-[100vh] group-hover:-translate-y-full transition ease-in-out duration-150 top-[35%] left-[40%] blur-[2px]"
		/>
		<Icon
			name="vue"
			aria-hidden="true"
			class="w-2 h-2 absolute translate-y-[100vh] group-hover:-translate-y-full transition ease-in-out duration-75 top-[55%] left-[55%] blur-[3px]"
		/>
		<Icon
			name="binary"
			aria-hidden="true"
			class="w-6 h-6 absolute translate-y-[100vh] group-hover:-translate-y-full transition ease-in-out duration-200 top-[24%] left-[53%] blur-[3px]"
		/>
		<Icon
			name="docker"
			aria-hidden="true"
			class="w-3 h-3 absolute translate-y-[100vh] group-hover:-translate-y-full transition ease-in-out duration-300 top-[12%] left-[65%] blur-[0px]"
		/>
		<Icon
			name="javascript"
			aria-hidden="true"
			class="w-3 h-3 absolute translate-y-[100vh] group-hover:-translate-y-full transition ease-in-out duration-75 top-[46%] left-[63%] blur-[1px]"
		/>
		<Icon
			name="docker"
			aria-hidden="true"
			class="w-3 h-3 absolute translate-y-[100vh] group-hover:-translate-y-full transition ease-in-out duration-300 top-[30%] left-[70%] blur-[2px]"
		/>
		<Icon
			name="element-tag"
			aria-hidden="true"
			class="w-4 h-4 absolute translate-y-[100vh] group-hover:-translate-y-full transition ease-in-out duration-200 top-[12%] left-[74%] blur-[1px]"
		/>
		<Icon
			name="binary"
			aria-hidden="true"
			class="w-3 h-3 absolute translate-y-[100vh] group-hover:-translate-y-full transition ease-in-out duration-100 top-[34%] left-[76%] blur-[1px]"
		/>
		<Icon
			name="vue"
			aria-hidden="true"
			class="w-3 h-3 absolute translate-y-[100vh] group-hover:-translate-y-full transition ease-in-out duration-150 top-[44%] left-[85%] blur-[2px]"
		/>
		<Icon
			name="docker"
			aria-hidden="true"
			class="w-4 h-4 absolute translate-y-[100vh] group-hover:-translate-y-full transition ease-in-out duration-75 top-[25%] left-[83%] blur-[2px]"
		/>
		<Icon
			name="javascript"
			aria-hidden="true"
			class="w-3 h-3 absolute translate-y-[100vh] group-hover:-translate-y-full transition ease-in-out duration-300 top-[16%] left-[93%] blur-[0px]"
		/>
		<Icon
			name="vue"
			aria-hidden="true"
			class="w-2 h-2 absolute translate-y-[100vh] group-hover:-translate-y-full transition ease-in-out duration-150 top-[44%] left-[87%] blur-[2px]"
		/>
		<Icon
			name="binary"
			aria-hidden="true"
			class="w-6 h-6 absolute translate-y-[100vh] group-hover:-translate-y-full transition ease-in-out duration-75 top-[33%] left-[86%] blur-[1px]"
		/>
	</div>
</template>
