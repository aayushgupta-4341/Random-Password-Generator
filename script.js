let passwordField = document.getElementById("password");
let generateBtn = document.getElementById("generateBtn");
let copyBtn = document.getElementById("copyBtn");

let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%";

generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyPassword);

function generatePassword(){

    let password = "";

    for(let i = 0; i < 8; i++){

        let randomIndex = Math.floor(Math.random() * characters.length);

        password += characters[randomIndex];
    }

    passwordField.value = password;
}

function copyPassword(){

    passwordField.select();

    document.execCommand("copy");

    alert("Password Copied!");
}