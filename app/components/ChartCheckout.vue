<script setup lang="ts">
import { checkoutData } from "~/lib/constanta";

const statusData = checkoutData.reduce((acc, item) => {
  acc[item.status] = (acc[item.status] || 0) + 1;
  return acc;
}, {} as Record<string, number>);

const getStatusArray = () => {
  const count = statusData;
  return [
    count["pending"] ?? 0,
    count["delivery"] ?? 0,
    count["success"] ?? 0,
    count["cancel"] ?? 0,
  ];
};

const setChartData = () => {
  return {
    labels: ["Pending", "Delivery", "Success", "Cancel"],
    datasets: [
      {
        label: "Status",
        data: getStatusArray(),
        backgroundColor: [
          "#b38f6f",
          "#1f4d36",
          "#123c69",
          "#710014",
        ],
        borderColor: [
          "#b38f6f",
          "#1f4d36",
          "#123c69",
          "#710014",
        ],
        borderWidth: 1,
      },
    ],
  };
};
const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue("--p-text-color");
  const textColorSecondary = documentStyle.getPropertyValue(
    "--p-text-muted-color"
  );
  const surfaceBorder = documentStyle.getPropertyValue(
    "--p-content-border-color"
  );

  return {
    plugins: {
      legend: {
        labels: {
          color: textColor,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
        },
      },
    },
  };
};
</script>
<template>
  <div class="w-full lg:w-2xl bg-zinc-900 p-4">
    <Chart
      type="bar"
      :data="setChartData()"
      :options="setChartOptions()"
      class="w-full"
    />
  </div>
</template>
