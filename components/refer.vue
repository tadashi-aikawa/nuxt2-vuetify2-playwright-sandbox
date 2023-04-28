<script setup lang="ts">
import { computed, getCurrentInstance, onMounted, reactive } from "vue";
import HighlightCode from "~/components/highlight-code.vue";

interface Props {
  componentName: string;
}
const props = defineProps<Props>();

interface State {
  pageCode: string;
  helperCode: string;
  specCode: string;
  tabs: any;
}

const state = reactive<State>({
  helperCode: "",
  pageCode: "",
  specCode: "",
  tabs: null,
});

const root = getCurrentInstance()!.proxy!;

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

onMounted(async () => {
  const rawUrlBase = `https://raw.githubusercontent.com/tadashi-aikawa/nuxt2-vuetify2-playwright-sandbox/main`;

  const [pageCode, helperCode, specCode] = await Promise.all([
    root.$axios.$get(`${rawUrlBase}/pages/${props.componentName}.vue`),
    root.$axios.$get(
      `${rawUrlBase}/tests/pages/${props.componentName}.helper.ts`
    ),
    root.$axios.$get(
      `${rawUrlBase}/tests/pages/${props.componentName}.spec.ts`
    ),
  ]);

  state.pageCode = pageCode;
  state.helperCode = helperCode;
  state.specCode = specCode;
});
</script>

<template>
  <div>
    <v-tabs v-model="state.tabs" centered class="pt-3">
      <v-tab href="#spec">
        <v-icon left> mdi-drama-masks </v-icon>
        テストコード
      </v-tab>
      <v-tab href="#helper">
        <v-icon left> mdi-language-typescript </v-icon>
        テストヘルパークラス
      </v-tab>
      <v-tab href="#vue">
        <v-icon left> mdi-vuejs </v-icon>
        Vueファイル
      </v-tab>
      <v-tab href="#vuetify">
        <v-icon left> mdi-vuetify </v-icon>
        Vuetifyドキュメント
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="state.tabs" class="tab-items">
      <v-tab-item value="spec">
        <highlight-code
          :content="state.specCode"
          language="typescript"
          max-height="600px"
        />
      </v-tab-item>
      <v-tab-item value="helper">
        <highlight-code
          :content="state.helperCode"
          language="typescript"
          max-height="600px"
        />
      </v-tab-item>
      <v-tab-item value="vue">
        <highlight-code
          :content="state.pageCode"
          language="typescript"
          max-height="600px"
        />
      </v-tab-item>
      <v-tab-item value="vuetify">
        <iframe :src="vuetifyUrl" style="height: 560px; width: 100%" />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<style scoped>
.button-link {
  text-decoration: none;
  color: inherit;
}

.tab-items {
  font-size: 90%;
  padding: 30px;
  overflow: scroll;
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
