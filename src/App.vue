<template>
   <v-app>
      <v-main>
         <HelloWorld />
      </v-main>
   </v-app>
</template>
 
<script lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'

export default {
   name: 'App',
   components: {
      HelloWorld
   },
   mounted() {
      console.log(this.$store.state)
   }
}
</script>
 