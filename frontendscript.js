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

// Footer
class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="section">
        <div class="container-fluid">
            <div class="footer">
                <div class="sort-note">
                    <a class="navbar-brand" href="webdev.html">Will Walton</a>
                    <p>I'm Will Walton, a junior Web Designer with front-end development skills. I'm enthusiastic about using my varied experiences to solve complex problems and craft enjoyable user experiences. 
                    My expertise lies in web development, front-end web development, and UI design.</p>
                    <hr style="margin: 20px 0; color: rgb(82, 82, 82); width: 60%;">
                    <span class="contact"><a href="mailto:waltonjrwillie@gmail.com" class="email">
                        `
    }
}