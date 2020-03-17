<template>
	<portfolio-card
		:website-url="'https://pagami.app'"
		:repo-url="'https://github.com/ahsath/pagami-landing-page'"
	>
		<template #img>
			<g-image
				src="@/assets/img/pagami-mockup.jpeg"
				quality="80"
				alt="Pagami image mockup"
				class="rounded-t-lg h-full object-cover sm:rounded-t-none sm:rounded-r-lg"
			/>
		</template>
		<template #title>
			Pagami
		</template>
		<template #text>
			Pagami it's a company that uses maps for business advertising. My work
			consisted in designing the UI as well the development of the front-end
			code
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
