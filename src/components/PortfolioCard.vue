<template>
	<base-card class="card">
		<div class="sm:flex">
			<div class="sm:order-2 sm:w-1/3">
				<slot name="img" />
			</div>
			<div class="sm:order-1 sm:flex-grow sm:w-2/3">
				<base-card-title class="p-4 md:p-6">
					<slot name="title" />
				</base-card-title>
				<base-card-text class="px-4 pb-2 md:px-6">
					<slot name="text" />
				</base-card-text>
				<base-card-actions class="md:p-4 sm:justify-start">
					<base-external-link
						:to="websiteUrl"
						class="hover:bg-gray-200 mr-2"
						link-style="text"
					>
						Visit website
						<base-icon :icon-path="mdiOpenInNew" size="xs" align="right" />
					</base-external-link>
					<base-external-link
						:to="repoUrl"
						class="hover:bg-gray-900 hover:text-white lg:hidden xl:flex"
						link-style="outline"
					>
						See code
						<base-icon :icon-path="mdiGithubCircle" size="xs" align="right" />
					</base-external-link>
					<base-external-link
						:to="repoUrl"
						link-style="icon"
						title="See code"
						class="hidden lg:flex xl:hidden -mt-6px -mb-6px text-gray-900"
					>
						<base-icon :icon-path="mdiGithubCircle" aria-label="See code" />
					</base-external-link>
				</base-card-actions>
			</div>
		</div>
	</base-card>
</template>

<script>
	import { mdiGithubCircle, mdiOpenInNew } from "@mdi/js";
	// import AOS from "aos";

	export default {
		data() {
			return {
				mdiGithubCircle,
				mdiOpenInNew
			};
		},
		props: {
			websiteUrl: {
				type: String,
				required: true
			},
			repoUrl: {
				type: String,
				required: true
			}
		}
		// mounted() {
		// 	AOS.init();
		// }
	};
</script>