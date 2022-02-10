export default function purchaseFormat(qty, type, calc = false){
  if(type !== 'monto' && type !== 'kilos'){
    return qty == 1 ? `${qty} ${type.slice(0,-1)}` : `${qty} ${type}`
  } else if(type == 'kilos'){
    const qtyKg = calc ? qty : qty/1000
    return qtyKg == 1 ? `${qtyKg} ${type.slice(0,-1)}` : `${qtyKg} ${type}`
  } else {
    return `$${new Intl.NumberFormat('de-DE').format(qty)}`
  }
}