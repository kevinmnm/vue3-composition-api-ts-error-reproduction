import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
// export default defineStore('counter', {
   state: () => ({
      count: 0,
      name: 'Eduardo'
   }),
   getters: {
      doubleCount: (state) => state.count * 2,
   },
   actions: {
      increment() {
         this.count++
      },
   },
})

