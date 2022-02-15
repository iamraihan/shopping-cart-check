// // phone plus event listener
// document.getElementById('phone-plus').addEventListener('click', function () {
//     updateNumber('phone', 1219, true)

// })
// // phone minus event listenr.
// document.getElementById('phone-minus').addEventListener('click', function () {
//     updateNumber('phone', 1219, false)
// })
//case plus eventlistener
// document.getElementById('case-plus').addEventListener('click', function () {
//     updateNumber('case', 59, true)
// })

// // case minius event listener
// document.getElementById('case-minus').addEventListener('click', function () {
//     updateNumber('case', 59, false)
// })

function updateNumber(product, price, isIncrease) {
    let productInput = document.getElementById(product + '-input')
    let productAmount = document.getElementById(product + '-amount')
    let output = productInput.value
    if (isIncrease == true) {
        output = parseFloat(productInput.value) + 1
    } else if (output > 0) {
        output = parseFloat(productInput.value) - 1
    }

    productAmount.innerText = output * price
    productInput.value = output

    totalCalculation()
}

getEvenlis('phone-plus', 'phone', 1219, true)
getEvenlis('phone-minus', 'phone', 1219, false)
getEvenlis('case-plus', 'case', 59, true)
getEvenlis('case-minus', 'case', 59, false)
function getEvenlis(productId, updateNum, price, isIncrease) {  // enent listener shortcut
    document.getElementById(productId).addEventListener('click', function () {
        updateNumber(updateNum, price, isIncrease)
    })
}

function totalCalculation() {
    let caseAmount = document.getElementById('case-amount')
    caseAmount * 59
    let phoneAmount = document.getElementById('phone-amount')
    phoneAmount * 1219

    let subTotal = document.getElementById('subtotal').innerText = parseFloat(phoneAmount.innerText) + parseFloat(caseAmount.innerText)
    let tax = subTotal / 10
    document.getElementById('tax').innerText = tax
    document.getElementById('total').innerText = tax + subTotal
}




