<template>
	<div :class="[classes]">
		<slot />
	</div>
</template>

<script>
	export default {
		props: {
			gap: {
				type: String
			},
			col: {
				type: String
			},
			sm: {
				type: String
			},
			md: {
				type: String
			},
			lg: {
				type: String
			}
		},
		computed: {
			classes() {
				return [
					"grid",
					...this._gap,
					...this._col,
					...this._col,
					...this._sm,
					...this._md,
					...this._lg
				];
			},
			_gap() {
				return this.gap ? [`grid-gap--${this.gap}`] : [undefined];
			},
			_col() {
				return this.col ? [`grid-temp-col--${this.col}`] : [undefined];
			},
			_sm() {
				return this.sm ? [`sm:grid-temp-col--${this.sm}`] : [undefined];
			},
			_md() {
				return this.md ? [`md:grid-temp-col--${this.md}`] : [undefined];
			},
			_lg() {
				return this.lg ? [`lg:grid-temp-col--${this.lg}`] : [undefined];
			}
		}
	};
</script>