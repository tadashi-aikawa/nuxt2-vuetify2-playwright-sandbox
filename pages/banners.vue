<script setup lang="ts">
import Refer from "~/components/refer.vue";
import { ref } from "vue";

const isClicked = ref(false);
const reconnected = ref(false);
</script>

<template>
  <v-container>
    <v-banner single-line @click:icon="isClicked = true" data-testid="banner">
      <template v-slot:icon>
        <v-icon slot="icon" color="warning" size="36" data-testid="icon">
          mdi-wifi-strength-alert-outline
        </v-icon>
      </template>
      <div>インターネットにつながっていません</div>
      <div v-if="isClicked">アイコンをクリックしました</div>
      <div v-if="reconnected">再接続を試みました</div>

      <template v-slot:actions>
        <v-btn color="primary" text @click="reconnected = true"> 再接続 </v-btn>
      </template>
    </v-banner>
    <refer component-name="banners" />
  </v-container>
</template>
