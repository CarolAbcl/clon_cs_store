// funcion que le da formato a los montos
const priceFormat = (amount) => {
  const format = '$' + new Intl.NumberFormat('de-DE').format(amount)
  return format
}

export default priceFormat
