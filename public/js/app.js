console.log('Client side Javascript is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {  //fetch is client side javascript. it doesn't work in server side.
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
                messageTwo.textContent = ''
            } else {
                messageOne.textContent = data.forecast
                messageTwo.textContent = data.location
            }
        })
    })
})