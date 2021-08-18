// console.log('I am in a separate file')
function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncreasing) {
        // caseInput.value = parseInt(caseNumber) + 1;
        productNumber = parseInt(productNumber) + 1;

    }
    // caseInput.value = parseInt(caseNumber) + 1;
    else if (productNumber > 0) {
        // caseInput.value = parseInt(caseNumber) - 1;
        productNumber = parseInt(productNumber) - 1;

    }
    productInput.value = productNumber;
    // console.log(caseNumber);

    // update case total 
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;

    // calculate Total
    calculateTotl()
}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotl() {
    // const phoneInput = document.getElementById('phone-number');
    // const phoneNumber = parseInt(phoneInput.value);
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;



    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}

// handle phone increase and decrease events
const phonePlus = document.getElementById('phone-plus');
phonePlus.addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
})
const phoneMinus = document.getElementById('phone-minus');
phoneMinus.addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
})

// handle case increase and decrease events
const casePlus = document.getElementById('case-plus');
casePlus.addEventListener('click', function () {
    // console.log('case clicked');
    // const caseInput = document.getElementById('case-number');
    // let caseNumber = caseInput.value;
    updateProductNumber('case', 59, true);
    // caseInput.value = parseInt(caseNumber) - 1;

})
const caseMinus = document.getElementById('case-minus')
caseMinus.addEventListener('click', function () {
    // console.log('case clicked');
    // const caseInput = document.getElementById('case-number');
    // const caseNumber = caseInput.value;
    updateProductNumber('case', 59, false);
    // caseInput.value = parseInt(caseNumber) - 1;
    // console.log(caseNumber);
})