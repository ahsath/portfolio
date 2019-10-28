<template>
	<div>
		<the-heading />
		<base-container class="my-10">
			<base-grid gap="lg" class="max-w-xl mx-auto">
				<base-external-link
					to="https://ahsath.me/curriculum.pdf"
					class="text-indigo-800 hover:bg-indigo-100 ml-auto"
					link-style="text"
				>
					Download CV
					<base-icon :icon-path="mdiDownloadOutline" size="xs" align="right" />
				</base-external-link>
				<base-card class="p-4">
					<base-grid gap="sm">
						<base-grid-track sm-grid-row="1">
							<g-image
								src="@/assets/img/ahsath.jpg"
								width="72"
								height="72"
								quality="100"
								alt="A photo of Ahsath"
								class="rounded-full mx-auto sm:m-0"
							/>
						</base-grid-track>
						<base-grid-track sm-grid-row="1" class="text-center sm:text-left">
							<base-card-title>
								Ahsath Marcano
							</base-card-title>
							<base-card-subtitle>
								Senior Technician in Computer Science
							</base-card-subtitle>
							<base-card-text class="mt-4">
								26 years old, born in Venezuela. He speaks Spanish and English
								fluently
							</base-card-text>
						</base-grid-track>
					</base-grid>
				</base-card>
				<section>
					<div class="flex items-center">
						<base-icon :icon-path="mdiBriefcaseOutline" class="text-gray-500" />
						<base-card-overline-sm class="ml-3">
							Work experience
						</base-card-overline-sm>
					</div>
					<base-card
						class="mt-4 p-4"
						v-for="({ date, location, company, jobTitle, jobDescription },
						i) in cv.workExperience"
						:key="i"
					>
						<base-card-overline-xs>
							{{ date }} &bull; {{ location }}
						</base-card-overline-xs>
						<base-card-title-sm class="mt-1">
							{{ company }}
						</base-card-title-sm>
						<base-card-subtitle>
							{{ jobTitle }}
						</base-card-subtitle>
						<base-card-text class="mt-4" v-if="jobDescription">
							{{ jobDescription }}
						</base-card-text>
					</base-card>
				</section>
				<section>
					<div class="flex items-center">
						<base-icon :icon-path="mdiCodeBraces" class="text-gray-500" />
						<base-card-overline-sm class="ml-3">
							Freelance work
						</base-card-overline-sm>
					</div>
					<base-card
						class="mt-4 p-4"
						v-for="({ date, location, company, jobTitle, jobDescription },
						i) in cv.freelanceWork"
						:key="i"
					>
						<base-card-overline-xs>
							{{ date }} &bull; {{ location }}
						</base-card-overline-xs>
						<base-card-title-sm class="mt-1">
							{{ company }}
						</base-card-title-sm>
						<base-card-subtitle>
							{{ jobTitle }}
						</base-card-subtitle>
						<base-card-text class="mt-4">
							{{ jobDescription }}
						</base-card-text>
					</base-card>
				</section>
				<section>
					<div class="flex items-center">
						<base-icon :icon-path="mdiSchoolOutline" class="text-gray-500" />
						<base-card-overline-sm class="ml-3">
							Education
						</base-card-overline-sm>
					</div>
					<base-card
						class="mt-4 p-4"
						v-for="({ date, location, educativeOrg, degree },
						i) in cv.education"
						:key="i"
					>
						<base-card-overline-xs>
							{{ date }} &bull; {{ location }}
						</base-card-overline-xs>
						<base-card-title-sm class="mt-1">
							{{ educativeOrg }}
						</base-card-title-sm>
						<base-card-subtitle>
							{{ degree }}
						</base-card-subtitle>
					</base-card>
				</section>
				<section>
					<div class="flex items-center">
						<base-icon :icon-path="mdiBrain" class="text-gray-500" />
						<base-card-overline-sm class="ml-3">
							Skillset
						</base-card-overline-sm>
					</div>
					<base-card class="mt-4 p-4">
						<base-card-overline-xs>
							Coding
						</base-card-overline-xs>
						<skillset-list :skillset="cv.skillset.coding" />
					</base-card>
					<base-card class="mt-4 p-4">
						<base-card-overline-xs>
							Design Tools
						</base-card-overline-xs>
						<skillset-list :skillset="cv.skillset.designTools" />
					</base-card>
					<base-card class="mt-4 p-4">
						<base-card-overline-xs>
							Front-end tools and frameworks
						</base-card-overline-xs>
						<skillset-list :skillset="cv.skillset.frontendToolsAndFrameworks" />
					</base-card>
				</section>
			</base-grid>
		</base-container>
	</div>
</template>

<script>
	import BaseCardSubtitle from "../components/BaseCardSubtitle.vue";
	import BaseCardOverlineXs from "../components/BaseCardOverlineXs.vue";
	import BaseCardTitleSm from "../components/BaseCardTitleSm.vue";
	import BaseCardOverlineSm from "../components/BaseCardOverlineSm.vue";
	import SkillsetList from "../components/SkillsetList.vue";
	import cv from "@/data/cv.json";

	import {
		mdiDownloadOutline,
		mdiBriefcaseOutline,
		mdiSchoolOutline,
		mdiCodeBraces,
		mdiBrain
	} from "@mdi/js";

	export default {
		name: "Curriculum",
		data() {
			return {
				pageTitle: "Curriculum",
				pageDescription:
					"Senior Technician in Computer Science. 26 years old, born in Venezuela. He speaks Spanish and English fluently",
				mdiDownloadOutline,
				mdiBriefcaseOutline,
				mdiSchoolOutline,
				mdiCodeBraces,
				mdiBrain,
				cv
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
						content: "https://ahsath.me/"
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
						content: `https://ahsath.me${require("../assets/img/metadata-1200x628.jpg")}`
					},
					{ property: "og:type", content: "website" },
					// Twitter
					{ property: "twitter:card", content: "summary_large_image" },
					{ property: "twitter:url", content: "https://ahsath.me/" },
					{ property: "twitter:title", content: `Ahsath - ${this.pageTitle}` },
					{ property: "twitter:description", content: this.pageDescription },
					{
						property: "twitter:image",
						content: `https://ahsath.me${require("../assets/img/metadata-1200x628.jpg")}`
					}
				]
			};
		},
		components: {
			BaseCardSubtitle,
			BaseCardOverlineXs,
			BaseCardOverlineSm,
			BaseCardTitleSm,
			SkillsetList
		}
	};
</script>
