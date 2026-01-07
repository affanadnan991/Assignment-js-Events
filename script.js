// ---------------
// Counter logic start
// ---------------
var count = 0

function action(event) {

    var value = document.getElementById('value')

    switch (event) {
        case 'increment':
            count++
            break;

        case 'decrement':
            count--
            break;

        case 'reset':
            count = 0
            break;

        default:
            console.log('Invalid action')
    }

    value.textContent = count


}

// --------------
// Password button logic start
// --------------

function togglePassword() {
    var password = document.getElementById('p')
    var icon = document.getElementById('togglePassword')
    if (password.type === 'password') {
        password.type = 'text'
        icon.classList.remove('fa-eye') 
        icon.classList.add('fa-eye-slash') 
    }
    else {
        password.type = 'password'
        icon.classList.remove('fa-eye-slash') 
        icon.classList.add('fa-eye') 
    }
}

// --------------
// Password button logic start
// --------------


function checkNumber() {
    var number = document.getElementById('number').value
    var textValue = document.getElementById('textValue')

    // Empty check
    if (number === "") {
        textValue.innerText = "Please don't check empty"
        textValue.style.color = "red"
        return
    }

    number = Number(number)

    // 0 & 1 check
    if (number === 0 || number === 1) {
        textValue.innerText = "Number must be greater than 1"
        textValue.style.color = "red"
        return
    }

    // Even number check
    if (number % 2 === 0 && number !== 2) {
        textValue.innerText = `${number} is Even and Not a Prime number`
        textValue.style.color = "red"
        return
    }

    // Prime check (odd numbers)
    let isPrime = true
    for (let i = 3; i <= Math.sqrt(number); i += 2) {
        if (number % i === 0) {
            isPrime = false
            break
        }
    }

    // Result
    if (isPrime) {
        textValue.innerText = `${number} is Odd and Prime number`
        textValue.style.color = "green"
    } else {
        textValue.innerText = `${number} is Odd and Not a Prime number`
        textValue.style.color = "red"
    }
}
