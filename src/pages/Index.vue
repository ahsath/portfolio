<template>
	<div>
		<the-heading />
		<cover-letter-card />
		<base-external-link
			to="mailto:ahsath@gmail.com"
			class="bg-indigo-500 text-indigo-100 sm:hidden"
			title="Send an email"
			link-style="fab"
		>
			<base-icon :icon-path="mdiEmailOutline" aria-label="Send an email" />
		</base-external-link>
	</div>
</template>

<script>
	import CoverLetterCard from "@/components/CoverLetterCard";
	import { mdiEmailOutline } from "@mdi/js";

	export default {
		name: "Home",
		data() {
			return {
				mdiEmailOutline,
				pageTitle: "JavaScript front-end web developer",
				pageDescription:
					"Hello, I'm a junior JavaScript front-end web developer with 3 years of experience building websites and progressive web apps"
			};
		},
		metaInfo() {
			return {
				title: this.pageTitle,
				meta: [
					{
						name: "title",
						content: `Ahsath - ${this.pageTitle}`
					},
					{
						name: "description",
						content: this.pageDescription
					},
					// OG - Facebook
					{
						property: "og:url",
						content: "https://ahsath.netlify.com/"
					},
					{
						property: "og:title",
						content: `Ahsath - ${this.pageTitle}`
					},
					{
						property: "og:description",
						content: this.pageDescription
					},
					{
						property: "og:image",
						content: `https://ahsath.netlify.com${require("../assets/img/metadata-1200x628.jpg")}`
					},
					{ property: "og:type", content: "website" },
					// Twitter
					{ property: "twitter:card", content: "summary_large_image" },
					{ property: "twitter:url", content: "https://ahsath.netlify.com/" },
					{ property: "twitter:title", content: `Ahsath - ${this.pageTitle}` },
					{ property: "twitter:description", content: this.pageDescription },
					{
						property: "twitter:image",
						content: `https://ahsath.netlify.com${require("../assets/img/metadata-1200x628.jpg")}`
					}
				]
			};
		},
		components: {
			CoverLetterCard
		}
	};
</script>

