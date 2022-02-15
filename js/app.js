// // phone plus event listener
document.getElementById('phone-plus').addEventListener('click', function () {
    /* let phoneInput = document.getElementById('phone-input')
    let phoneAmount = document.getElementById('phone-amount')
    let output = parseFloat(phoneInput.value) + 1
    phoneAmount.innerText = output * 1219
    phoneInput.value = output */
    updateNumber('phone', 1219, true)

})
// phone minus event listenr.
document.getElementById('phone-minus').addEventListener('click', function () {
    /*  let phoneInput = document.getElementById('phone-input')
     let phoneAmount = document.getElementById('phone-amount')
     let output = parseFloat(phoneInput.value) - 1
     phoneAmount.innerText = output * 1219
     phoneInput.value = output */
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

}

