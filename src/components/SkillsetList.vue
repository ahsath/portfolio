<template>
	<ul class="mt-1">
		<li
			v-for="({ tech, averageSkill }, i) in skillset"
			:key="i"
			class="flex items-center h-8"
		>
			<base-card-subtitle class="w-5/12">
				{{ tech }}
			</base-card-subtitle>
			<div class="w-full h-3 bg-gray-200 rounded-full relative">
				<div
					class="bar absolute rounded-full bg-indigo-500 w-0 h-3"
					:data-average-skill="averageSkill"
				></div>
			</div>
		</li>
	</ul>
</template>

<script>
	import BaseCardSubtitle from "@/components/BaseCardSubtitle.vue";

	export default {
		props: {
			skillset: {
				type: Array,
				required: true
			}
		},
		components: {
			BaseCardSubtitle
		}
	};
</script>