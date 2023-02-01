<script lang="ts" src="./app.ts"></script>
<style src="./app.scss"></style>

<template>
  <div class="app">
		<h1 class="app__title">FITCAL</h1>
		<Calculator
			class="app__calculator"
			@calculateResult="calculateHandler"
			v-if="showWindow === CALCULATOR"
		/>
		<Result
			class="app__result"
			v-if="showWindow === RESULT"
		/>
	</div>
</template> <!--

-->
