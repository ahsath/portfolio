<template>
	<div :class="[classes]"><slot /></div>
</template>

<script>
	export default {
		props: {
			col: {
				type: String
			},
			sm: {
				type: String
			},
			smGridRow: {
				type: String
			}
		},
		computed: {
			classes() {
				return [...this._col, ...this._sm, ...this._smGridRow];
			},
			_col() {
				return this.col ? [`grid-col--${this.col}`] : [undefined];
			},
			_sm() {
				return this.sm ? [`sm:grid-col--${this.sm}`] : [undefined];
			},
			_smGridRow() {
				return this.smGridRow ? [`sm:grid-row--${this.smGridRow}`] : [undefined];
			}
		}
	};
</script>

<style>
	@responsive {
		.grid-col--1 {
			grid-column: 1;
		}
		.grid-col--2 {
			grid-column: 2;
		}
		.grid-row--1 {
			grid-row: 1;
		}
	}
</style>