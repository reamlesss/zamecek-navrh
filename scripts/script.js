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