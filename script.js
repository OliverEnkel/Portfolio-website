function showEmail() {
    document.getElementById("email").textContent =
        "olivervasilij1581@outlook.com";
}

function toggleCV() {
    const details = document.getElementById("cv-details");
    details.style.display =
        details.style.display === "block" ? "none" : "block";
}
