// event handler for noakhali flood donation 
document.getElementById('btn-blog').addEventListener("click", function () {
    window.location.href = "blog.html";

});
// Adding event handler for Noakhali

document.getElementById('donate-money').addEventListener('click', function () {
    const noakhaliDonateAmount = document.getElementById('noakhali-donate').value;
    const noakhaliBalance = document.getElementById('noakhali-balance').innerText;
    const intNoakhaliBalance = parseFloat(noakhaliBalance);

    const mainBalance = document.getElementById('main-balance').innerText;
    const intNoakhaliDonateAmount = parseInt(noakhaliDonateAmount);
    const intMainBalance = parseInt(mainBalance);
    const newBalance = intMainBalance - intNoakhaliDonateAmount;
    const updateNoakhaliBalance = intNoakhaliDonateAmount + intNoakhaliBalance;
    const currentTime = new Date().toLocaleString('en-GB', { timeZoneName: 'short' })

    document.getElementById('main-balance').innerText = newBalance;
    document.getElementById('noakhali-balance').innerText = updateNoakhaliBalance;

    const log = document.createElement('p');
    log.innerHTML = `
    <p class ="border-spacing-1"> You donate ${intNoakhaliDonateAmount} tk for <span class ="text-green-500 font-semibold"> Noakhali </span></p>
    <p class ="border-spacing-2 shadow-lg">Date: ${currentTime}</p>`;
    document.getElementById('history-section').appendChild(log);



    if (intNoakhaliDonateAmount <= 0) {
        alert('Donate can not be less than 0');
        return;
    }

    if (intMainBalance < intNoakhaliDonateAmount) {
        alert('Donate amount can not be bigger than main balance!')
        return;
    }

    if(isNaN(intNoakhaliDonateAmount)){
        alert('Please input valid number');
        return;
    }

})


// event handler for feni button
document.getElementById('btn-donate-feni').addEventListener('click', function () {
    const feniBalance = document.getElementById('feni-balance').innerText;
    const mainBalance = document.getElementById('main-balance').innerText;
    const intFeniBalance = parseFloat(feniBalance);
    const intMainBalance = parseFloat(mainBalance);
    const inputFeni = document.getElementById('feni-input').value;

    const newBalance = intMainBalance - inputFeni;
    const newFeniBalance = parseFloat(intFeniBalance) + parseFloat(inputFeni);

    document.getElementById('feni-balance').innerText = newFeniBalance;
    document.getElementById('main-balance').innerText = newBalance;
    const currentTime = new Date().toLocaleString('en-GB', { timeZoneName: 'short' })

    const history = document.createElement('div');
    history.innerHTML = `
              <p class =""> You donate ${inputFeni} tk for <span class ="text-green-500 font-semibold"> Feni </span></p>
              <p class ="shadow-lg">Date: ${currentTime}</p>`;
    document.getElementById('history-section').appendChild(history);

    if (inputFeni <= 0) {
        alert('Wrong input try again later!')
        return;
    }

    if (inputFeni > intMainBalance) {
        alert('You have not enough balance!');
    }

})

// click handler for quota
document.getElementById('btn-quota').addEventListener('click', function () {

    const quotaBalance = textValueById('quota-balance');
    const inputQuota = inputValueById('input-quota');

    const mainBalance = document.getElementById('main-balance').innerText;
    const intMainBalance = parseFloat(mainBalance)
    const intInputQuota = parseFloat(inputQuota)
    const newBalance = mainBalance - inputQuota;

    // const inputQuota = document.getElementById('input-quota').value;
    const newQuotaBalance = intInputQuota + intInputQuota;

    document.getElementById('quota-balance').innerText = newQuotaBalance;
    document.getElementById('main-balance').innerText = newBalance;

    // create donation history for section Quota
    const currentTime = new Date().toLocaleString('en-GB', { timeZoneName: 'short'})
    const donationLog = document.createElement('p');
    donationLog.innerHTML = `
    <p class =""> You donate ${inputQuota} tk for <span class ="text-green-500 font-semibold"> Quota </span></p>
    <p class ="shadow-lg">Date: ${currentTime}</p>`;
    document.getElementById('history-section').appendChild(donationLog);

    if (intInputQuota <= 0 || intMainBalance < intInputQuota) {
        alert('donate amount can not be more than balance and less than 0');
        return;
    }
})

document.getElementById('btn-history').addEventListener('click', function () {
    hideAllSection('history-section');

})

document.getElementById('btn-donation').addEventListener('click', function () {
    hideAllSection('donation-section');
})

document.getElementById('btn-donation').addEventListener('click', function () {
    toggleColor('btn-donation');
})
document.getElementById('btn-history').addEventListener('click', function () {
    toggleColor('btn-history');
})