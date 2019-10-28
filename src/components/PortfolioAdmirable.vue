<template>
	<portfolio-card
		:website-url="'https://admirable-web.netlify.com/'"
		:repo-url="'https://github.com/ahsath/admirable'"
	>
		<template #img>
			<g-image
				src="@/assets/img/admirable-mockup.jpeg"
				quality="80"
				alt="Admirable image mockup"
				class="rounded-t-lg h-full object-cover sm:rounded-t-none sm:rounded-r-lg"
			/>
		</template>
		<template #title>
			Admirable
		</template>
		<template #text>
			Admirable its a hybrid desktop an web app for management system for
			cellular technical service companies. I developed it using Electron.js as
			side project
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