<template>
	<portfolio-card
		:website-url="'https://dlasol.com/'"
		:repo-url="'https://github.com/ahsath/dlasol-website'"
	>
		<template #img>
			<g-image
				src="@/assets/img/dlasol-mockup.jpeg"
				quality="80"
				alt="Dlasol image mockup"
				class="rounded-t-lg h-full object-cover sm:rounded-t-none sm:rounded-r-lg"
			/>
		</template>
		<template #title>
			Dlasol
		</template>
		<template #text>
			Dlasol it's a creative agency based on Plant City, Florida U.S. My work
			was to develop the front-end code for their website
		</template>
	</portfolio-card>
</template>

<script>
	import PortfolioCard from "@/components/PortfolioCard.vue";

	export default {
		components: {
			PortfolioCard
		}
	};
</script>