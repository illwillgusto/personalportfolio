if (typeof window !== 'undefined')
window.onload = () => {
  const navMenu = document.querySelector('.nav-menu');
  const navItems = document.querySelectorAll('.nav-item');
  const hamburger = document.querySelector('.nav-toggle');
  
  const toggle = e => e.classList.toggle('is-active');
  const toggleNav = ({ target }) => Array.from(navMenu.classList).includes('is-active') ? toggle(navMenu) : null;

  hamburger.addEventListener('click', () => toggle(navMenu, 'is-active'));
  Array.from(navItems).forEach(e => e.addEventListener('click', toggleNav));
}

const time = new Date().getHours();
					let greeting;
					
					if (time < 12) {
						greeting = "Good Morning, from"
					}	else if (time > 12 && time < 17) {
						greeting = "Good Afternoon, from"
					}	else {
						greeting = "Good Evening, from"
					}
					
					document.getElementById("speak").innerHTML = greeting;
					