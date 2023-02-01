<script lang="ts" src="./button.ts"></script>
<style src="./button.scss"></style>

<template>
  <button
    :class="[
      'button',
      {'button_active': isActive},
      {'button_hover': isHover}
    ]"
    @click="clickHandler"
    @pointerover="mouseOverHandler"
    @pointerleave="mouseLeaveHandler"
  >{{ title }}</button>
	<div
		:class="[
        'button__message',
        {'button__message_show': isShowingError}
       ]"
		v-if="isErrorShow"
	>{{ errorMessage }}</div>
</template>

