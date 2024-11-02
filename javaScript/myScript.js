// // button from menu
// const btnDonate = document.querySelectorAll("btn-donate");
// const btnHistory = document.getElementById('btn-history');
// const btnHome = document.getElementById('btn-home');
// const donationSec = document.getElementById('donation-section');
// const historySection = document.getElementById('history-section');

// event handler
document.getElementById('btn-blog').addEventListener("click", function () {
    window.location.href = "blog.html";

});

document.getElementById('donate-money').addEventListener('click', function(){
    const noakhaliDonateAmount = document.getElementById('noakhali-donate').value;
    if(noakhaliDonateAmount <= 0){
        alert('Donate can not be 0 or less than 0');
    }
     
})