<script setup>
import { onMounted, onUnmounted, ref, computed } from "vue";
import NavDivider from "@/components/sections/Nav/NavDivider.vue";
import NavItem from "@/components/sections/Nav/NavItem.vue";
const scrollTop = ref(0);
const solidNav = ref(false);

onMounted(() => {
	window.addEventListener("scroll", () => {
		scrollTop.value = window.scrollY;
		if (scrollTop.value > 30) {
			solidNav.value = true;
		} else {
			solidNav.value = false;
		}
	});
});

onUnmounted(() => {
	window.removeEventListener("scroll");
});
</script>

<template>
	<nav
		data-element="main-nav"
		class="[ sticky w-full top-0 z-30 flex justify-end pb-4 py-5 ] [ text-primary transition-all duration-500 backdrop-blur-sm ]"
		:class="{ 'bg-bg-theme-dark/20 ': solidNav }"
	>
		<NavDivider :solidNav="solidNav" />
		<ul
			data-element="nav-list"
			class="[ flex gap-8 mr-8 md:mr-28 ] [ transition-all duration-500 ]"
			:class="{ 'translate-x-[20%] md:translate-x-[80%]': solidNav }"
		>
			<NavItem
				icon="linkedin"
				url="https://www.linkedin.com/in/dakota-solis/"
				alt="LinkedIn"
			/>
			<NavItem icon="github" url="https://github.com/INIKITS" alt="Github" />
		</ul>
	</nav>
</template>
