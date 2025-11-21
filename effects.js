// Smooth Fade-In Effect
document.addEventListener("DOMContentLoaded", () => {
    console.log("Effects Loaded");

    const fadeElements = document.querySelectorAll(".fade");

    fadeElements.forEach((el, i) => {
        setTimeout(() => {
            el.classList.add("show");
        }, i * 200);
    });
});


// Parallax Scroll Effect
window.addEventListener("scroll", () => {
    const parallax = document.querySelector(".parallax");

    if (parallax) {
        let offset = window.scrollY * 0.3;
        parallax.style.transform = `translateY(${offset}px)`;
    }
});


// Hover Glow Effect
document.querySelectorAll(".glow").forEach(el => {
    el.addEventListener("mousemove", (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        el.style.setProperty("--x", `${x}px`);
        el.style.setProperty("--y", `${y}px`);
    });
});
