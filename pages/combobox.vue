<script setup lang="ts">
import Refer from "~/components/refer.vue";
import { reactive } from "vue";

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
  <v-container>
    <v-row>
      <v-combobox
        v-model="selected.single"
        :items="items"
        label="単一選択"
      ></v-combobox>
    </v-row>

    <v-row>
      <v-combobox
        v-model="selected.multiple"
        :items="items"
        label="複数選択"
        multiple
      ></v-combobox>
    </v-row>

    <refer component-name="combobox" />
  </v-container>
</template>
