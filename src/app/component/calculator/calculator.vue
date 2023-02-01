<script lang="ts" src="./calculator.ts"></script>
<style src="./calculator.scss"></style>

<template>
	<div class="calculator">
		<div class="calculator__bar">
			<h2 class="calculator__title">Calculate body mass index</h2>
			<Input
				:id="'weight'"
				:label="'Enter your weight, kg'"
				:placeholder="0"
        :mode="'weight'"
        :is-accepted="this.$store.getters.GET_ACCEPT_WEIGHT"
				@setValue="setWeight"
				class="calculator__input"
			/>
			<Input
				:id="'height'"
				:label="'Enter your height, cm'"
				:placeholder="0"
        :mode="'height'"
        :is-accepted="this.$store.getters.GET_ACCEPT_HEIGHT"
				@setValue="setHeight"
				class="calculator__input"
			/>
      <Button
				:title="'Calculate'"
				:errorMessage="ERROR_MESSAGE"
				:isErrorShow="isErrorShow"
				@clickOnButton="clickHandler"
			/>
		</div>
	</div>
</template>




