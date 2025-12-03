export type CheckoutTable = {
    order_id: number
    name: string
    status: string
    type: string
    amount: number
} 

export const checkoutData: CheckoutTable[] = [
  {
    order_id: 1001,
    name: "Rifqi Nabil",
    status: "pending",
    type: "delivery",
    amount: 150000,
  },
  {
    order_id: 1002,
    name: "Wahid Kurnia",
    status: "delivery",
    type: "delivery",
    amount: 275000,
  },
  {
    order_id: 1003,
    name: "Nathan Pradana",
    status: "cancel",
    type: "pickup",
    amount: 98000,
  },
  {
    order_id: 1004,
    name: "Maheswara Putra",
    status: "success",
    type: "pickup",
    amount: 320000,
  },
  {
    order_id: 1005,
    name: "Aisyah Ramadhani",
    status: "pending",
    type: "delivery",
    amount: 187500,
  },
  {
    order_id: 1006,
    name: "Budi Santoso",
    status: "success",
    type: "delivery",
    amount: 420000,
  },
  {
    order_id: 1007,
    name: "Ratna Sari",
    status: "cancel",
    type: "pickup",
    amount: 67000,
  },
  {
    order_id: 1008,
    name: "Hendra Wijaya",
    status: "delivery",
    type: "delivery",
    amount: 258000,
  },
  {
    order_id: 1009,
    name: "Indah Permata",
    status: "pending",
    type: "pickup",
    amount: 134000,
  },
  {
    order_id: 1010,
    name: "Rama Saputra",
    status: "success",
    type: "delivery",
    amount: 365000,
  },
];