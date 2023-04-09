<script setup lang="ts">
import Refer from "~/components/refer.vue";
import { ref } from "vue";

const clicked = ref(false);
</script>

<template>
  <v-container>
    <v-app-bar data-testid="app-bar">
      <v-app-bar-nav-icon
        @click="clicked = true"
        data-testid="hamburger-menu-button"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>タイトル</v-toolbar-title>
      <v-toolbar-items v-if="clicked">クリック済</v-toolbar-items>
    </v-app-bar>

    <refer component-name="app-bars" />
  </v-container>
</template>
