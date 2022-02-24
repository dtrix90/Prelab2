const form = document.getElementById('form')
const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const email = document.getElementById('email')
const number = document.getElementById('number')
const error = document.getElementById('error')

function validate() {
    const regLetters = /[a-zA-Z]/g;
    const regEmail =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const regNumber = /^[0-9]{10}$/;

    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const emailValue = email.value.trim();
    const numberValue = number.value.trim();

    if (fnameValue == null || !regLetters.test(fnameValue)) {
        alert("First name is required and can only contain letters.")
        return false;
    }
    
    if (lnameValue == null || !regLetters.test(lnameValue)) {
        alert("Last name is required and can only contain letters.")
        return false;
    }

    if (!regEmail.test(emailValue)){
        alert("Your email is invalid.")
        return false;
    }


    if (!regNumber.test(numberValue)){
        alert("Your number is invalid.")
        return false;
    }
}

document
    .querySelector("#words")
    .addEventListener("input", function countWord() {
        let res =  [];
        let str = this.value.replace(/[\t\n\r\.\?\!]/gm, " ").split(" ");
        str.map((s) => {
        let trimStr = s.trim();
        
        if (trimStr.length > 0) {
            res.push(trimStr);
        }

        });
        document.querySelector("#show").innerText = 200 - res.length;

    }); 
