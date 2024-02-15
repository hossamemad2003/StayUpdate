let userEmail = document.querySelector("#email");

let reg = /\w+@\w+.\w/g;
let val = null;
userEmail.onblur = () => {
    val = userEmail.value;
    if (reg.test(val) != true) {
        document.querySelector(".error").style.display = "inline-block";
    } else {
        document.querySelector(".error").style.display = "none";
    }
};

let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
btn1.onclick = function () {
    if (val != null) {
        document.querySelector(".box").style.display = "block";
        document.querySelector(".container").style.opacity = "0.1";
        document.querySelector(".subcriber").innerHTML = `${val}`;
        btn2.onclick = function () {
            document.querySelector(".box").style.display = "none";
            document.querySelector(".container").style.opacity = "1";
        };
    } else {
        document.querySelector(".error").style.display = "inline-block";
    }
};
