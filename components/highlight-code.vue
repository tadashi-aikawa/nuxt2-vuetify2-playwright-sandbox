<script setup lang="ts">
import { computed, defineProps } from "vue";
import Prism from "prismjs";

type Language = "json" | "typescript";

interface Props {
  content: string;
  language: Language;
  maxHeight: string | number;
}
const props = defineProps<Props>();

const highlighted = computed(() =>
  // 色を付ける. 色以外はclassのCSSで指定
  Prism.highlight(
    props.content,
    Prism.languages[props.language],
    props.language
  )
);

const className = computed(() => `language-${props.language}`);
</script>

<template>
  <pre
    v-html="highlighted"
    :class="className"
    :style="{ maxHeight, overflowY: 'scroll' }"
  ></pre>
</template>
