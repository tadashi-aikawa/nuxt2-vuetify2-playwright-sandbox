<script setup lang="ts">
import { ref } from "vue";
import CardWrapper from "~/components/card-wrapper.vue";

const chip = ref(true);
</script>

<template>
  <card-wrapper component-name="chips">
    <v-chip
      data-testid="chip"
      v-if="chip"
      class="ma-2"
      close
      @click:close="chip = false"
    >
      Closable
    </v-chip>
  </card-wrapper>
</template>
