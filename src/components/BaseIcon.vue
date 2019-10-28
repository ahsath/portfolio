<template>
	<svg
		class="fill-current"
		:class="[classes]"
		viewBox="0 0 24 24"
		:aria-label="ariaLabel"
	>
		<path :d="iconPath" />
	</svg>
</template>

<script>
	export default {
		props: {
			ariaLabel: {
				type: String,
				default: undefined
			},
			iconPath: {
				type: String,
				required: true
			},
			size: {
				type: String,
				default: "sm"
			},
			align: {
				type: String,
				default: undefined
			}
		},
		computed: {
			classes() {
				return [...this.sm, ...this[this.size], ...this._align];
			},
			_align() {
				return this.align ? this[this.align] : "";
			},
			xs() {
				return ["w-mdc-icon-button", "h-mdc-icon-button"];
			},
			sm() {
				return ["w-6", "h-6"];
			},
			left() {
				return ["-ml-1", "mr-2"];
			},
			right() {
				return ["-mr-1", "ml-2"];
			}
		}
	};
</script>