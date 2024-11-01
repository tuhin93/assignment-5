// button from menu
const btnDonate = document.querySelectorAll(".btn-donate");
const btnHistory = document.getElementById('btn-history');
const btnHome = document.getElementById('btn-home');
const donationSec = document.getElementById('donation-section');
const historySection = document.getElementById('history-section');

// event hanler
document.getElementById('btn-blog').addEventListener("click",function() {
    window.location.href = "blog.html";  

});


//button from section

const donateQuota = document.getElementById('donate-quota');
const donateNoakhali = document.getElementById('donate-noakhali');
const donateFeni = document.getElementById('donate-feni');

// click handler button


btnHistory.addEventListener('click', function () {
    donationSec.classList.add('hidden');
    historySec.classList.remove('hidden');

    btnHistory.classList.add('bg-[#B4F461]', 'text-[#111111B3]')
    btnHistory.classList.remove('border-2', 'border-[#111111B3]', 'text-[#111111B3]')

    donationBtn.classList.remove('bg-[#b8fd5d]', 'text-black')
    donationBtn.classList.add('border-2', 'border-[#111111B3]', 'text-[#111111B3]')

})

btnDonate.addEventListener('click', function () {
    donationSec.classList.remove('hidden');
    historySec.classList.add('hidden');

    btnDonate.classList.add('bg-[#B4F461]', 'text-black')
    btnDonate.classList.remove('border-2', 'border-[rgba(17,17,17,0.3)]', 'text-[#111111B3]')

    historyBtn.classList.remove('bg-[#B4F461]', 'text-[#111111B3]')
    historyBtn.classList.add('border-2', 'border-[rgba(17,17,17,0.3)]', 'text-[#111111B3]')

})

// noakhali
donateNoakhali.addEventListener('click', function () {

    const myBalance = getBalance('my-balance')
    const inputAmount = getInputValue('noakhali-input-value');
    const noakhaliBalance = getBalance('noakhali-balance')
    const noakhaliTitle = document.getElementById('noakhali-title').innerText;

    calculate(inputAmount, myBalance, noakhaliBalance, 'noakhali-balance', noakhaliTitle);

})


// feni
donateFeni.addEventListener('click', function () {

    const myBalance = getBalance('my-balance')
    const inputAmount = getInputValue('feni-input-value');
    const feniBalance = getBalance('feni-balance')
    const feniTitle = document.getElementById('feni-title').innerText;

    calculate(inputAmount, myBalance, feniBalance, 'feni-balance', feniTitle);

})


// quota
donateQuota.addEventListener('click', function () {

    const myBalance = getBalance('my-balance')
    const inputAmount = getInputValue('quota-input-value');
    const quotaBalance = getBalance('quota-balance')
    const quotaTitle = document.getElementById('quota-title').innerText;

    calculate(inputAmount, myBalance, quotaBalance, 'quota-balance', quotaTitle);

})

// script js

function getInputValue(id) {
    return parseFloat(document.getElementById(id).value);
}

function getBalance(id) {
    return parseFloat(document.getElementById(id).innerText);
}


function calculate(inputAmount, myBalance, locationBalance, id, locationTitle) {
    if (inputAmount < 1 || isNaN(inputAmount)) {
        alert('Invalid Donation Amount!')
    } else if (myBalance < inputAmount) {

        alert("You Don't Have Enough Balance!")
    } else {
        donate_alert.showModal();
        document.getElementById(id).innerText = (locationBalance + inputAmount).toFixed(2);
        document.getElementById('my-balance').innerText = (myBalance - inputAmount).toFixed(2);
        history(inputAmount, locationTitle);
    }
}

function history(inputAmount, locationTitle) {
    const div = document.createElement('div');
    const now = new Date()
    const dateTimeString = now.toString();
    div.classList.add('flex', 'flex-col', 'gap-4', 'md:p-8', 'p-4', 'border-2', 'border-[#111111B3]', 'rounded-xl');
    div.innerHTML = `
        <h3 class="md:text-xl font-extrabold text-black">
            ${inputAmount} Taka donated to: ${locationTitle}
        </h3>
        <p class="text-[#111111B3] bg-[#f9f7f3] rounded-lg px-4 py-2">Date : 
            ${dateTimeString}
        </p>   
    `;
    document.getElementById('history-div').appendChild(div);
}
