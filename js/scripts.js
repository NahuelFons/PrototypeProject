// Horizontal Scroll
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest"
            });
        });
    });

    const nextSectionButton = document.getElementById("nextSectionButton");
    const sections = document.querySelectorAll(".section");
    let currentSectionIndex = 0;

    nextSectionButton.addEventListener("click", function() {
        currentSectionIndex = (currentSectionIndex + 1) % sections.length;
        sections[currentSectionIndex].scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
        });
    });
});





document.addEventListener('DOMContentLoaded', () => {
    const imageModal = document.getElementById('imageModal');
    const carouselInner = document.querySelector('#carouselImages .carousel-inner');

    imageModal.addEventListener('show.bs.modal', (event) => {
        const button = event.relatedTarget; // Button that triggered the modal
        const images = JSON.parse(button.getAttribute('data-images'));

        // Clear existing carousel items
        carouselInner.innerHTML = '';

        images.forEach((src, index) => {
            const item = document.createElement('div');
            item.classList.add('carousel-item');
            if (index === 0) item.classList.add('active');

            const img = document.createElement('img');
            img.src = src;
            img.classList.add('d-block', 'w-100');
            img.alt = 'Image';

            item.appendChild(img);
            carouselInner.appendChild(item);
        });
    });
});
