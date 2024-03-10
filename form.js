const formSubmit=document.querySelector(".formSubmit")
const formInputAll = document.querySelectorAll(".form input");
const btnSubmit = document.querySelector(".button");

let flag = true;
btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();

    flag=true
    formInputAll.forEach((item) => {
        formSubmitCheck(item);
    });

    if(flag){
        formSubmit.submit()
    }
});

function formSubmitCheck(item) {
    if (flag === true) {
        if (item.value.trim() == undefined || item.value.trim() == "") {
            alert("Please provide correct Input");
            flag = false;
        }
    }
}