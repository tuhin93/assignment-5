function inputValueById(id){
    const inputValue = document.getElementById(id).value;
    return inputValue;
}

function textValueById(id){
    const textValue = document.getElementById(id).innerText;
    return textValue;
}

// hide all the section for history
function hideAllSection(id){
    document.getElementById('donation-section').classList.add('hidden');
    // show the history section
    document.getElementById(id).classList.remove('hidden');
    
}

// Toggle hisoty and donation button color

function toggleColor(id){
    document.getElementById('btn-history').classList.remove('bg-[#B4F461]');
    document.getElementById('btn-donation').classList.remove('bg-[#B4F461]');
    document.getElementById(id).classList.add('bg-[#B4F461]');
}



