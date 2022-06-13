<script setup>
import { ref } from "vue";

const props = defineProps({
  title: String,
  buttonStyle: String,
});

const className = ref(props.buttonStyle);

</script>

<template>
  <button :class="className" >{{ title }}</button>
</template>
