<!--<script lang="ts" src="./main.ts"></script>-->
<script lang="ts">
import {defineComponent, ref, Ref} from "vue";

export default defineComponent({
  name: "Main",
  setup() {
    const one: Ref<number> = ref(1);

    return {
      one
    }
  }
})
</script>

<template>
  <div class="message">{{ one }}</div>
</template>
