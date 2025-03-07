document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    // Simulación de registro
    alert('Registro exitoso');
    // Redirigir a la página de login
    window.location.href = 'login.html';
});
