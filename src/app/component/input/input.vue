<script lang="ts" src="./input.ts"></script>
<style src="./input.scss"></style>

<template>
	<div class="input">
		<label class="input__label" :for="id">{{ label }}</label>
		<input
			class="input__input"
			:id="id"
			:placeholder="placeholder"
			v-model="value"
		/>
		<div class="input__message"></div>
	</div>
</template>




