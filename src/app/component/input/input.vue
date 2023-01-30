<script lang="ts" src="./input.ts"></script>
<style src="./input.scss"></style>

<template>
	<div class="input">
		<label class="input__label" :for="id">{{ label }}</label>
		<input
      type="number"
			class="input__input"
			:id="id"
			:placeholder="placeholder"
			v-model="value"
      @keyup="keyUpHandler"
      @blur="blurHandler"
		/>
		<div class="input__message">{{ message }}</div>
	</div>
</template>




