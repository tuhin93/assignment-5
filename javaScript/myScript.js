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



    if (noakhaliDonateAmount <= 0 ) {
        alert('Donate can not be less than 0 or bigger than main balance');
        return;
    }

    else if(noakhaliDonateAmount > mainBalance){
        alert('Donate amount can not be bigger than main balanc!')
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

    if (inputFeni <= 0 || inputFeni > mainBalance) {
        alert('Wrong input try again later!')
        return;
    }

})

// click handler for quota
document.getElementById('btn-quota').addEventListener('click', function () {

    const quotaBalance = document.getElementById('quota-balance').innerText;

    const mainBalance = document.getElementById('main-balance').innerText;

    const inputQuota = document.getElementById('input-quota').value;
    const newBalance = parseFloat(mainBalance) - parseFloat(inputQuota);
    const newQuotaBalance = parseFloat(inputQuota) + parseFloat(quotaBalance);

    document.getElementById('quota-balance').innerText = newQuotaBalance;
    document.getElementById('main-balance').innerText = newBalance;
    onclick()

    if (inputQuota <= 0 || inputQuota > mainBalance) {
        alert('donate amount can not be more than balance and less than 0');
    }
})