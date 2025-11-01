document.addEventListener('DOMContentLoaded', function () {

const playForFreeBtn = document.querySelector('.rWNvbgEJrvci');
if (playForFreeBtn) {
playForFreeBtn.addEventListener('click', function () {
const iframe = document.querySelector('#KbSQcYeTasEX');
const demoLink = this.getAttribute('data-demo-link');

iframe.src = demoLink;

document.querySelector('.MfzuXNyyxOpX__iframe').style.display = 'block';
});
}
const iframe = document.querySelector('#KbSQcYeTasEX');
if (iframe) {
iframe.allowFullscreen = false;
}

// demo hendler
function handleResize() {
    let iframe = document.querySelector(".MfzuXNyyxOpX__iframe");
    let parentElement = document.querySelector(".MfzuXNyyxOpX");

    if (iframe && parentElement) {
        if (window.innerWidth <= 576) {
            let observer = new MutationObserver(() => {
            let displayStyle = window.getComputedStyle(iframe).display;
                if (displayStyle === "block") {
                    parentElement.style.minHeight = "550px";
                } else {
                    parentElement.style.minHeight = "";
                }
            });
            observer.observe(iframe, { attributes: true, attributeFilter: ["style"] });
        }
    }
}

handleResize();

window.addEventListener("resize", handleResize);

// current year
const currentYear = new Date().getFullYear();
const yearElement = document.querySelector('.inside-tfnVYnefzvWK__year');
if (yearElement) {
yearElement.textContent = currentYear;
}

//Btn to top
let btnUp = document.querySelector(".LctwJXjYtijr");
if (btnUp) {
btnUp.addEventListener("click", function (event) {
event.preventDefault();
window.scroll({
top: 0,
behavior: "smooth"
});
});

window.addEventListener("scroll", function () {
let scrollTop = document.body.scrollTop > 500 || document.documentElement.scrollTop > 500;
btnUp.style.display = scrollTop ? "block" : "none";
});
}


const toggleButton = document.querySelector('.boAosxgKmcxz_toggle');
const items = document.querySelector('.boAosxgKmcxz_items');

if (toggleButton && items) {
toggleButton.textContent = 'show';

toggleButton.addEventListener('click', function () {
items.classList.toggle('boAosxgKmcxz_items-show');

if (items.classList.contains('boAosxgKmcxz_items-show')) {
toggleButton.textContent = 'hide';
} else {
toggleButton.textContent = 'show';
}
});
}
});
