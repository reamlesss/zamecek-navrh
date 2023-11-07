window.addEventListener("scroll", function () {
    const midText = document.getElementById("mid-text");
    const navbar = document.getElementById("navbar");
   
    const rect = midText.getBoundingClientRect();

 
    if (rect.bottom < 5) {
        navbar.classList.remove('lightnav');
        navbar.classList.add('darknav');
    } else {
        navbar.classList.remove('darknav');
        navbar.classList.add('lightnav');
}});
