const price = document.getElementsByClassName('price')

const switcher = document.getElementById('toggle-check');

switcher.addEventListener('change', () => {
    for( let i = 0; i < price.length; i++ ) {
        price[i].classList.toggle('hide');
    }
})