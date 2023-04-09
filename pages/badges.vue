<script setup lang="ts">
import Refer from "~/components/refer.vue";
</script>

<template>
  <v-container>
    <v-badge bordered :content="6" data-testid="badge">
      <v-btn>Unread messages</v-btn>
    </v-badge>
    <refer component-name="badges" />
  </v-container>
</template>
