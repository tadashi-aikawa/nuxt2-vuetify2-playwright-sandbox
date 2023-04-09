<script setup lang="ts">
import Refer from "~/components/refer.vue";
import { ref } from "vue";

const value = ref(2);
</script>

<template>
  <v-container>
    <v-bottom-navigation
      v-model="value"
      color="primary"
      data-testid="bottom-navigation"
    >
      <v-btn>
        <span>はずれ</span>
        <v-icon>mdi-history</v-icon>
      </v-btn>
      <v-btn>
        <span>あたり</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn>
        <span>はずれ</span>
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-bottom-navigation>

    <div>
      選択したindex: <span data-testid="selected-index">{{ value }}</span>
    </div>

    <refer component-name="bottom-navigation" />
  </v-container>
</template>
