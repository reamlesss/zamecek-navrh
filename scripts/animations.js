const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      const animationType = entry.target.getAttribute("data-animation");

      switch (animationType) {
          case 'opacity-up':
          entry.target.classList.add('opacity-up');  
        case 'slide-up':
          entry.target.classList.add('slide-up');
      }
    }
  });
});

const opacityHiddenElements = document.querySelectorAll('.opacity-down');
opacityHiddenElements.forEach((el) => observer.observe(el));
const hiddenDownElements = document.querySelectorAll('.hidden-down');
hiddenDownElements.forEach((el) => observer.observe(el));
// const leftHiddenElements = document.querySelectorAll(".hidden-left");
// leftHiddenElements.forEach((el) => observer.observe(el));
// const rightHiddenElements = document.querySelectorAll(".hidden-right");
// rightHiddenElements.forEach((el) => observer.observe(el));
