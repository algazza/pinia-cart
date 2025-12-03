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
  <div>
    <h1 class="font-bold mb-4 text-3xl">Table</h1>
    <DataTable
      paginator
      :rows="5"
      :rowsPerPageOptions="[5, 10, 20]"
      :value="data"
      size="large"
      class="w-2xl"
    >
      <Column field="order_id" header="Order ID"></Column>
      <Column field="name" header="Name"></Column>
      <Column field="status" header="Status">
        <template #body="slotProps">
          <span
            class="capitalize font-semibold px-3 py-1 rounded-2xl "
            :class="
              slotProps.data.status === 'pending'
                ? 'bg-[#b38f6f]'
                : slotProps.data.status === 'delivery'
                ? 'bg-[#1f4d36]'
                : slotProps.data.status === 'success'
                ? 'bg-[#123c69]'
                : 'bg-[#710014]'
            "
          >
            {{ slotProps.data.status }}
          </span>
        </template>
      </Column>
      <Column field="type" header="Type">
        <template #body="slotProps">
          <span
            class="px-3 py-1 rounded-2xl capitalize"
            :class="
              slotProps.data.type === 'delivery'
                ? 'bg-white text-black'
                : 'border border-white'
            "
            >{{ slotProps.data.type }}</span
          >
        </template>
      </Column>
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
</template>
