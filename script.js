const bill = document.querySelector('.bill')
const people = document.querySelector('.people')
const tips = document.querySelectorAll('.tip')
const calculateTipPerPerson = document.querySelector('.tip-per-person')
const calculateTotalPerPerson = document.querySelector('.total-per-person')
const reset = document.querySelector('.reset')

const errorMessage = document.querySelector('.error-message')

function showError() {
    people.style.outline = '2px solid red'
    errorMessage.style.display = 'block'

    calculateTipPerPerson.innerText = '$' + '0.00'
    calculateTotalPerPerson.innerText = '$' + '0.00'
}

function removeError() {
    people.style.outline = 'none'
    errorMessage.style.display = 'none'
}

tips[0].addEventListener('click', () => {
    value1 = ((0.05 * bill.value) / people.value).toFixed(2)
    calculateTipPerPerson.innerText = '$' + value1
    calculateTotalPerPerson.innerText = '$' + (bill.value / people.value + parseFloat(value1)).toFixed(2)

    removeError()

    if(people.value == 0 || people.value == 'none') {
        showError()
    }
})

tips[1].addEventListener('click', () => {
    value2 = ((0.1 * bill.value) / people.value).toFixed(2)
    calculateTipPerPerson.innerText = '$' + value2
    calculateTotalPerPerson.innerText = '$' + (bill.value / people.value + parseFloat(value2)).toFixed(2)

    removeError()

    if(people.value == 0 || people.value == 'none') {
        showError()
    }
})

tips[2].addEventListener('click', () => {
    value3 = ((0.15 * bill.value) / people.value).toFixed(2)
    calculateTipPerPerson.innerText = '$' + value3
    calculateTotalPerPerson.innerText = '$' + (bill.value / people.value + parseFloat(value3)).toFixed(2)

    removeError()

    if(people.value == 0 || people.value == 'none') {
        showError()
    }
})

tips[3].addEventListener('click', () => {
    value4 = ((0.25 * bill.value) / people.value).toFixed(2)
    calculateTipPerPerson.innerText = '$' + value4
    calculateTotalPerPerson.innerText = '$' + (bill.value / people.value + parseFloat(value4)).toFixed(2)

    removeError()

    if(people.value == 0 || people.value == 'none') {
        showError()
    }
})

tips[4].addEventListener('click', () => {
    value5 = ((0.5 * bill.value) / people.value).toFixed(2)
    calculateTipPerPerson.innerText = '$' + value5
    calculateTotalPerPerson.innerText = '$' + (bill.value / people.value + parseFloat(value5)).toFixed(2)

    removeError()

    if(people.value == 0 || people.value == 'none') {
        showError()
    }
})

tips[5].addEventListener('input', () => {
    valueCustom = (((tips[5].value / 100) * bill.value) / people.value).toFixed(2)
    calculateTipPerPerson.innerText = '$' + valueCustom
    calculateTotalPerPerson.innerText = '$' + (bill.value / people.value + parseFloat(valueCustom)).toFixed(2)

    removeError()

    if(people.value == 0 || people.value == 'none') {
        showError()
    }
})

reset.addEventListener('click', () => {
    bill.value = 'none'
    people.value = 'none'
    tips[5].value = 'none'

    calculateTipPerPerson.innerText = '$' + '0.00'
    calculateTotalPerPerson.innerText = '$' + '0.00'

    removeError()
})