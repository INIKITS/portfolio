<script setup>
import { ref, onMounted } from 'vue';

const displayText = ['dakopa', 'dakooa', 'dakota. 🦅'];
const typeValue = ref('');
const typeStatus = ref(false);
const typingSpeed = ref(100);
const erasingSpeed = 125;
const newTextDelay = 1200;
const displayTextArrayIndex = ref(0);
const charIndex = ref(0);

function typeText() {
	if (charIndex.value < displayText[displayTextArrayIndex.value].length) {
		if (!typeStatus) typeStatus.value = true;
		typeValue.value += displayText[displayTextArrayIndex.value].charAt(
			charIndex.value
		);
		charIndex.value += 1;
		if (
			displayTextArrayIndex.value === displayText.length - 1 &&
			charIndex.value === displayText[displayTextArrayIndex.value].length - 4
		) {
			typingSpeed.value = 85;
			setTimeout(typeText, 1600);
		} else
		setTimeout(typeText, typingSpeed.value);
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
			charIndex.value - 1
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
});
</script>

<template>
	<div data-element="hero-section" class="hero [ px-12 flex items-center justify-center gap-2 min-h-[100vh] ]">
		<div class="relative text-3xl text-white leading-relaxed tracking-wide ]">
			hello. i'm
			<span class="text-bg-theme">{{ typeValue }}</span>
			<span class="animate-pulse font-mono">|</span>
		</div>
	</div>
</template>
