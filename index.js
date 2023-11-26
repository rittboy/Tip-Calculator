const calcBtn = document.getElementById("calculate");
const billAmt = document.getElementById("bill");
const tipPct = document.getElementById("tip");
const total = document.getElementById("total");

function calculateTotal(){
    const billValue = billAmt.value;
    const tipValue = tipPct.value;
    const totalVal = billValue *(1 + tipValue / 100);
    total.innerText = totalVal.toFixed(2);
}

calcBtn.addEventListener('click', calculateTotal);