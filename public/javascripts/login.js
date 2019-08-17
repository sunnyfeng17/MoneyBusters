document.addEventListener('DOMContentLoaded', function(e) {
   const emailInput = document.querySelector('[name=username]');
  // emailInput.addEventListener('blur', emailAddressValidator);
   const passwordInput = document.querySelector('[name=password]');
  // passwordInput.addEventListener('blur', passwordValidator);
 });

const emailAddressValidator = e => {
    const email = e.currentTarget.value;
    const emailCheck = /^\w+@\w+.\w+$/;
    const errorMessage = document.querySelector('[data-email-error-message]');
    errorMessage.innerHTML = '';
    const validEmail =  emailCheck.test(email);
    if(!validEmail) {
        errorMessage.innerHTML = "You failed"
    }
}

 const passwordValidator = e => {
     const password = e.currentTarget.value;
     const errorMessage = document.querySelector('[data-password-error-message]');
     errorMessage.innerHTML = '';
     const validPassword = !!(password && password.length);
     if(!validPassword) {
        errorMessage.innerHTML = "You failed again"
     }
 }