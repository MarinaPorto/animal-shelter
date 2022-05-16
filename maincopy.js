

document.getElementById('mask__phone').addEventListener('blur', function() {
    if (document.getElementById('mask__phone').value != "") {
    
    document.getElementById('feike__btn').style.display = 'none';
    document.getElementById('disabled').removeAttribute('disabled');
    }
 
})


document.getElementById('mask__phone-home').addEventListener('blur', function() {
    if (document.getElementById('mask__phone-home').value != "") {
    
    document.getElementById('feike__btn-home').style.display = 'none';
    document.getElementById('disabled').removeAttribute('disabled');
    }
 
})

document.getElementById('mask__phone-auto').addEventListener('blur', function() {
    if (document.getElementById('mask__phone-auto').value != "") {
    
    document.getElementById('feike__btn-auto').style.display = 'none';
    document.getElementById('disabled').removeAttribute('disabled');
    }
 
})

document.getElementById('mask__phone-volonter').addEventListener('blur', function() {
    if (document.getElementById('mask__phone-volonter').value != "") {
    
    document.getElementById('feike__btn-volonter').style.display = 'none';
    document.getElementById('disabled').removeAttribute('disabled');
    }
 
})