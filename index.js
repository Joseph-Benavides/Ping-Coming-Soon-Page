const formCollector = document.getElementById("form");
const submitBtn = document.getElementById("submit");
const email = document.getElementById("email");
const hiddenTitle = document.querySelector(".hidden-title");
const hiddenSubtitle = document.querySelector(".hidden-subtitle");
const mainTitle = document.querySelector(".main-title");
const mainSubtitle = document.querySelector(".main-subtitle");
const invalidText = document.querySelector(".invalid");
const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function submitBtnClicked(e) {
    e.preventDefault();
    checkInput()
}

function checkInput() {
    let isValue = email.value.length !== 0 && emailRegExp.test(email.value);
    if(!isValue) {
        email.style.border = "1px solid red";
        invalidText.style.display = "initial";
    } else {
    console.log("Hellooo");
    submitBtn.classList.add("display");
    hiddenTitle.style.display = "inherit";
    hiddenSubtitle.style.display = "inherit";
    mainTitle.classList.add("display");
    mainSubtitle.classList.add("display");    
    email.classList.add("display");    
    invalidText.style.display = "none";
    }    
}

form.addEventListener("submit", submitBtnClicked);