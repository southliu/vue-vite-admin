<template>
  <div class="flex items-center">
    <div
      v-for="item in arr"
      :key="item"
      class="w-19% h-5px mt-5px mr-1% rounded-10px bg-light-900"
      :class="{
        '!bg-green-400': item <= strength && strength > 3,
        '!bg-yellow-400': item <= strength && strength === 3,
        '!bg-red-400': item <= strength && strength < 3,
      }"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'StrengthBar',
  props: {
    strength: {
      type: Number,
      required: true
    }
  },
  setup() {
    const arr = new Array(5).fill(0).map((item, index) => index + 1)

    return {
      arr
    }
  }
})
</script>
