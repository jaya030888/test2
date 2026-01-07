const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
  });
});


let backtodashboard = function(){
  let backbtn = document.getElementsByClassName("back-btn")

  backbtn[0].addEventListener("click",function(){
    window.location.href = "./home.html"
  })
}