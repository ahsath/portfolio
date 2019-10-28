<template>
	<g-link
		:to="to"
		class="internal-link"
		:target="target"
		:class="classes"
		:active-class="activeClass"
		:exact-active-class="exactActiveClass"
		exact
	>
		<slot />
	</g-link>
</template>

<script>
	// Todo: add internal-link-class prop
	import { link, button } from "@/mixins";

	export default {
		mixins: [link, button],
		props: {
			activeClass: {
				type: String,
				default: "active"
			},
			exactActiveClass: {
				type: String,
				default: "active--exact"
			}
		}
	};
</script>