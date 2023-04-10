<script setup lang="ts">
import { ref } from "vue";
import CardWrapper from "~/components/card-wrapper.vue";

const value = ref("");

const rules = [
  (v: string) => !!v || "必須です",
  (v: string) => v.length <= 20 || "20文字を越えています",
];
</script>

<template>
  <card-wrapper component-name="inputs">
    <v-text-field
      v-model="value"
      :rules="rules"
      placeholder="20文字以内で必須"
    ></v-text-field>
  </card-wrapper>
</template>
