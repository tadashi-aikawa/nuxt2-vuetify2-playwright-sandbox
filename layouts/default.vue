<script setup lang="ts">
import { reactive } from "vue";

const ITEMS = [
  { icon: "mdi-apps", title: "Top", to: "/" },
  { icon: "mdi-alert", title: "Alerts", to: "/alerts" },
  { icon: "mdi-square-rounded-badge-outline", title: "Badges", to: "/badges" },
  {
    icon: "mdi-toaster-oven",
    title: "Banners",
    to: "/banners",
  },
  {
    icon: "mdi-application",
    title: "AppBars",
    to: "/app-bars",
  },
];

interface State {
  drawer: boolean;
  title: string;
}

interface Item {
  icon: string;
  title: string;
  to: string;
}

const state = reactive<State>({
  drawer: false,
  title: "Nuxt2 Vue2 Playwright Sandbox",
});
</script>

<template>
  <v-app>
    <v-navigation-drawer v-model="state.drawer" app permanent>
      <v-list>
        <v-list-item
          v-for="(item, i) in ITEMS"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>
