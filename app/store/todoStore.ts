import { defineStore } from "pinia";

type TodoState = {
  todo: string[];
  completed: string[];
};

export const useTodoStore = defineStore("todo", {
  state: (): TodoState => ({
    todo: [],
    completed: [],
  }),
  getters: {
    todoLength(): number {
      return this.todo.length;
    },
    completedTodoLength(): number {
      return this.completed.length;
    },
  },
  actions: {
    addTodo(list: string) {
      this.todo.unshift(list);
    },
    deleteTodo(list: string) {
      this.todo = this.todo.filter((item) => item !== list);
    },
    clearTodo(){
        this.todo = []
    },
    completedTodo(list: string) {
      this.completed.unshift(list);
      this.todo = this.todo.filter((item) => item !== list);
    },
    unCompletedTodo(list: string) {
      this.todo.push(list);
      this.completed = this.completed.filter((item) => item !== list);
    },
  },
});
