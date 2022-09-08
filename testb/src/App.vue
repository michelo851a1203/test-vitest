<script setup lang="ts">
import { indexStore } from './store';
const {
  testApiHandler
} = indexStore();

const clickListener = async () => {
  await testApiHandler();
}
</script>

<template>
  <button
    @click="clickListener"
    class="px-3 py-2 rounded-xl bg-blue-400 hover:bg-blue-800 border-none"
  >Button</button>
</template>

<style scoped></style>
