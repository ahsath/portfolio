<template>
	<portfolio-card
		:website-url="'https://pagami.net'"
		:repo-url="'https://github.com/'"
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