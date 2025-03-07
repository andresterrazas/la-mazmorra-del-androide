document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Simulación de login
    if (email === 'usuario@example.com' && password === 'contraseña') {
        alert('Inicio de sesión exitoso');
        // Redirigir a la página principal u otra página
        window.location.href = 'index.html';
    } else {
        alert('Correo electrónico o contraseña incorrectos');
    }
});
