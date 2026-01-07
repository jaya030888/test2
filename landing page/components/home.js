let open = document.querySelectorAll(".nav-item")

let opendashboard = function(){
     open[0].addEventListener("click",function(){
        window.location.href="./home.html"
     })
}

let openleaderboard = function(){
     open[1].addEventListener("click",function(){
        window.location.href="./leaderboard.html"
     })

     let go = document.querySelector(".green-link")

     go.addEventListener("click",function(){
        window.location.href="./leaderboard.html"
     })
}

let openprogress = function(){
     open[2].addEventListener("click",function(){
        window.location.href="./progress.html"
     })
}

let opensetting = function(){
     open[3].addEventListener("click",function(){
        window.location.href="./setting.html"
     })
}


let start = function(){

    let startbtn = document.querySelector(".start-btn")

    startbtn.addEventListener("click",function(){
        window.location.href = "./hello.html";
    })
}


let subjects = document.querySelectorAll(".subject-card")

let html = function(){

    subjects[0].addEventListener("click",function(){
        window.location.href = "./html_qs.html";
    })
}

let css = function(){

    subjects[1].addEventListener("click",function(){
        window.location.href = "./css_qs.html";
    })
}

let js = function(){

    subjects[2].addEventListener("click",function(){
        window.location.href = "./js_qs.html";
    })
}

let python = function(){

    subjects[3].addEventListener("click",function(){
        window.location.href = "./python_qs.html";
    })
}

let maths = function(){

    subjects[4].addEventListener("click",function(){
        window.location.href = "./maths_qs.html";
    })
}

let english = function(){

    subjects[5].addEventListener("click",function(){
        window.location.href = "./english_qs.html";
    })
}

