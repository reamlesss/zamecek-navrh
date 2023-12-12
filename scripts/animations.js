const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      const animationType = entry.target.getAttribute("data-animation");

      switch (animationType) {
          case 'opacity-up':
            entry.target.classList.add('opacity-up');  
      }
    }
  });
});

const downHiddenElements = document.querySelectorAll('.opacity-down');
downHiddenElements.forEach((el) => observer.observe(el));
// const leftHiddenElements = document.querySelectorAll(".hidden-left");
// leftHiddenElements.forEach((el) => observer.observe(el));
// const rightHiddenElements = document.querySelectorAll(".hidden-right");
// rightHiddenElements.forEach((el) => observer.observe(el));
