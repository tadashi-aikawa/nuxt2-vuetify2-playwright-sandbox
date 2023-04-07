<script setup lang="ts">
import Refer from "~/components/refer.vue";
</script>

<template>
  <v-container>
    <v-alert outlined type="error"> これはエラーです </v-alert>
    <refer component-name="alerts" />
  </v-container>
</template>
