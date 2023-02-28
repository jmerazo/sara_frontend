<template>
    <head>
        <title>{{ title }}</title>
    </head>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: "TitleLink",
  props: {
    title: {
      type: String,
      required: true,
    }
  },
});
</script>