const ikan1 = document.getElementById('ikan-tutup');
const stats = document.getElementById('goldfish-clicked');
const clicks_seconds = document.getElementById("clicks-per-second")
const login = document.getElementById("login")
const login_box = document.querySelector(".login-box")
const username = document.getElementById ("username")
const password = document.getElementById ("password")
const loginBtn = document.getElementById ('loginBtn')
Login.addEventListener("click", ()=> {
    login_box.style.display="flex";
});
document.getElementById("loginBtn").addEventListener("click", () => {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  if (user === "admin" && pass === "123") {
    login.textContent = user; 
    setTimeout(() => {
      loginModal.style.display = "none";
    }, 1000);
  } else {
    loginMessage.textContent = "Wrong username or password!";
    loginMessage.style.color = "red";
  }
});

const openImg = "ikan.jpeg";
const closeImg = "ikan2.png";
let count = 0; 
let cps = 0;
function pressFish() {
    ikan1.src = openImg;
    count++;
    cps++;
    stats.textContent = count;
}
function closeFish() {
    ikan1.src = closeImg;
}

setInterval(() => {
    clicks_seconds.textContent = cps + "cps"
    cps = 0;
}, 1000);

ikan1.addEventListener("mousedown",pressFish);
ikan1.addEventListener("mouseup",closeFish);
ikan1.addEventListener("mouseleave",closeFish);

