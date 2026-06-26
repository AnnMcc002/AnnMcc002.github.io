const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
    backToTopButton.style.display =
        window.scrollY > 300 ? "block" : "none";
});

backToTopButton.addEventListener("click", function () {
    const duration = 700; // milliseconds
    const startPosition = window.scrollY;
    const startTime = performance.now();

    function scrollUp(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // ease-out: starts faster, slows near the top
        const easeOut = 1 - Math.pow(1 - progress, 3);

        window.scrollTo(0, startPosition * (1 - easeOut));

        if (progress < 1) {
            requestAnimationFrame(scrollUp);
        }
    }

    requestAnimationFrame(scrollUp);
});