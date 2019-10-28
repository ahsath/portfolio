<template>
	<portfolio-card
		:website-url="'https://inkntint.com'"
		:repo-url="'https://github.com/ahsath/inkntint'"
	>
		<template #img>
			<g-image
				src="@/assets/img/inkntint-mockup.jpeg"
				quality="80"
				alt="Inkntint image mockup"
				class="rounded-t-lg h-full object-cover sm:rounded-t-none sm:rounded-r-lg"
			/>
		</template>
		<template #title>
			Inkntint
		</template>
		<template #text>
			Inkntint it's a company that develops hybrid multiplatform mobile, desktop
			and web apps. My job was to design and code the front-end of their website
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