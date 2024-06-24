function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {

        return getPin();
    }
}

function genaretPin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}


// calculator 
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const inputNumber = document.getElementById('type-number');
    if (isNaN(number)) {
        if (number == 'C') {
            inputNumber.value = '';
        }
    }
    else {
        const previusInputNumber = inputNumber.value;
        const newInputNumber = previusInputNumber + number;
        inputNumber.value = newInputNumber;
    }
})

// mashed pin chek 
document.getElementById('submit-pin').addEventListener('click', function () {
    const displayPin = document.getElementById('display-pin').value;
    const typeNumber = document.getElementById('type-number').value;

    // masagge 
    const pinMatch = document.getElementById('pin-matched');
    const pinFaild = document.getElementById('pin-faild')

    if (displayPin == typeNumber) {
        pinFaild.style.display = 'none';
        pinMatch.style.display = 'block';

    }
    else {
        pinFaild.style.display = 'block';
        pinMatch.style.display = 'none';
    }
})