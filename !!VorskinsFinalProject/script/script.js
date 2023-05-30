let fullname = document.getElementById("fullname-txt")
let password = document.getElementById("password-txt")
let email = document.getElementById("email-txt")
let phone = document.getElementById("phone-txt")
let preferences = document.getElementById("preferences-txt")
let checkbox = document.getElementById("checkbox-txt")

let fullnameError = document.getElementById("fullname-id")
let passwordError = document.getElementById("password-id")
let emailError = document.getElementById("email-id")
let phoneError = document.getElementById("phone-id")
let preferencesError = document.getElementById("preferences-id")
let checkboxError = document.getElementById("checkbox-id")

function validateEmail(email){
    let symbol = email.indexOf('@')
    let dot = email.indexOf('.')
    if(symbol < 1) return false;
    if(dot <= symbol + 2) return false;
    if(dot == email.length -1 ) return false;
    return true;
}

function validateForm()
{
    let emailChecking = validateEmail(email.value)
    if (fullname.value.length == 0) {
        fullnameError.innerHTML = "Full name must be filled"
    }
    else if (fullname.value.length < 5){
        fullnameError.innerHTML = "Full name must be more than 5 characters"
    }
    else{
        fullnameError.innerHTML = ""
    }
    if(!emailChecking){
        emailError.innerHTML = "Email is invalid"
    }
    else{
        emailError.innerHTML = ""
    }
    if (password.value.length < 5) {
        passwordError.innerHTML = "Password must be more than 5 characters!"
    }
    else{
        passwordError.innerHTML = ""
    }
    if (phone.value.startsWith("+44")) {
        phoneError.innerHTML = ''
    } 
    else {
        phoneError.innerHTML = "Phone number must starts with +44"
    }
    if(preferences.value == ""){
        preferencesError.innerHTML = "Preferences must be choosen"
    }
    else{
        preferencesError.innerHTML = ""
    }
    if(!checkbox.checked){
        checkboxError.innerHTML = "You must agree to receive Vorskin news letter"
    }
    else{
        checkboxError.innerHTML = ""
    }
}
