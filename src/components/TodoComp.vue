<template>
   <v-sheet>todo</v-sheet>
</template>

<script setup lang="ts">
import { computed, ref, component } from 'vue'
computed 
ref
import { useTodoStore } from '@/stores/todo'
const todoStore = useTodoStore()
todoStore
component

// const todos = computed(() => todoStore.todos);

</script>

