// JavaScript code

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cPassword = document.getElementById("cpassword");
const submitBtn = document.getElementById("btn");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    validateInputs();
});

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const cPasswordValue = cPassword.value.trim();

    if (usernameValue === "") {
        setError(username, 'Username is required!');
    } else {
        setSuccess(username);
    }

    if(emailValue === ""){
        setError(email,"Mail Id is required!")
    }else if (!isValidEmail(emailValue)){
        setError(email,'Provide valid Mail Id')
    }else{
        setSuccess(email);
    }


    if (passwordValue === "") {
        setError(password, 'Password is required!');
    } else if (passwordValue.length < 8) {
        setError(password, 'Must be aleast 8 characters')
    } else {
        setSuccess(password);
    }


    if (cPasswordValue === "") {
        setError(cPassword, 'Password is required!');
    } else if (cPasswordValue !== passwordValue) {
        setError(cPassword, 'Password did not matched!')
    } else {
        setSuccess(cPassword);
    }


    // Validate other input fields similarly...
}

const setError=(input, message)=> {
    const formControl = input.parentElement;
    const errorMessage = formControl.querySelector('.error');

    formControl.classList.add('error');
    formControl.classList.remove('success');
    errorMessage.innerText = message;
}

const setSuccess=(input)=> {
    const formControl = input.parentElement;
    const errorMessage = formControl.querySelector('.error');
    errorMessage.innerText = "";

    formControl.classList.add('success');
    formControl.classList.remove('error');

}

const isValidEmail=(e)=>{
    const Regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return Regex.test(e);
}