<script setup lang="ts">
import { useTodoStore } from '~/store/todoStore';

const todoStore = useTodoStore();
</script>

<template>
  <div class="overflow-hidden">
    <AppHeader />

    <main class="flex justify-center items-center px-6 py-8">
      <section class="max-w-[600px] w-full space-y-10">
        <div v-if="todoStore.todoLength > 0" class="space-y-4">
          <div class="flex justify-between items-end">
            <h1 class="font-bold text-neutral-300 text-2xl">To Do</h1>
            <span class="font-semibold">{{ todoStore.todoLength }} Task</span>
          </div>
          <div
            v-for="td in todoStore.todoList"
            :key="td.id"
            class="flex justify-between items-center bg-neutral-800 p-4 rounded-2xl"
          >
            <div class="flex gap-4 items-center">
              <Checkbox
                :model-value="td.done"
                @update:model-value="todoStore.toggleDone(td)"
                :input-id="String(td.id)"
                binary
              />
              <span class="font-semibold text-lg">{{ td.text }}</span>
            </div>

            <button
              class="h-fit cursor-pointer"
              @click="todoStore.deleteTodo(td)"
            >
              <div class="pi pi-trash text-xl! text-red-500" />
            </button>
          </div>
        </div>

        <div v-if="todoStore.completedLength > 0" class="space-y-4">
          <div class="flex justify-between items-end">
            <h1 class="font-bold text-neutral-300 text-2xl">Complete</h1>
            <span class="font-semibold"
              >{{ todoStore.completedLength }} Task</span
            >
          </div>
          <div
            v-for="td in todoStore.completedList"
            :key="td.id"
            class="flex justify-between items-center bg-neutral-800 p-4 rounded-2xl"
          >
            <div class="flex gap-4 items-center">
              <Checkbox
                :model-value="td.done"
                @update:model-value="todoStore.toggleDone(td)"
                binary
              />
              <span class="text-lg line-through text-gray-400">{{
                td.text 
              }}</span>
            </div>
          </div>
        </div>

        <p v-if="todoStore.todoLength === 0 && todoStore.completedLength === 0" class="text-center text-gray-400 font-semibold">
          Haven't added anything to your to-do list yet.
        </p>
      </section>
    </main>
  </div>
</template>
