<script setup lang="ts">
import { ref } from "vue";
import CardWrapper from "~/components/card-wrapper.vue";

const value = ref("");
const valueSingleLine = ref("");

const rules = [
  (v: string) => !!v || "必須です",
  (v: string) => v.length <= 20 || "20文字を越えています",
];
</script>

<template>
  <card-wrapper component-name="inputs">
    <v-row>
      <v-text-field
        v-model="value"
        :rules="rules"
        placeholder="20文字以内で必須"
      ></v-text-field>
    </v-row>

    <v-row>
      <v-text-field
        data-testid="single-line-text-field"
        v-model="valueSingleLine"
        label="single-lineが有効の場合"
        single-line
      ></v-text-field>
    </v-row>
  </card-wrapper>
</template>
