<script lang="ts" src="./calculator.ts"></script>
<style src="./calculator.scss"></style>

<template>
	<div class="calculator">
		<div class="calculator__bar">
			<h2 class="calculator__title">Calculate body mass index</h2>
			<Input
				:id="'weight'"
				:label="'Enter your weight'"
				:placeholder="0"
        :mode="'weight'"
				@setValue="setWeight"
			/>
			<Input
				:id="'height'"
				:label="'Enter your height'"
				:placeholder="0"
        :mode="'height'"
				@setValue="setHeight"
			/>
		</div>
	</div>
</template>




