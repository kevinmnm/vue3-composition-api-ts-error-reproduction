import { defineStore } from 'pinia'

interface TodoItem {
   id: number;
   text: string;
   done: boolean;
}

type TodoItems = Array<TodoItem>;

export const useTodoStore = defineStore('todo', {
   state: () => ({
      todos: [
         { id: 1, text: 'Buy milk', done: false },
         { id: 2, text: 'Buy eggs', done: false },
         { id: 3, text: 'Buy bread', done: false },
         { id: 4, text: 'Study', done: true },
         { id: 5, text: 'Sleep', done: true },
      ] as TodoItems,
   }),

   getters: {
      finishedTodos(state) {
         const todos: TodoItems = state.todos;
         const finished = todos.filter((todo) => todo.done);
         return finished;
      },
      unfinishedTodos(state) {
         const todos: TodoItems = state.todos;
         const unfinished = todos.filter((todo) => !todo.done);
         return unfinished;
      },
   },
});