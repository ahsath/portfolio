<template>
	<!-- add a page transition -->
	<router-view />
</template>

<script>
	import AOS from "aos";
	export default {
		mounted() {
			AOS.init();
		}
	};
</script>