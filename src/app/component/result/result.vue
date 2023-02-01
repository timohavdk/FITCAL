<script lang="ts" src="./result.ts"></script>
<style src="./result.scss"></style>

<template>
	<div class="result">
		<div class="result__bar">
			<h2 class="result__title">Your Body Mass Index:</h2>
			<h3 class="result__result">{{ bodyMassIndex }}</h3>
			<p class="result__description">{{ description }}</p>
			<Button :title="'Try again'"/>
		</div>
	</div>
</template>



