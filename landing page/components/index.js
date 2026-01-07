let login = function () {
    let loginbtn = document.getElementById("loginbtn");
    let start = document.getElementById("start")

    if (loginbtn) {
        loginbtn.addEventListener("click", function () {
            window.location.href = "./web_login.html";
        });
    }

    if (start) {
        start.addEventListener("click", function () {
            window.location.href = "./web_login.html";
        });
    }
};

let signup = function(){
    let signupbtn = document.getElementById("signupbtn")

    signupbtn.addEventListener("click", function () {
        window.location.href = "./signup.html"
    })
}


let startdemo = function(){

    let startdemo = document.getElementById("startdemo") 

    startdemo.addEventListener("click",function(){
        window.location.href="./hello.html"
    })
}

