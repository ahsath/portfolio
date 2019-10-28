<template>
	<a :href="to" class="external-link" :target="target" :class="classes">
		<slot />
	</a>
</template>

<script>
	// Todo: add external-link-class prop
	import { link, button } from "@/mixins";
	export default {
		mixins: [link, button]
	};
</script>