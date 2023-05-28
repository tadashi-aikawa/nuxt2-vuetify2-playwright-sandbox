<script setup lang="ts">
import { ref } from "vue";
import CardWrapper from "~/components/card-wrapper.vue";

const tab = ref("one");
const tabItems = [
  { key: "one", name: "ONE", content: "日本語だと一" },
  { key: "two", name: "TWO", content: "日本語だと二" },
  { key: "three", name: "THREE", content: "日本語だと三" },
];
</script>

<template>
  <card-wrapper component-name="tabs">
    <v-tabs v-model="tab">
      <v-tab v-for="item of tabItems" :key="item.key">{{ item.name }}</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item of tabItems" :key="item.key">
        <div :data-testid="`${item.key}-contents`" class="pa-5">
          {{ item.content }}
        </div>
      </v-tab-item>
    </v-tabs-items>
  </card-wrapper>
</template>
