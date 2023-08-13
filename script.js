ScrollReveal().reveal('.container', { delay: 500 });

const luz = document.querySelector('.checkbox');
const st = document.querySelector('.stack-tecnologico');
const rootStyles = document.documentElement.style;

function handleLuz(){
    if (luz.checked){
        rootStyles.setProperty('--bg-color', 'aliceblue');
        rootStyles.setProperty('--text', '#161616');
        rootStyles.setProperty('--text2', 'rgba(54, 51, 51, 0.2)');
        rootStyles.setProperty('--bg1', '#FFD6E0');
        rootStyles.setProperty('--bg2', '#FFEF9F');
        st.style.opacity = '1'
    } else{
        rootStyles.setProperty('--text', 'aliceblue');
        rootStyles.setProperty('--bg-color', '#161616');
        rootStyles.setProperty('--text2', 'rgba(255, 255, 255, .2)');
        rootStyles.setProperty('--bg1', 'rgba(255, 255, 255, 0.1)');
        rootStyles.setProperty('--bg2', 'rgba(255, 255, 255, 0.05)');
        st.style.opacity = '0.6'
    }
    
}


luz.addEventListener('change', handleLuz);


const menuToggle = document.getElementById('menu');
const container = document.querySelector('header');
const navbar = document.querySelector('.nav-bar');

menuToggle.addEventListener('change', function() {
    container.classList.toggle('responsive');
    navbar.classList.toggle('active')
});