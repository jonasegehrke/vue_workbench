<script setup>
import Button from "./Button.vue";
import { ref, reactive, watch } from "vue";
import { store } from "../store.js";

const newItem = ref("");

console.log(store.items)
const addItem = () => {

    store.items.push({
        id: store.items.length,
        label: newItem.value,
    });
    newItem.value = "";
}

const editing = reactive(store.editing);

console.log(editing)

</script>

<template>
  <form v-if="editing" class="add-item-form" @submit.prevent>
    <input type="text" v-model="newItem" />
    <Button @click="addItem" title="Add Item" buttonStyle="btn btn-primary" />
  </form>
</template>
