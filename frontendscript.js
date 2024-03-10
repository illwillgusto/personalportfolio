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
                    <img src="assets/dev imgs/email.png" alt="email me"> &nbsp; &nbsp;
                    waltonjrwillie@gmail.com</a></span>
                </div>
                <div class="quike-links text-center">
                    <ul>
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li>
                            <a href="services.html">Services</a>
                        </li>
                        <li>
                            <a href="projects.html">Projects</a>
                        </li>
                        <li><a href="about.html">About Me</a></li>
                    </ul>
                </div>
                <div class="social-media">
                    <a href="https://www.linkedin.com/in/will-walton-jr/"><img src="assets/dev imgs/LinkedIn Circled.png" alt="linkedin"></a>
                    <a href="https://github.com/illwillgusto"><img src="assets/dev imgs/github (7).png" alt="github"></a>
                </div>
            </div>
        </div>
        </div>
    </footer>
        `;
    }
}