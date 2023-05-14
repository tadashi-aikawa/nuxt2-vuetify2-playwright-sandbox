<script setup lang="ts">
import CardWrapper from "~/components/card-wrapper.vue";
import { DataTableHeader } from "vuetify";
import { ref } from "vue";

interface Item {
  id: number;
  name: string;
  favorite?: string[];
}

const searchWord = ref("");

const headers: DataTableHeader[] = [
  { text: "ID", value: "id" },
  { text: "名前", value: "name" },
  { text: "好きなもの", value: "favorite" },
];

const items: Item[] = [
  { id: 1, name: "dog", favorite: ["meat"] },
  { id: 2, name: "cat", favorite: ["kotatsu", "fish"] },
  { id: 3, name: "human" },
];
</script>

<template>
  <card-wrapper component-name="data-tables">
    <v-text-field
      v-model="searchWord"
      append-icon="mdi-magnify"
      label="Search"
      single-line
      hide-details
    ></v-text-field>
    <v-data-table
      :headers="headers"
      :items="items"
      item-key="name"
      :search="searchWord"
    ></v-data-table>
  </card-wrapper>
</template>
