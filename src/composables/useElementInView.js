import { ref } from 'vue'

export const useElementInView = (
	actionCallback = () => {},
	options = { threshold: 1.0 },
	repeat = false
) => {
	const isVisible = ref(false)

	const observerCallback = (entries) => {
		entries.forEach(({ target, isIntersecting }) => {
			if (isIntersecting) {
				isVisible.value = true
				actionCallback(target)
			} else if (repeat) {
				isVisible.value = false
			}
		})
	}

	const observer = new IntersectionObserver(observerCallback, {
		...options,
	})

	return {
		isVisible,
		observer,
	}
}
