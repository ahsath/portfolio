<template>
	<header class="px-4 flex items-center relative z-10 sm:h-16">
		<section class="flex justify-start sm:flex-grow">
			<base-internal-link
				to="/"
				class="hidden -ml-1 sm:flex"
				link-style="avatar"
				aria-label="Go to home"
				title="Go to home"
			>
				<g-image
					src="@/assets/img/ahsath.jpg"
					width="40"
					height="40"
					quality="100"
					class="rounded-full"
					alt="A photo of Ahsath"
				/>
			</base-internal-link>
		</section>
		<section class="flex justify-center flex-grow">
			<the-navigation />
		</section>
		<section class="flex justify-end sm:flex-grow">
			<base-external-link
				to="mailto:ahsath@gmail.com"
				class="hidden -mr-1 sm:flex"
				title="Send an email"
				link-style="icon"
			>
				<base-icon :icon-path="mdiEmailOutline" aria-label="Send an email" />
			</base-external-link>
		</section>
	</header>
</template>

<script>
	import TheNavigation from "@/components/TheNavigation.vue";
	import { mdiEmailOutline } from "@mdi/js";

	export default {
		data() {
			return {
				mdiEmailOutline
			};
		},
		components: {
			TheNavigation
		}
	};
</script>