<script setup lang="ts">
import { computed } from "vue";

interface Props {
  componentName: string;
}
const props = defineProps<Props>();
const vuetifyUrl = computed(
  () => `https://v2.vuetifyjs.com/ja/components/${props.componentName}/`
);

const pageUrl = computed(
  () =>
    `https://github.com/tadashi-aikawa/nuxt2-vuetify2-playwright-sandbox/blob/main/pages/${props.componentName}.vue`
);
const helperUrl = computed(
  () =>
    `https://github.com/tadashi-aikawa/nuxt2-vuetify2-playwright-sandbox/blob/main/tests/pages/${props.componentName}.helper.ts`
);
const specUrl = computed(
  () =>
    `https://github.com/tadashi-aikawa/nuxt2-vuetify2-playwright-sandbox/blob/main/tests/pages/${props.componentName}.spec.ts`
);
</script>

<template>
  <v-card-actions class="d-flex justify-center">
    <a :href="vuetifyUrl" target="_blank" class="button-link">
      <v-btn color="cyan" class="ma-2 white--text" text small>
        Vuetifyドキュメント
        <v-icon right> mdi-vuetify </v-icon>
      </v-btn>
    </a>
    <a :href="pageUrl" target="_blank" class="button-link">
      <v-btn color="green" class="ma-2 white--text" text small>
        Vueファイル
        <v-icon right> mdi-vuejs </v-icon>
      </v-btn>
    </a>
    <a :href="specUrl" target="_blank" class="button-link">
      <v-btn color="red" class="ma-2 white--text" text small>
        テストコード
        <v-icon right> mdi-drama-masks </v-icon>
      </v-btn>
    </a>
    <a :href="helperUrl" target="_blank" class="button-link">
      <v-btn color="blue" class="ma-2 white--text" text small>
        テストヘルパークラス
        <v-icon right> mdi-language-typescript </v-icon>
      </v-btn>
    </a>
  </v-card-actions>
</template>

<style scoped>
.button-link {
  text-decoration: none;
  color: inherit;
}
</style>
