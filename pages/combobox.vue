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
  <card-wrapper component-name="combobox">
    <v-row>
      <v-col sm="2">
        <v-combobox
          v-model="selected.singleText"
          :items="items"
          label="単一選択text"
        ></v-combobox>
      </v-col>
    </v-row>

    <v-row>
      <v-col sm="3">
        <v-combobox
          v-model="selected.multipleText"
          :items="items"
          label="複数選択text"
          multiple
        ></v-combobox>
      </v-col>
    </v-row>

    <v-row>
      <v-col sm="2">
        <v-combobox
          v-model="selected.singleChips"
          :items="items"
          label="単一選択chips"
          chips
        ></v-combobox>
      </v-col>
    </v-row>

    <v-row>
      <v-col sm="3">
        <v-combobox
          v-model="selected.multipleChips"
          :items="items"
          label="複数選択chips"
          chips
          multiple
        ></v-combobox>
      </v-col>
    </v-row>
  </card-wrapper>
</template>
