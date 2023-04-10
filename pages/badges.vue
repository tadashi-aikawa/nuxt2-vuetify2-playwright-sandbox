<script setup lang="ts">
import CardWrapper from "~/components/card-wrapper.vue";
</script>

<template>
  <card-wrapper component-name="badges">
    <v-badge bordered :content="6" data-testid="badge">
      <v-btn>Unread messages</v-btn>
    </v-badge>
  </card-wrapper>
</template>
