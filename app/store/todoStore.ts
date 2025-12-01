import { defineStore } from "pinia";

type Todo = {
    id: number;
    text: string;
    done: boolean
  }

type TodoState = {
  todos: Todo[];
};

export const useTodoStore = defineStore("todo", {
  state: (): TodoState => ({
    todos: [],
  }),
  getters: {
    todoList(): Todo[] {
      return this.todos.filter(t => !t.done)
    },
    completedList(): Todo[] {
      return this.todos.filter(t => t.done)
    },
    todoLength(): number {
      return this.todoList.length;
    },
    completedLength(): number {
      return this.completedList.length;
    },

  },
  actions: {
    addTodo(list: Todo) {
      this.todos.unshift(list);
    },
    deleteTodo(list: Todo) {
      this.todos = this.todos.filter((item) => item.id !== list.id);
    },
    clearTodo(){
        this.todos = []
    },
    toggleDone(list: Todo){
      const todo = this.todos.find((t) => t.id === list.id)
      if(!todo) return
      todo.done = !todo.done
    }
  },
});
