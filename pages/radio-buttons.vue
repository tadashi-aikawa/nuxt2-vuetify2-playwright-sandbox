<script setup lang="ts">
import Refer from "~/components/refer.vue";
import { ref } from "vue";

const current = ref("two");
</script>

<template>
  <v-container>
    <v-radio-group v-model="current">
      <v-radio label="ボタン1" value="one"></v-radio>
      <v-radio label="ボタン2" value="two"></v-radio>
      <v-radio label="ボタン3" value="three"></v-radio>
    </v-radio-group>

    <refer component-name="radio-buttons" />
  </v-container>
</template>
