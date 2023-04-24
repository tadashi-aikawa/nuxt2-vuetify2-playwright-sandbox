<script setup lang="ts">
import CardWrapper from "~/components/card-wrapper.vue";
import { ref } from "vue";

const clicked = ref(false);
</script>

<template>
  <card-wrapper component-name="buttons">
    <div style="display: flex; gap: 10px">
      <v-btn @click="clicked = true" :disabled="clicked">
        押すと無効になる
      </v-btn>
      <v-btn>
        <a href="download.md" download>あるファイルをダウンロード</a>
      </v-btn>
    </div>
  </card-wrapper>
</template>
