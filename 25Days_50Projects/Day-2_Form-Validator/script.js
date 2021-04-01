const user = document.getElementById('username');
const email = document.getElementById('email');
const pass1 = document.getElementById('password');
const pass2 = document.getElementById('password2');
const form = document.getElementById('form');

function showError(input, message) {

}

function showSuccess(input) {

}

form.addEventListener('submit', () => {
    
    if(user.value === ''){
        showError(user, 'Username is required');
    }
    else{
        showSuccess(user);
    }
    
});

