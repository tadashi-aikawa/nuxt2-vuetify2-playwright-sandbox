<script setup lang="ts">
import Refer from "~/components/refer.vue";
import { reactive, ref } from "vue";

const checked = reactive({
  leftUp: false,
  leftDown: false,
  centerUp: false,
  centerDown: false,
  rightUp: false,
  rightDown: false,
});
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="4" md="4">
        <v-checkbox v-model="checked.leftUp" label="左上"></v-checkbox>
        <v-checkbox v-model="checked.leftDown" label="左下"></v-checkbox>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-checkbox v-model="checked.centerUp" label="中央上"></v-checkbox
        ><v-checkbox v-model="checked.centerDown" label="中央下"></v-checkbox>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-checkbox v-model="checked.rightUp" label="右上"></v-checkbox>
        <v-checkbox v-model="checked.rightDown" label="右下"></v-checkbox>
      </v-col>
    </v-row>

    <refer component-name="checkboxes" />
  </v-container>
</template>
