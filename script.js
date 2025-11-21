console.log("Website Danish berhasil dimuat");

window.addEventListener("load", () => {
  // Fade-in setelah selesai loading
  const loading = document.getElementById("loading");
  const content = document.querySelector(".content");

  setTimeout(() => {
    loading.style.opacity = "0";
    loading.style.pointerEvents = "none";

    content.classList.remove("hidden");
  }, 700);
});

// Jika gambar error (termasuk 503), pakai fallback
document.querySelectorAll("img").forEach(img => {
  img.onerror = () => {
    console.warn("Gambar gagal dimuat, menggunakan fallback");
    img.src = "https://placehold.co/200x200?text=Image+Error";
  };
});
