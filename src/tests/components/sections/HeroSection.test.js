import { getByText, render, waitFor } from '@testing-library/vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import { flushPromises } from '@vue/test-utils'

describe('Hero Section Text', () => {
	beforeEach(() => {
		// IntersectionObserver isn't available in test environment
		const mockIntersectionObserver = jest.fn()
		mockIntersectionObserver.mockReturnValue({
			observe: () => null,
			unobserve: () => null,
			disconnect: () => null,
		})
		window.IntersectionObserver = mockIntersectionObserver

		jest.useFakeTimers()
	})

	afterEach(() => {
		jest.runOnlyPendingTimers()
		jest.useRealTimers()
	})

	it('renders the correct name and contains "Front End Developer" text', async () => {
		const { getByText } = render(HeroSection)
		jest.advanceTimersByTime(6000)

		waitFor(() => {
			expect(getByText('Dakota')).toBeTruthy()
		})

		expect(getByText('Front End Developer')).toBeTruthy()
	})
})
