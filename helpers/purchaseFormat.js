export default function purchaseFormat(qty, type){
  if(type !== 'monto'){
    return qty == 1 ? `${qty} ${type.slice(0,-1)}` : `${qty} ${type}`
  } else {
    return `$${new Intl.NumberFormat('de-DE').format(qty)}`
  }
}