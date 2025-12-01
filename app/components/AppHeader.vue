<script setup lang="ts">
const value = ref("");
</script>
<template>
  <header
    class="py-4 flex flex-col justify-center items-center gap-4 text-center bg-neutral-800"
  >
    <h1 class="text-2xl font-bold">To Do List</h1>
    <form class="flex gap-2">
      <FloatLabel variant="on" class=" p-2 border border-white rounded-full flex! gap-2!">
        <InputText v-model="value" class="bg-transparent! focus:outline-0! border-0!"/>
        <label class="ml-2 bg-neutral-800!">Type new task...</label>
        <Button icon="pi pi-plus" type="submit" class="rounded-full! font-semibold" style="font-size: 1rem"/>
      </FloatLabel>
    </form>
  </header>
</template>
