const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');
const counter = document.querySelectorAll('.counter');
let scrollStarted = false;

btn.addEventListener('click', navtoggle);
document.addEventListener('scroll', scrollPage);

function navtoggle() {
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle('stop-scrolling');
    menu.classList.toggle('show-menu');
}

function scrollPage() {
    const scrollPos = window.scrollY;

    if (scrollPos > 100 && !scrollStarted) {
        countUp();
        scrollStarted = true;
    }else if(scrollPos < 100 && !scrollStarted) {
        reset();
        scrollStarted = false;
    }
}

function countUp() {
    counter.forEach((counter) => {
        counter.innerText = '0';

        const updateCounter = () => {
            // Get count target
            const target = +counter.getAttribute('data-target');
            // Get current counter value
            const c = +counter.innerText;

            // Create an increment
            const increment = target / 100;

            if (c < target){
                counter.innerText = `${Math.ceil(c + increment)}`;

                setTimeout(updateCounter, 25);
            }else{
                counter.innerText = target;
            }

        };   

        updateCounter();
    });
}

countUp();

function reset() {
    counter.forEach((counter) => (counter.innerHTML = '0'));
}