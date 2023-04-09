<script setup lang="ts">
import Refer from "~/components/refer.vue";
import { reactive } from "vue";

const state = reactive({
  iconClicked: false,
  reconnected: false,
});

const handleClickIcon = () => {
  state.iconClicked = true;
};
const handleReconnect = () => {
  state.reconnected = true;
};
</script>

<template>
  <v-container>
    <v-banner single-line @click:icon="handleClickIcon" data-testid="banner">
      <template v-slot:icon>
        <v-icon slot="icon" color="warning" size="36" data-testid="icon">
          mdi-wifi-strength-alert-outline
        </v-icon>
      </template>
      <div>インターネットにつながっていません</div>
      <div v-if="state.iconClicked">アイコンをクリックしました</div>
      <div v-if="state.reconnected">再接続を試みました</div>

      <template v-slot:actions>
        <v-btn color="primary" text @click="handleReconnect"> 再接続 </v-btn>
      </template>
    </v-banner>
    <refer component-name="banners" />
  </v-container>
</template>
