export const formatRupiah = (price: number) => {
  const rupiah = price.toLocaleString('id-ID')
  return rupiah
}