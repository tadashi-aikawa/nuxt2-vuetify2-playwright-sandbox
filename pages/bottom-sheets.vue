<script setup lang="ts">
import { ref } from "vue";
import CardWrapper from "~/components/card-wrapper.vue";

const sheet = ref(false);
</script>

<template>
  <card-wrapper component-name="bottom-sheets">
    <v-bottom-sheet v-model="sheet" inset>
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on">ボトムシートを開く</v-btn>
      </template>

      <!-- v-bottom-sheetではなく中身にdata-testidをつけるのがポイント -->
      <v-sheet class="text-center" height="200px" data-testid="bottom-sheet">
        <v-btn class="mt-6" text color="error" @click="sheet = !sheet">
          閉じる
        </v-btn>
        <div class="my-3" data-testid="bottom-sheet-content">
          ボトムシートです
        </div>
      </v-sheet>
    </v-bottom-sheet>
  </card-wrapper>
</template>
