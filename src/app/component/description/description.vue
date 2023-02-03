<script lang="ts" src="./description.ts"></script>
<style src="./description.scss"></style>
<template>
	<div class="description">
		<button
			class="description__button"
			@click="clickHandler"
		>
			<span class="description__icon">
				{{ buttonIcon }}
			</span>
		</button>
		<div
			v-if="isShown"
			:class="[
					'description__overlay',
					{'description__overlay_shown': isPanelShown}
				]"
		>
			<div
				:class="[
					'description__wrapper',
					{'description__wrapper_shown': isPanelShown}
				]"
			>
				<div class="description__title">
					Body Mass Index (BMI)
				</div>
				<hr>
				<div class="description__information">
					The body mass index (BMI) is the metric currently in use for defining anthropometric height/weight characteristics in adults and for classifying (categorizing) them into groups. The common interpretation is that it represents an index of an individual’s fatness. It also is widely used as a risk factor for the development of or the prevalence of several health issues.
				</div>
			</div>
		</div>
	</div>
</template>



