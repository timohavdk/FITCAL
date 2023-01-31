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
  >Calculate</button>
</template>

