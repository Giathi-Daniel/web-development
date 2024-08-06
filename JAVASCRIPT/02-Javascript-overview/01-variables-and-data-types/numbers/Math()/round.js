// Challenge:
// Round the price in the button down to two decimal places.
// Don't know which method to use? Google it!

const totalPrice = 420.69235632455
const btn = document.getElementById("purchase-btn")
// btn.textContent = `Buy €${ roundedPrice.toFixed(2) }`

// METHOD 1
// const roundedPrice = Math.floor(totalPrice * 100 ) / 100
// console.log(roundedPrice)


// METHOD 2
const roundedPrice = Math.round(totalPrice * 100) / 100
console.log(roundedPrice)
btn.textContent = `Buy €${ roundedPrice }`
