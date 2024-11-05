// event handler for noakhali flood donation 
document.getElementById('btn-blog').addEventListener("click", function () {
    window.location.href = "blog.html";

});


document.getElementById('donate-money').addEventListener('click', function () {
    const noakhaliDonateAmount = document.getElementById('noakhali-donate').value;
    const noakhaliBalance = document.getElementById('noakhali-balance').innerText;
    const intNoakhaliBalance = parseFloat(noakhaliBalance);


    const mainBalance = document.getElementById('main-balance').innerText;
    const intNoakhaliDonateAmount = parseInt(noakhaliDonateAmount);
    const intMainBalance = parseInt(mainBalance);
    const newBalance = intMainBalance - intNoakhaliDonateAmount;
    const updateNoakhaliBalance = intNoakhaliDonateAmount + intNoakhaliBalance;

    document.getElementById('main-balance').innerText = newBalance;
    document.getElementById('noakhali-balance').innerText = updateNoakhaliBalance;

    const log = document.createElement('p');
    log.innerText = `You have donated ${intNoakhaliDonateAmount} Tk for Noakhali Flood.`
    document.getElementById('history-section').appendChild(log);



    if (intNoakhaliDonateAmount <= 0) {
        alert('Donate can not be less than 0 or bigger than main balance');
        return;
    }

   if (mainBalance < intNoakhaliDonateAmount) {
        alert('Donate amount can not be bigger than main balance!')
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

    const history = document.createElement('p');
    history.innerText = ` You have successfully donated for feni flood ${inputFeni} Tk your current balance is ${newBalance}` ;
    document.getElementById('history-section').appendChild(history);

    if (inputFeni <= 0 || inputFeni > mainBalance) {
        alert('Wrong input try again later!')
        return;
    }

})

// click handler for quota
document.getElementById('btn-quota').addEventListener('click', function () {

    const quotaBalance = textValueById('quota-balance');
    const inputQuota = inputValueById('input-quota');

    const mainBalance = document.getElementById('main-balance').innerText;
    const newBalance = parseFloat(mainBalance) - parseFloat(inputQuota);

    // const inputQuota = document.getElementById('input-quota').value;
    const newQuotaBalance = parseFloat(inputQuota) + parseFloat(quotaBalance);

    document.getElementById('quota-balance').innerText = newQuotaBalance;
    document.getElementById('main-balance').innerText = newBalance;

    if (inputQuota <= 0 || inputQuota > mainBalance) {
        alert('donate amount can not be more than balance and less than 0');
    }
})

document.getElementById('btn-history').addEventListener('click', function () {
    hideAllSection('history-section');
    
})

document.getElementById('btn-donation').addEventListener('click',function(){
    hideAllSection('donation-section');
})

document.getElementById('btn-donation').addEventListener('click',function(){
    toggleColor('btn-donation');
})
document.getElementById('btn-history').addEventListener('click',function(){
    toggleColor('btn-history');
})