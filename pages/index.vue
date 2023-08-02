<script setup lang="ts">
import { useGtag } from "~/composable/gtag";

const urlBase = `https://github.com/tadashi-aikawa/nuxt2-vuetify2-playwright-sandbox/blob/main`;

const pageUrl = `${urlBase}/tests/page.ts`;
const envUrl = `${urlBase}/tests/env.ts`;
const utilsUrl = `${urlBase}/tests/utils.ts`;

const { recordEvent } = useGtag();

const items = [
  { url: pageUrl, path: "tests/page.ts", description: "Pageのベースクラス" },
  { url: envUrl, path: "tests/env.ts", description: "環境変数の管理クラス" },
  {
    url: utilsUrl,
    path: "tests/utils.ts",
    description: "ユーティリティークラス",
  },
];
</script>

<template>
  <v-container>
    <v-row>
      <v-col :key="item.path" v-for="item in items" cols="4">
        <v-card
          width="400px"
          class="d-flex justify-center align-center flex-column"
        >
          <v-card-title style="color: blue">
            <v-icon color="blue"> mdi-language-typescript </v-icon>
            {{ item.path }}
          </v-card-title>

          <v-card-subtitle>
            {{ item.description }}
          </v-card-subtitle>

          <v-card-actions>
            <a :href="item.url" target="_blank" class="button-link">
              <v-btn
                class="ma-2"
                depressed
                small
                @click="
                  recordEvent('show_github_source', {
                    component: item.path,
                    fileKind: 'util',
                  })
                "
              >
                <v-icon color="gray"> mdi-github </v-icon>
                GitHubで開く
              </v-btn>
            </a>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
