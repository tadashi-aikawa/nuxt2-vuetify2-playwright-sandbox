<script setup lang="ts">
import { ref } from "vue";
import CardWrapper from "~/components/card-wrapper.vue";

const value = ref(2);
</script>

<template>
  <card-wrapper component-name="bottom-navigation">
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

    <div class="d-flex justify-center pa-3">
      選択したindex: <span data-testid="selected-index">{{ value }}</span>
    </div>
  </card-wrapper>
</template>
