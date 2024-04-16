<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useElementInView } from "@/composables/useElementInView.js";

const heroText = ref(null);
const displayText = ["dakopa", "dakoaa", "dakota. 🦅"];
const typeValue = ref("");
const typeStatus = ref(false);
const typingSpeed = ref(100);
const erasingSpeed = 75;
const newTextDelay = 1200;
const displayTextArrayIndex = ref(0);
const charIndex = ref(0);

const { isVisible, observer } = useElementInView(() => {}, {
	threshold: 0,
	rootMargin: "20%",
});

function typeText() {
	if (charIndex.value < displayText[displayTextArrayIndex.value].length) {
		if (!typeStatus) typeStatus.value = true;
		typeValue.value += displayText[displayTextArrayIndex.value].charAt(
			charIndex.value,
		);
		charIndex.value += 1;
		if (
			displayTextArrayIndex.value === displayText.length - 1 &&
			charIndex.value === displayText[displayTextArrayIndex.value].length - 4
		) {
			typingSpeed.value = 85;
			setTimeout(typeText, 1600);
		} else setTimeout(typeText, typingSpeed.value);
	} else if (displayTextArrayIndex.value === displayText.length - 1) {
		return;
	} else {
		typeStatus.value = false;
		setTimeout(eraseText, newTextDelay);
	}
}

function eraseText() {
	if (charIndex.value > 0) {
		if (!typeStatus.value) typeStatus.value = true;
		typeValue.value = displayText[displayTextArrayIndex.value].substring(
			0,
			charIndex.value - 1,
		);
		charIndex.value -= 1;
		setTimeout(eraseText, erasingSpeed);
	} else {
		typeStatus.value = false;
		displayTextArrayIndex.value += 1;
		if (displayTextArrayIndex.value >= displayText.length)
			displayTextArrayIndex.value = 0;
		setTimeout(typeText, typingSpeed.value + 1000);
	}
}

onMounted(() => {
	setTimeout(typeText, newTextDelay + 200);
	observer.observe(heroText.value);
});

onUnmounted(() => {
	observer.disconnect();
});
</script>

<template>
	<div
		data-element="hero-section"
		class="[ flex flex-col justify-center text-center min-h-[100vh] px-12 mb-12 ]"
	>
		<div
			class="[ absolute -left-24 top-[33%] w-60 h-60 rounded-full bg-[#03656c] blur-[100px] ]"
		/>
		<div
			class="[ absolute -right-24 top-[10%] w-60 h-60 rounded-full bg-[#542676] blur-[100px] ]"
		/>
		<div
			ref="heroText"
			class="[ text-3xl leading-relaxed tracking-wide text-primary z-10 ]"
			:class="{ 'fade-in': isVisible }"
		>
			hello. i'm
			<span class="[ text-bg-theme ]">{{ typeValue }}</span>
			<span class="[ animate-pulse font-mono ]">|</span>
		</div>
	</div>
</template>
