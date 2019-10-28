<template>
	<button :class="classes">
		<slot />
	</button>
</template>

<script>
	import { button } from "@/mixins";

	export default {
		mixins: [button],
		props: {
			buttonStyle: {
				type: String,
				default: "text"
			}
		},
		computed: {
			classes() {
				return [...this[this.buttonStyle]];
			}
		}
	};
</script>