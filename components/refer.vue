<script setup lang="ts">
import { computed } from "vue";
import { useGtag } from "~/composable/gtag";

interface Props {
  componentName: string;
}
const props = defineProps<Props>();

const { recordEvent } = useGtag();

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
      <v-btn
        color="green"
        class="ma-2 white--text"
        text
        small
        @click="
          recordEvent('show_github_source', {
            component: componentName,
            fileKind: 'vue',
          })
        "
      >
        Vueファイル
        <v-icon right> mdi-vuejs </v-icon>
      </v-btn>
    </a>
    <a :href="specUrl" target="_blank" class="button-link">
      <v-btn
        color="red"
        class="ma-2 white--text"
        text
        small
        @click="
          recordEvent('show_github_source', {
            component: componentName,
            fileKind: 'test',
          })
        "
      >
        テストコード
        <v-icon right> mdi-drama-masks </v-icon>
      </v-btn>
    </a>
    <a :href="helperUrl" target="_blank" class="button-link">
      <v-btn
        color="blue"
        class="ma-2 white--text"
        text
        small
        @click="
          recordEvent('show_github_source', {
            component: componentName,
            fileKind: 'test-helper',
          })
        "
      >
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

<style>
/* */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-track {
  border-radius: 10px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
}

::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 50, 0.5);
  border-radius: 10px;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.3);
}
</style>
