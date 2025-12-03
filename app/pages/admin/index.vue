<script setup lang="ts">
import { utils, writeFileXLSX } from "xlsx";
import { checkoutData } from "~/lib/constanta";
import { formatRupiah } from "~/lib/utils";

const data = ref(checkoutData);
const op = ref<any[]>([]);

const toggle = (event: Event, idx: number) => {
  const pop = op.value[idx];
  if (pop && typeof pop.toggle === "function") {
    pop.toggle(event);
  }
};

const copy = async (id: number, idx: number) => {
  try {
    await navigator.clipboard.writeText(String(id));
    const pop = op.value[idx];
    if (pop && typeof pop.hide === "function") {
      pop.hide();
    } else if (pop && typeof pop.toggle === "function") {
      pop.toggle();
    }
  } catch (err) {
    console.error("Copy failed:", err);
  }
};

const exportFile = () => {
  const ws = utils.json_to_sheet(data.value);
  const wb = utils.book_new();
  utils.book_append_sheet(wb, ws, "Data");
  writeFileXLSX(wb, "SheetJSVueAoO.xlsx");
};
</script>

<template>
  <section class="flex justify-center mt-12 w-full">
    <div>
      <DataTable
        paginator
        :rows="5"
        :rowsPerPageOptions="[5, 10, 20, 50]"
        :value="data"
        size="large"
        class="w-3xl"
      >
        <Column field="order_id" header="Order ID"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="status" header="Status"></Column>
        <Column field="type" header="Type"></Column>
        <Column field="amount" header="Amount">
          <template #body="slotProps">
            Rp{{ formatRupiah(slotProps.data.amount) }}
          </template>
        </Column>
        <Column field="order_id">
          <template #body="slotProps">
            <button
              type="button"
              @click="(e) => toggle(e, slotProps.index)"
              class="pi pi-ellipsis-h cursor-pointer"
            />
            <Popover :ref="(el) => (op[slotProps.index] = el)">
              <div class="grid">
                <button
                  @click="() => copy(slotProps.data.order_id, slotProps.index)"
                  class="cursor-pointer"
                >
                  Copy Order Id
                </button>
                <div class="w-full content-[''] h-px bg-gray-700 my-2" />
                <NuxtLink
                  :to="`/invoice/${slotProps.data.order_id}`"
                  class="cursor-pointer"
                  >View Invoice</NuxtLink
                >
              </div>
            </Popover>
          </template>
        </Column>
      </DataTable>

      <div class="flex justify-end mt-4">
        <Button @click="exportFile" class="rounded-md">Export excel</Button>
      </div>
    </div>
  </section>
</template>
