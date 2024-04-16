<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useElementInView } from '@/composables/useElementInView.js'

const heroText = ref(null)
const displayText = ['inikits', 'Dakota. 🦅']
const typeValue = ref('')
const typeStatus = ref(false)
const typingSpeed = ref(100)
const erasingSpeed = 75
const newTextDelay = 1200
const displayTextArrayIndex = ref(0)
const charIndex = ref(0)

const { isVisible, observer } = useElementInView(() => {}, {
	threshold: 0,
	rootMargin: '20%',
})

function typeText() {
	if (charIndex.value < displayText[displayTextArrayIndex.value].length) {
		if (!typeStatus) typeStatus.value = true
		typeValue.value += displayText[displayTextArrayIndex.value].charAt(
			charIndex.value
		)
		charIndex.value += 1
		if (
			displayTextArrayIndex.value === displayText.length - 1 &&
			charIndex.value ===
				displayText[displayTextArrayIndex.value].length - 4
		) {
			typingSpeed.value = 85
			setTimeout(typeText, 1600)
		} else setTimeout(typeText, typingSpeed.value)
	} else if (displayTextArrayIndex.value === displayText.length - 1) {
		return
	} else {
		typeStatus.value = false
		setTimeout(eraseText, newTextDelay)
	}
}

function eraseText() {
	if (charIndex.value > 0) {
		if (!typeStatus.value) typeStatus.value = true
		typeValue.value = displayText[displayTextArrayIndex.value].substring(
			0,
			charIndex.value - 1
		)
		charIndex.value -= 1
		setTimeout(eraseText, erasingSpeed)
	} else {
		typeStatus.value = false
		displayTextArrayIndex.value += 1
		if (displayTextArrayIndex.value >= displayText.length)
			displayTextArrayIndex.value = 0
		setTimeout(typeText, typingSpeed.value + 1000)
	}
}

onMounted(() => {
	setTimeout(typeText, newTextDelay + 200)
	observer.observe(heroText.value)
})

onUnmounted(() => {
	observer.disconnect()
})
</script>

<template>
	<div
		data-element="hero-section"
		class="[ flex flex-col lg:flex-row lg:justify-between items-center min-h-[100vh] mt-36 lg:mt-4 mb-12 mx-10 ]"
	>
		<div
			class="[ absolute -left-24 top-[33%] w-60 h-60 rounded-full bg-[#03656c] blur-[100px] ]"
		/>
		<div
			class="[ absolute -right-24 top-[10%] w-60 h-60 rounded-full bg-[#542676] blur-[100px] ]"
		/>
		<div
			ref="heroText"
			class="[ md:max-w-[55%] text-center lg:text-left mx-auto ]"
			:class="{ 'fade-in': isVisible }"
		>
			<div
				class="[ text-2xl md:text-4xl font-bold tracking-wide text-primary z-10 mb-8 ]"
			>
				hello! I'm
				<span>{{ typeValue }}</span>
				<span class="[ animate-pulse font-mono ]">|</span>
			</div>
			<div class="text-primary md:text-xl leading-relaxed">
				I am a
				<span class="text-bg-theme font-bold">Front End Developer</span>
				who enjoys building things for both the web and people.
			</div>
			<div class="mt-3 text-primary md:text-xl leading-relaxed">
				I specialize in creating pixel-perfect websites and applications
				with a focus on creating a seamless user experience.
			</div>
		</div>
		<div
			class="mt-12 bg-[#0f1010]/45 backdrop-blur-sm p-3 rounded-full mx-auto"
			:class="{ 'fade-in': isVisible }"
		>
			<img
				src="/assets/imgs/me.png"
				aria-hidden="true"
				class="w-[17rem] h-[17rem] lg:w-[26rem] lg:h-[26rem] z-20 rounded-full object-cover object-bottom brightness-[0.80] contrast-[1.06]"
			/>
		</div>
	</div>
</template>
