let mybutton = document.getElementById("btn-back-to-top");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);
function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// function to toggle show/hide password in register page
function Toggle() {
  var temp1 = document.getElementById("InputPwd");
  var temp2 = document.getElementById("confirmPwd");
  if (temp1.type === "password" && temp2.type === "password") {
    temp1.type = "text";
    temp2.type = "text";
  } else {
    temp1.type = "password";
    temp2.type = "password";
  }
}
