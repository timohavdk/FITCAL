<script lang="ts" src="./app.ts"></script>
<style src="./app.scss"></style>

<template>
  <div class="app">
		<h1 class="app__title">FITCAL</h1>
		<Calculator
			class="app__calculator"
			v-if="showWindow === PanelEnums.CALCULATOR"
		/>
		<Result
			class="app__result"
			v-if="showWindow === PanelEnums.RESULT"
		/>
		<Description/>
	</div>
</template> <!--

-->
