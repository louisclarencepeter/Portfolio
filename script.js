document.addEventListener("DOMContentLoaded", function () {
    const cookieBanner = document.getElementById("cookieBanner");
    const acceptButton = document.getElementById("acceptButton");

    acceptButton.addEventListener("click", function () {
        cookieBanner.style.display = "none";
    });
});

