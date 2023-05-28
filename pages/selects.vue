<script setup lang="ts">
import { reactive } from "vue";
import CardWrapper from "~/components/card-wrapper.vue";

const selected = reactive({
  singleText: "first",
  multipleText: [],
  singleChips: "first",
  multipleChips: [],
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
  <card-wrapper component-name="selects">
    <v-row>
      <v-col sm="2">
        <v-select
          v-model="selected.singleText"
          :items="items"
          label="単一選択text"
        ></v-select>
      </v-col>
    </v-row>

    <v-row>
      <v-col sm="3">
        <v-select
          v-model="selected.multipleText"
          :items="items"
          label="複数選択text"
          multiple
        ></v-select>
      </v-col>
    </v-row>

    <v-row>
      <v-col sm="2">
        <v-select
          v-model="selected.singleChips"
          :items="items"
          label="単一選択chips"
          chips
        ></v-select>
      </v-col>
    </v-row>

    <v-row>
      <v-col sm="3">
        <v-select
          v-model="selected.multipleChips"
          :items="items"
          label="複数選択chips"
          multiple
          chips
        ></v-select>
      </v-col>
    </v-row>
  </card-wrapper>
</template>
