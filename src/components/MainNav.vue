<script setup>
import Icon from '../components/Icon.vue';
</script>

<template>
	<nav
		class="text-white flex justify-end p-3 mx-12 border-b border-white sticky"
	>
		<ul class="flex gap-4">
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
			<li>link</li>
		</ul>
	</nav>
</template>
