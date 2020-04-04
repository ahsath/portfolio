<template>
	<div>
		<the-heading />
		<base-container class="my-10">
			<base-grid gap="sm" lg="2">
				<portfolio-inkntint />
				<portfolio-pagami />
				<portfolio-dlasol />
				<portfolio-admirable />
			</base-grid>
		</base-container>
	</div>
</template>

<script>
	import PortfolioInkntint from "@/components/PortfolioInkntint.vue";
	import PortfolioPagami from "@/components/PortfolioPagami.vue";
	import PortfolioDlasol from "@/components/PortfolioDlasol.vue";
	import PortfolioAdmirable from "@/components/PortfolioAdmirable.vue";

	export default {
		name: "Portfolio",
		data() {
			return {
				pageTitle: "Portfolio",
				pageDescription: "Checkout my portfolio"
			};
		},
		metaInfo() {
			return {
				title: this.pageTitle,
				titleTemplate: "%s - Ahsath",
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
			PortfolioInkntint,
			PortfolioPagami,
			PortfolioDlasol,
			PortfolioAdmirable
		}
	};
</script>
