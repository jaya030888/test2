function saveToLocalStorage(){

  const user = document.getElementById("userInput").value;

  const password = document.getElementById("password").value;


  // Simple logic

  if (user === "" || password === ""){
    alert("Please enter your password");
    return;
  }


  //  local storage

  localStorage.setItem("user", user);
  localStorage.setItem("password", password);
//   alert(``)

}