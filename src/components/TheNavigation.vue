<template>
	<nav class="nav w-full py-3 sm:flex sm:w-auto sm:p-0">
		<base-internal-link
			v-for="({ to, name, iconPath }, i) in routes"
			:key="i"
			:to="to"
			class="block h-mdc-button rounded px-3"
			exact-active-class="nav-active--exact"
		>
			<div class="a flex h-full items-center">
				<span class="nav__content text-gray-500">
					<base-icon :icon-path="iconPath" size="xs" align="left" />
				</span>
				<span
					class="nav__content text-gray-700 text-sm font-medium tracking-widest"
				>
					{{ name }}
				</span>
			</div>
		</base-internal-link>
	</nav>
</template>

<script>
	import { mdiHomeOutline, mdiBriefcaseOutline, mdiTie } from "@mdi/js";

	export default {
		data() {
			return {
				routes: [
					{ to: "/", name: "Home", iconPath: mdiHomeOutline },
					{ to: "/portfolio", name: "Portfolio", iconPath: mdiBriefcaseOutline },
					{
						to: "/curriculum",
						name: "Curriculum",
						iconPath: mdiTie
					}
				]
			};
		}
	};
</script>

<style>
	.internal-link:not(.nav-active--exact):hover {
		@apply bg-gray-200;
	}
	.internal-link:nth-child(n + 2) {
		@apply mt-2;
	}
	.nav-active--exact {
		@apply bg-indigo-100;
	}
	.nav-active--exact .nav__content {
		@apply text-indigo-800;
	}
	@screen sm {
		.internal-link:nth-child(n + 2) {
			@apply mt-0 ml-2;
		}
	}
</style>