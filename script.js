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


function checkNumber(){
    var number = document.getElementById('number').value
    var textValue = document.getElementById('textValue')

    if(number <= 1){
        textValue.innerText='Not a Prime number'
        return;
    }

    var isPrime = true

   for(i = 2; i <= Math.sqrt(number); i++){
    if(number % i === 0){
        isPrime = false
        break;
    }
   }
   if(isPrime){
    textValue.innerText= `${number} is Prime number`
    textValue.style.color='green'
   }
   else{
    textValue.innerText= `${number} is Prime not number`
    textValue.style.color='red'
   }
}