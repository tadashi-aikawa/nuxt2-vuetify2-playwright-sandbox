<script setup lang="ts">
import CardWrapper from "~/components/card-wrapper.vue";
</script>

<template>
  <card-wrapper component-name="alerts">
    <v-alert outlined type="error" data-testid="alert">
      これはエラーです
    </v-alert>
  </card-wrapper>
</template>
