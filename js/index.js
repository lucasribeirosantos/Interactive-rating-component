const numberForm = document.getElementById('rating')
const numbers = document.querySelectorAll('.number')
const submitForm = document.getElementById('submit-form')
const submit = document.getElementById('submit')
const ratingSection = document.getElementById('rating-start')
const thankYouState = document.getElementById('thankyou-state')
const rateComplete = document.getElementById('rate-complete')

let defaultScore = 0
let index = 0

// SUBMIT BUTTON
function submitbtn(event) {
    event.preventDefault()

    ratingSection.classList.add('hide')
    thankYouState.classList.remove('hide')
}
submit.addEventListener('click', submitbtn)

// BTN COLOR

numbers.forEach(item => {
    item.addEventListener('click', () => {
        numbers.forEach(element => element.classList.remove('clicked'));

        item.classList.add('clicked')
    })
})

// RATING COMPLETED

numbers.forEach((number) => {
    number.addEventListener('click', () => {
        rateComplete.innerHTML = number.innerHTML
    })
})