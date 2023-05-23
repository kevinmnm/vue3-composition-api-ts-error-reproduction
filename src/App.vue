<template>
   <v-app>
      <v-main>
         <!-- <HelloWorld /> -->
         <TodoComp />
      </v-main>
   </v-app>
</template>
 
<script lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import TodoComp from './components/TodoComp.vue';
import { mapStores, mapState } from 'pinia'
// import { useCounterStore } from '@/stores/counter'
// import stores from '@/stores'
import userStore from '@/stores/user';
// const { user, counter } = stores;

export default {
   name: 'App',
   components: {
      // HelloWorld,
      TodoComp,
   },

   computed: {
      // ...mapStores(...Object.values(stores)),
      // ...mapStores(user, counter),
      // ...mapStores(userStore),
      // ...mapState(user, ['email']),
   },

   mounted() {
      // console.log(this.userStore.email)
   }
}
</script>
 