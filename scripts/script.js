function showGallery2(){
    const button =  document.getElementById('more-photos-button');
    const hideButton = document.getElementById('less-photos-button');
    hideButton.classList.remove('less-photos-button-hide');
    hideButton.classList.add('less-photos-button-show');
    button.style.display = 'none';


    const gallery2 = document.getElementById('gallery2');
    gallery2.classList.remove('gallery-container2-hidden');
    gallery2.classList.add('gallery-container2');
}
function hideGallery2(){
    const button =  document.getElementById('more-photos-button');
    const hideButton = document.getElementById('less-photos-button');
    hideButton.classList.add('less-photos-button-hide');
    hideButton.classList.remove('less-photos-button-show');
    button.style.display = 'flex';

    const gallery2 = document.getElementById('gallery2');
    gallery2.classList.add('gallery-container2-hidden');
    gallery2.classList.remove('gallery-container2');
}




function showNewsText() {
    const hiddenText = document.getElementById('hidden-text');
    const button = document.getElementById('showMoreButton');


    if (hiddenText.classList.contains('card-text-hidden')) {
         button.textContent = 'Méně'
        hiddenText.classList.remove('card-text-hidden');
        hiddenText.classList.add('card-text-show');   
    } else {
        button.textContent = "Číst více"
        hiddenText.classList.remove('card-text-show');
        hiddenText.classList.add('card-text-hidden');
    }
}

function changeBackground() {
    const background = document.getElementById('mid-text');

    if (background.classList.contains('mid-bg-1')) {
        background.classlist.remove('mid-bg-1');
        background.classList.add('mid-bg-2');
    }
    else if (background.classlist.contains('mid-bg-2')) {
        background.classlist.remove('mid-bg-2');
        background.classList.add('mid-bg-3');
    }
    else if (background.classlist.contains('mid-bg-3')) {
        background.classlist.remove('mid-bg-3');
        background.classList.add('mid-bg-1');
    }
    
}
