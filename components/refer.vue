<script setup lang="ts">
import { computed } from "vue";

interface Props {
  componentName: string;
}
const props = defineProps<Props>();
const url = computed(
  () => `https://v2.vuetifyjs.com/ja/components/${props.componentName}/`
);
</script>

<template>
  <v-footer padless class="mt-5">
    <v-col class="text-center" cols="12">
      <a :href="url" target="_blank">{{ url }}</a>
    </v-col>
  </v-footer>
</template>
