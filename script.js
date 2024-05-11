const principal=document.querySelector('#loan-input')
const interest=document.querySelector("#interest-input")
const tenure=document.querySelector('#months-to-pay-input')
const calculate=document.getElementById('calculate')
const emi=document.querySelector('#emi')

function calculateEMI(){
    if(principal.value==='' || interest.value==='' || tenure.value===''){
        alert('please enter all values')
        return
    }
    else{
        const P=principal.value;
        const R=interest.value/1200;
        const N=tenure.value;
        const emiValue=(P*R*(1+R) ** N)/ ((1+R) ** N-1);
        // emiValue=emiValue.toFixed(2);
        // emi.innerText=emiValue
        emi.textContent=emiValue.toFixed(2);
    }
}

calculate.addEventListener('click',calculateEMI);