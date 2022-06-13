<script setup>
import { ref } from "vue";
import { store } from "../store.js";

const items = ref(store.items);

</script>

<template>
  <ul>
    <li
      v-for="(item, i) in items"
      :key="item.id"
    >
      {{ item.label }}
    </li>
  </ul>

</template>
