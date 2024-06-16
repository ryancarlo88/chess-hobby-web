document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const items = carousel.querySelectorAll('.carousel-item');
    let currentItem = 0;

    const updateCarousel = () => {
        items.forEach((item, index) => {
            item.classList.toggle('active', index === currentItem);
        });
    };

    document.querySelector('.carousel-control-prev').addEventListener('click', () => {
        currentItem = (currentItem === 0) ? items.length - 1 : currentItem - 1;
        updateCarousel();
    });

    document.querySelector('.carousel-control-next').addEventListener('click', () => {
        currentItem = (currentItem === items.length - 1) ? 0 : currentItem + 1;
        updateCarousel();
    });

    document.querySelectorAll('.expand-button').forEach(button => {
        button.addEventListener('click', (event) => {
            const content = event.target.nextElementSibling;
            content.classList.toggle('hidden');
        });
    });
});
