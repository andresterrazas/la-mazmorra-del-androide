// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            // Lógica de autenticación (simplificada)
            if (username === "admin" && password === "admin123") {
                window.location.href = "admin-panel.html";
            } else {
                window.location.href = "user-panel.html";
            }
        });
    }
});
