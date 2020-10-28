/* function calculateItemTotal(item) {
  const updatedTotal = item.price * (1 - item.discount) * item.quantity
  const total = parseInt(updatedTotal * 100) / 100

  return { ...item, total }
}

function calculateTotal(items) {
  return items.map(calculateItemTotal)
} */

function calculateTotal(purchases) {
  purchases.map((element) => {
    let updatedTotal = element.price * (1 - element.discount) * element.quantity

    element.total = parseFloat(updatedTotal.toFixed(2))

    return element
  })

  return purchases
}


module.exports = calculateTotal
