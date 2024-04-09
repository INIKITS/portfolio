<script setup>
import { onMounted, onUnmounted, ref, computed } from 'vue';
import Icon from '../components/Icon.vue';

const scrollTop = ref(0);
const solidNav = ref(false);

onMounted(() => {
	window.addEventListener('scroll', () => {
		scrollTop.value = window.scrollY;
		console.log('scrollTop.value :>> ', scrollTop.value);
		if (scrollTop.value > 30) {
			solidNav.value = true;
		} else {
			solidNav.value = false;
		}
	});
});

onUnmounted(() => {
	window.removeEventListener('scroll');
});
</script>

<template>
	<nav
		data-element="main-nav"
		class="top-0 text-white flex justify-end pb-3 py-4 sticky transition-all duration-500 z-10"
		:class="{ 'bg-bg-theme-dark/80 ': solidNav }"
	>
		<div
			class="absolute h-px w-[44%] bg-white top-full left-1/2 transition-all duration-500"
			:class="{ 'w-[66%]': solidNav }"
		/>
		<div
			class="absolute h-px w-[44%] bg-white top-full right-1/2 transition-all duration-500"
			:class="{ 'w-[66%]': solidNav }"
		/>
		<ul
			class="flex gap-6 mr-24 transition-all duration-500"
			:class="{ 'translate-x-full': solidNav }"
		>
			<li>
				<a href="/" class="fill-white hover:fill-red-500">
					<Icon name="github" width="24" />
				</a>
			</li>
			<li>
				<a href="/" class="fill-white hover:fill-red-500">
					<Icon name="linkedin" width="24" />
				</a>
			</li>
		</ul>
	</nav>
</template>
