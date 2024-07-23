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