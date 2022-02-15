// // event listener
document.getElementById('phone-plus').addEventListener('click', function () {
    /* let phoneInput = document.getElementById('phone-input')
    let phoneAmount = document.getElementById('phone-amount')
    let output = parseFloat(phoneInput.value) + 1
    phoneAmount.innerText = output * 1219
    phoneInput.value = output */
    updateNumber(true)

})

document.getElementById('phone-minus').addEventListener('click', function () {
    /*  let phoneInput = document.getElementById('phone-input')
     let phoneAmount = document.getElementById('phone-amount')
     let output = parseFloat(phoneInput.value) - 1
     phoneAmount.innerText = output * 1219
     phoneInput.value = output */
    updateNumber(false)
})

function updateNumber(isIncrease) {
    let phoneInput = document.getElementById('phone-input')
    let phoneAmount = document.getElementById('phone-amount')
    let output = phoneInput.value
    if (isIncrease == true) {
        output = parseFloat(phoneInput.value) + 1
    } else if (output > 0) {
        output = parseFloat(phoneInput.value) - 1
    }

    phoneAmount.innerText = output * 1219
    phoneInput.value = output

}

