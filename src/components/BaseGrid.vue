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

<style>
	.grid {
		display: grid;
	}
	@responsive {
		.grid-gap--sm {
			gap: 1rem;
		}
		.grid-gap--md {
			gap: 1.5rem;
		}
		.grid-gap--lg {
			gap: 2.25rem;
		}
		.grid-temp-col--1 {
			grid-template-columns: 1fr;
		}
		.grid-temp-col--2 {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>