const calcBtn = document.getElementById("calculate");
const billAmt = document.getElementById("bill");
const tipPct = document.getElementById("tip");
const total = document.getElementById("total");
// const people = document.getElementById("numPeople");
/**
 * takes value of bill input, and takes percentage 
 * of tip put in, and calculates tgotal price on bill.
 */
function calculateTotal(){
    const billValue = billAmt.value;
    const tipValue = tipPct.value;
    // const splitVal = people.value;
    // if(splitVal === "" || splitVal <= 1){
    //     splitVal = 1;
        
    // }
    const totalVal = billValue *(1 + tipValue / 100);
    total.innerText = totalVal.toFixed(2);
}

calcBtn.addEventListener('click', calculateTotal);