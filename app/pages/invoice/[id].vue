<script setup lang="ts">
import { checkoutData } from "~/lib/constanta";
import { formatRupiah } from "~/lib/utils";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const route = useRoute();
const printRef = ref(null);

const user = checkoutData.find(
  (item) => item.order_id === Number(route.params.id)
);

const handleDownloadPdf = async () => {
  const element = printRef.value;
  if (!element) return;

  const canvas = await html2canvas(element, {
    useCORS: true,
    backgroundColor: "#fff",
    scale: 2,
  });

  const data = canvas.toDataURL("image/png");

  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "px",
    format: "a4",
  });

  const pdfWidth = pdf.internal.pageSize.getWidth();
  const imgProps = pdf.getImageProperties(data);

  const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

  pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
  pdf.save(`invoice-${user?.order_id}-${user?.name}.pdf`);
};

</script>

<template>
  <section class="flex justify-center items-center h-dvh w-full">
    <div v-if="user" class="p-8 bg-zinc-800 flex flex-col gap-4 items-center">
      <div ref="printRef" class="pdf-area p-8 w-[700px] space-y-4 overflow-hidden">
        <div class="flex justify-between items-center">
          <div>
            <h1 class="text-3xl font-bold">INVOICE</h1>
            <p class="text-gray-400">Order id: {{ user.order_id }}</p>
          </div>
          <div class="text-right">
            <p class="font-bold">Company Name</p>
            <p>Jl. Madukoro 123</p>
            <p>Semarang, Semarang Barat 50112</p>
          </div>
        </div>

        <div>
          <h1 class="text-xl font-bold">Bill to:</h1>
          <p>{{ user.name }}</p>
        </div>

        <DataTable :value="[user]" showGridlines size="large" class="w-full">
          <Column field="product" header="Product"></Column>
          <Column field="price" header="Price"></Column>
          <Column field="quantity" header="Quantity"></Column>
          <Column field="amount" header="Amount">
            <template #body="slotProps">
              Rp{{ formatRupiah(slotProps.data.amount) }}
            </template>
          </Column>
        </DataTable>

        <div class="space-y-1">
          <div class="text-right space-x-20 flex items-center justify-end">
            <h1>Status:</h1>
            <span class="capitalize">{{ user.status }}</span>
          </div>
          <div class="text-right space-x-20 flex items-center justify-end">
            <h1>Delivery Type:</h1>
            <span class="capitalize">{{ user.type }}</span>
          </div>
          <div
            class="text-right space-x-6 flex items-center font-bold text-2xl justify-end"
          >
            <h1>Total:</h1>
            <span>Rp{{ formatRupiah(user.amount) }}</span>
          </div>
        </div>
      </div>
      <Button @click="handleDownloadPdf" class="w-fit font-semibold"
        >Download PDF</Button
      >
    </div>
  </section>
</template>
