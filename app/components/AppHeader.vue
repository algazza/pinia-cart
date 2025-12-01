<script setup lang="ts">
import { useTodoStore } from "~/store/todoStore";

const todoStore = useTodoStore();
const value = ref<string>("");

const onSubmit = () => {
  const text = value.value.trim();
  if (!text) return;

  todoStore.addTodo(text);
  value.value = "";
};
</script>
<template>
  <header
    class="py-4 flex flex-col justify-center items-center gap-4 text-center bg-neutral-800"
  >
    <h1 class="text-2xl font-bold">To Do List</h1>
    <form @submit.prevent="onSubmit" class="flex gap-2">
      <FloatLabel
        variant="on"
        class="p-2 border border-white rounded-full flex! gap-2!"
      >
        <InputText
          v-model="value"
          class="bg-transparent! focus:outline-0! border-0!"
        />
        <label class="ml-2 bg-neutral-800!">Type new task...</label>
        <Button
          icon="pi pi-plus"
          type="submit"
          class="rounded-full! font-semibold text-3xl"
        />
      </FloatLabel>
    </form>
  </header>
</template>
