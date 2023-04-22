<script setup lang="ts">
import CardWrapper from "~/components/card-wrapper.vue";
import { ref } from "vue";

const clicked = ref(false);
</script>

<template>
  <card-wrapper component-name="buttons">
    <v-btn @click="clicked = true" :disabled="clicked">
      押すと無効になる
    </v-btn>
  </card-wrapper>
</template>
