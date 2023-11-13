window.addEventListener("scroll", function () {
    const midText = document.getElementById("mid-text");
    const navbar = document.getElementById("navbar");
    const navbg = document.getElementById('navbg');

   
    const rect = midText.getBoundingClientRect();

 
    if (rect.bottom < 5) {
        navbar.classList.remove('lightnav');
        navbar.classList.add('darknav');
        navbg.classList.remove('lightnavbg');
        navbg.classList.add('darknavbg');
    } else {
        navbar.classList.remove('darknav');
        navbar.classList.add('lightnav');
        navbg.classList.remove('darknavbg');
        navbg.classList.add('lightnavbg');
}});
