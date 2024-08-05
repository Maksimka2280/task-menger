document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.main-content__item');


    items.forEach(item => {
        item.addEventListener('click', () => {

            items.forEach(i => {
                i.querySelector('.main-content__button').classList.remove('selected');
            });
            item.querySelector('.main-content__button').classList.add('selected');
        });
    });

})