<script lang="ts" src="./button.ts"></script>
<style src="./button.scss"></style>

<template>
  <button
    :class="[
      'button',
      {'button_active': isActive},
      {'button_hover': isHover}
    ]"
    @mousedown="mouseDownHandler"
    @mouseup="mouseUpHandler"
    @mouseover="mouseOverHandler"
    @mouseleave="mouseLeaveHandler"
  >Calculate</button>
</template>


