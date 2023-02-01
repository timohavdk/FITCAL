<script lang="ts" src="./input.ts"></script>
<style src="./input.scss"></style>

<template>
  <div class="input">
    <label
      :class="[
        'input__label',
        {'input__label_light': isFocus},
        {'input__label_accepted': isAccepted},
        {'input__label_not-accepted': !isAccepted && value},
      ]"
      :for="id"
    >{{ label }}</label>
    <input
      type="number"
      :class="[
        'input__input',
        {'input__input_light': isFocus || isHover},
        {'input__input_focus': isFocus},
        {'input__input_accepted': isAccepted},
        {'input__input_not-accepted': !isAccepted && value},
      ]"
      :id="id"
      :placeholder="placeholder"
      ref="input"
      v-model="value"
      @keyup="keyUpHandler"
      @blur="blurHandler"
      @focus="focusHandler"
      @mouseover="mouseOverHandler"
      @mouseleave="mouseLeaveHandler"
    />
    <div
      :class="[
        'input__message',
        {'input__message_show': isErrorShow}
       ]"
      v-if="'' !== message"
    >{{ message }}</div>
  </div>
</template>




