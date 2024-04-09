<script setup>
import { onMounted, onUnmounted, ref, computed } from 'vue';
import NavDivider from '@/components/sections/Nav/NavDivider.vue';
import NavItem from '@/components/sections/Nav/NavItem.vue';
const scrollTop = ref(0);
const solidNav = ref(false);

onMounted(() => {
	window.addEventListener('scroll', () => {
		scrollTop.value = window.scrollY;
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
		<NavDivider :solidNav="solidNav" />
		<ul
			class="flex gap-6 mr-24 transition-all duration-500"
			:class="{ 'translate-x-full': solidNav }"
		>
			<NavItem icon="github" url="https://github.com/INIKITS" />
			<NavItem
				icon="linkedin"
				url="https://www.linkedin.com/in/dakota-solis/"
			/>
		</ul>
	</nav>
</template>
