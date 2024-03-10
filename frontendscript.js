let date = new Date();
let year = date.getFullYear();
document.getElementById('year').innerHTML = year;

// Header
customElements.define("main-footer", Footer);

// To Top
const amountScrolled = 200;
const btnBackToTop = document.querySelector('.back-to-top');

const backToTop = () => window.scrollTo({top: 0, behavior: 'smooth'});
const toggleBtnBackToTop = () => {
    window.scrollY > amountScrolled
        ? btnBackToTop.classList.add('back-to-top_show')
        : btnBackToTop.classList.remove('back-to-top_show');
}

btnBackToTop.addEventListener('click', backToTop);
window.addEventListener('scroll', toggleBtnBackToTop);

