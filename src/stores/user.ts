import { defineStore } from 'pinia'

// export const useUserStore = defineStore('user', {
export default defineStore('user', {
   state: () => ({
      email: 'kevinnm@gmail.com',
      first: 'kevin',
      last: 'song',
   }),
   actions: {
   },
})
