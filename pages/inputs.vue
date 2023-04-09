<script setup lang="ts">
import Refer from "~/components/refer.vue";
import { ref } from "vue";

const value = ref("");

const rules = [
  (v: string) => !!v || "必須です",
  (v: string) => v.length <= 20 || "20文字を越えています",
];
</script>

<template>
  <v-container>
    <v-text-field
      v-model="value"
      :rules="rules"
      data-testid="input"
    ></v-text-field>

    <refer component-name="inputs" />
  </v-container>
</template>
