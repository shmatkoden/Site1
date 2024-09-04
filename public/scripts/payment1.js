document.addEventListener("DOMContentLoaded", function() {
    const empireLink = document.querySelector("nav a[href='#']");
    const modal = document.getElementById("empireListModal");
    const closeModal = document.querySelector(".modal .close");

    // Открытие модального окна при клике на ссылку ИМПЕРИИ
    empireLink.addEventListener("click", function(event) {
        event.preventDefault();
        modal.style.display = "block";
    });

    // Закрытие модального окна при клике на крестик
    closeModal.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Закрытие модального окна при клике вне его содержимого
    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});