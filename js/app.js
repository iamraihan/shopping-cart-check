// // phone plus event listener
document.getElementById('phone-plus').addEventListener('click', function () {
    updateNumber('phone', 1219, true)

})
// phone minus event listenr.
document.getElementById('phone-minus').addEventListener('click', function () {
    updateNumber('phone', 1219, false)
})
//case plus eventlistener
document.getElementById('case-plus').addEventListener('click', function () {
    updateNumber('case', 59, true)
})

// case minius event listener
document.getElementById('case-minus').addEventListener('click', function () {
    updateNumber('case', 59, false)
})

function updateNumber(product, price, isIncrease) {
    let phoneInput = document.getElementById(product + '-input')
    let phoneAmount = document.getElementById(product + '-amount')
    let output = phoneInput.value
    if (isIncrease == true) {
        output = parseFloat(phoneInput.value) + 1
    } else if (output > 0) {
        output = parseFloat(phoneInput.value) - 1
    }

    phoneAmount.innerText = output * price
    phoneInput.value = output

    totalCalculation()
}

function totalCalculation() {
    let caseAmount = document.getElementById('case-amount')
    caseAmount * 59
    let phoneAmount = document.getElementById('phone-amount')
    phoneAmount * 1219

    let subTotal = document.getElementById('subtotal').innerText = parseFloat(phoneAmount.innerText) + parseFloat(caseAmount.innerText)
    let tax = subTotal / 10
    document.getElementById('total').innerText = tax + subTotal
}



