<script setup>
import { ref } from "vue";
import ItemForm from './ItemForm.vue';
import List from './List.vue';
import ShoppingHeader from "./ShoppingHeader.vue";


</script>

<template>
    <ShoppingHeader title="Shopping List"/>
    <ItemForm />
    <List />

</template>