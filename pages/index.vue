<script setup lang="ts">
import { getCurrentInstance, onMounted, reactive } from "vue";

interface State {
  pagesCode: string;
  envCode: string;
  utilsCode: string;
  tabs: any;
}

const state = reactive<State>({
  pagesCode: "",
  envCode: "",
  utilsCode: "",
  tabs: null,
});

const root = getCurrentInstance()!.proxy!;

onMounted(async () => {
  const rawUrlBase = `https://raw.githubusercontent.com/tadashi-aikawa/nuxt2-vuetify2-playwright-sandbox/main`;
  const [pageCode, envCode, utilsCode] = await Promise.all([
    root.$axios.$get(`${rawUrlBase}/tests/page.ts`),
    root.$axios.$get(`${rawUrlBase}/tests/env.ts`),
    root.$axios.$get(`${rawUrlBase}/tests/utils.ts`),
  ]);

  state.pagesCode = pageCode;
  state.envCode = envCode;
  state.utilsCode = utilsCode;
});
</script>

<template>
  <v-container fluid>
    <v-card class="pa-5">
      <v-tabs v-model="state.tabs" centered class="pt-3">
        <v-tab href="#pages">
          <v-icon left> mdi-language-typescript </v-icon> ~/tests/pages.ts
        </v-tab>
        <v-tab href="#env">
          <v-icon left> mdi-language-typescript </v-icon> ~/tests/env.ts
        </v-tab>
        <v-tab href="#utils">
          <v-icon left> mdi-language-typescript </v-icon> ~/tests/utils.ts
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="state.tabs" class="tab-items">
        <v-tab-item value="pages">
          <highlight-code
            :content="state.pagesCode"
            language="typescript"
            max-height="calc(100vh - 270px)"
          />
        </v-tab-item>
        <v-tab-item value="env">
          <highlight-code
            :content="state.envCode"
            language="typescript"
            max-height="calc(100vh - 270px)"
          />
        </v-tab-item>
        <v-tab-item value="utils">
          <highlight-code
            :content="state.utilsCode"
            language="typescript"
            max-height="calc(100vh - 270px)"
          />
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-container>
</template>

<style scoped>
.v-tabs .v-tab {
  text-transform: none !important;
}
</style>
