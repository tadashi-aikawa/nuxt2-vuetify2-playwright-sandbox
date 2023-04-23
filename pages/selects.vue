<script setup lang="ts">
import { reactive } from "vue";
import CardWrapper from "~/components/card-wrapper.vue";

const selected = reactive({
  single: "first",
  multiple: [],
});

const items = [
  "first",
  "second",
  "third",
  "fourth",
  "fifth",
  "sixth",
  "seventh",
  "eighth",
  "ninth",
  "ten",
  "eleven",
  "twelve",
];
</script>

<template>
  <card-wrapper component-name="combobox">
    <v-row>
      <v-select
        v-model="selected.single"
        :items="items"
        label="単一選択"
      ></v-select>
    </v-row>

    <v-row>
      <v-select
        v-model="selected.multiple"
        :items="items"
        label="複数選択"
        multiple
      ></v-select>
    </v-row>
  </card-wrapper>
</template>
