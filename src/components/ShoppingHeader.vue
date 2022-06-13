<script setup>
import { ref } from "vue";
import Button from "./Button.vue";
import { store } from "../store.js";

const props = defineProps({
    title: String,
});

const title = ref(props.title);

const editing = ref(store.editing);

const doEdit = () => {
    editing.value = !editing.value;
    store.editing = editing.value;

    console.log(store.editing)
};


</script>

<template>

    <h1>{{ title }}</h1>

    <Button v-if="editing" title="Cancel" button-style="btn" @click="doEdit" />
    <Button v-else title="Add Item" button-style="btn btn-primary" @click="doEdit" />

    <!-- <button v-if="editing" class="btn" @click="doEdit(false)">
    Cancel
    </button>
    <button v-else class="btn btn-primary" @click="doEdit(true)">
    Add Item
    </button> -->
</template>