<script setup lang="ts">
import { ref } from "vue";
import CardWrapper from "~/components/card-wrapper.vue";

const clicked = ref(false);
</script>

<template>
  <card-wrapper component-name="app-bars">
    <v-app-bar data-testid="app-bar">
      <v-app-bar-nav-icon
        @click="clicked = true"
        data-testid="hamburger-menu-button"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>タイトル</v-toolbar-title>
      <v-toolbar-items v-if="clicked">クリック済</v-toolbar-items>
    </v-app-bar>
  </card-wrapper>
</template>
