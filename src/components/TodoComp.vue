<template>
   <v-sheet>todo</v-sheet>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useTodoStore } from '@/stores/todo'
const todoStore = useTodoStore()
const todos = computed(() => todoStore.todos);

</script>

