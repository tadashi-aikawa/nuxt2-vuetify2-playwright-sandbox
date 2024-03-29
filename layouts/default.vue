<script setup lang="ts">
import { reactive } from "vue";

const ITEMS: Item[] = [
  { icon: "mdi-apps", title: "Top", to: "/" },
  { icon: "mdi-alert", title: "Alerts", to: "/alerts" },
  {
    icon: "mdi-application",
    title: "AppBars",
    to: "/app-bars",
  },
  {
    icon: "mdi-alphabetical-variant",
    title: "Autocompletes",
    to: "/autocompletes",
  },
  { icon: "mdi-square-rounded-badge-outline", title: "Badges", to: "/badges" },
  {
    icon: "mdi-toaster-oven",
    title: "Banners",
    to: "/banners",
  },
  {
    icon: "mdi-dock-bottom",
    title: "BottomNavigation",
    to: "/bottom-navigation",
  },
  {
    icon: "mdi-dock-bottom",
    title: "BottomSheets",
    to: "/bottom-sheets",
  },
  {
    icon: "mdi-button-cursor",
    title: "Buttons",
    to: "/buttons",
  },
  {
    icon: "mdi-checkbox-outline",
    title: "Checkboxes",
    to: "/checkboxes",
  },
  {
    icon: "mdi-circle-outline",
    title: "Chips",
    to: "/chips",
  },
  {
    icon: "mdi-form-dropdown",
    title: "Combobox",
    to: "/combobox",
  },
  {
    icon: "mdi-table-large",
    title: "Data tables",
    to: "/data-tables",
  },
  {
    icon: "mdi-file-upload-outline",
    title: "File inputs",
    to: "/file-inputs",
  },
  {
    icon: "mdi-form-textbox",
    title: "Inputs",
    to: "/inputs",
  },
  {
    icon: "mdi-radiobox-marked",
    title: "RadioButtons",
    to: "/radio-buttons",
  },
  {
    icon: "mdi-form-select",
    title: "Selects",
    to: "/selects",
  },
  {
    icon: "mdi-tab",
    title: "Tabs",
    to: "/tabs",
  },
  {
    icon: "mdi-form-textarea",
    title: "Textareas",
    to: "/textareas",
  },
];

interface State {
  drawer: boolean;
  mini: boolean;
  title: string;
}

interface Item {
  icon: string;
  title: string;
  to: string;
}

const state = reactive<State>({
  drawer: true,
  mini: false,
  title: "Nuxt2 Vue2 Playwright Sandbox",
});
</script>

<template>
  <v-app>
    <v-app-bar app clipped-left dense elevation="0" dark color="green">
      <v-app-bar-nav-icon
        @click="state.mini = !state.mini"
      ></v-app-bar-nav-icon>

      <v-toolbar-title>nuxt2-vuetify2-playwright-sandbox</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer
      clipped
      v-model="state.drawer"
      :mini-variant.sync="state.mini"
      app
      absolute
      style="min-width: 60px"
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in ITEMS"
          :key="i"
          :to="item.to"
          router
          exact
          @click.stop.prevent
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
        <v-col cols="8">
          <Nuxt />
        </v-col>
      </v-container>
    </v-main>
  </v-app>
</template>
