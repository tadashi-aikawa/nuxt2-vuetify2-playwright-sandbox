<script setup lang="ts">
import Refer from "~/components/refer.vue";

interface Props {
  componentName: string;
}
const props = defineProps<Props>();
</script>

<template>
  <v-card>
    <v-card-text class="pa-10">
      <slot></slot>
    </v-card-text>
    <v-divider></v-divider>
    <refer :component-name="componentName" />
  </v-card>
</template>
