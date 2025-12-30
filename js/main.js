const btnDarkMode = document.querySelector(".dark-mode-btn");
// check localstorage
if (localStorage.getItem("darkMode") == "dark") {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
}
// button 
btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    const isDark = document.body.classList.toggle("dark");
//save position
    if (isDark) {
        localStorage.setItem("darkMode","dark")
    } else{
        localStorage.setItem("darkMode","light")
    }

}

// btn go top
const goTopBtn = document.querySelector(".btn-go-top");

goTopBtn.addEventListener("click",gotop);
window.addEventListener("scroll", trackScroll);

function trackScroll() {
    const offset = window.scrollY; 
    const coords = document.documentElement.clientHeight;

    if (offset > coords) {
        goTopBtn.classList.add("btn-go-top--show");
    } else {
        goTopBtn.classList.remove("btn-go-top--show");
    }
}




function gotop() {
    if (window.pageYOffset > 0){
        window.scrollBy(0, -10)
        setTimeout(gotop, 0)

    }
}