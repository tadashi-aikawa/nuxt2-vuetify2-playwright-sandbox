<script setup lang="ts">
import { ref } from "vue";
import CardWrapper from "~/components/card-wrapper.vue";

const current = ref("two");
</script>

<template>
  <card-wrapper component-name="radio-buttons">
    <v-radio-group v-model="current">
      <v-radio label="ボタン1" value="one"></v-radio>
      <v-radio label="ボタン2" value="two"></v-radio>
      <v-radio label="ボタン3" value="three"></v-radio>
    </v-radio-group>
  </card-wrapper>
</template>
