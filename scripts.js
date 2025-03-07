document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const inventoryForm = document.getElementById('inventoryForm');
    const supplierForm = document.getElementById('supplierForm');
    const checkoutForm = document.getElementById('checkoutForm');
    const checkoutButton = document.getElementById('checkoutButton');
    const logoutButton = document.getElementById('logoutButton');

    let cart = [];

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            if (email === 'lamazmorra@gmail.com' && password === '123') {
                alert('Inicio de sesión exitoso');
                window.location.href = 'dashboard.html';
            } else {
                alert('Correo electrónico o contraseña incorrectos');
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Registro exitoso');
            window.location.href = 'login.html';
        });
    }

    if (inventoryForm) {
        inventoryForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const productName = document.getElementById('productName').value;
            const stock = document.getElementById('stock').value;
            const inventoryTable = document.getElementById('inventoryTable').getElementsByTagName('tbody')[0];
            const newRow = inventoryTable.insertRow();
            newRow.innerHTML = `
                <td>${productName}</td>
                <td>${stock}</td>
                <td><button onclick="deleteRow(this)"><i class="fas fa-trash"></i></button></td>
            `;
            inventoryForm.reset();
        });
    }

    if (supplierForm) {
        supplierForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const supplierName = document.getElementById('supplierName').value;
            const contact = document.getElementById('contact').value;
            const suppliersTable = document.getElementById('suppliersTable').getElementsByTagName('tbody')[0];
            const newRow = suppliersTable.insertRow();
            newRow.innerHTML = `
                <td>${supplierName}</td>
                <td>${contact}</td>
                <td><button onclick="deleteRow(this)"><i class="fas fa-trash"></i></button></td>
            `;
            supplierForm.reset();
        });
    }

    if (checkoutButton) {
        checkoutButton.addEventListener('click', function() {
            window.location.href = 'checkout.html';
        });
    }

    if (checkoutForm) {
        checkoutForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Pago realizado con éxito');
            window.location.href = 'confirmation.html';
        });
    }

    if (logoutButton) {
        logoutButton.addEventListener('click', function() {
            alert('Sesión cerrada');
            window.location.href = 'index.html';
        });
    }

    function addToCart(name, price) {
        cart.push({ name, price });
        updateCart();
    }

    function updateCart() {
        const cartItems = document.getElementById('cartItems');
        cartItems.innerHTML = '';
        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <img src="https://via.placeholder.com/100x100?text=${item.name}" alt="${item.name}">
                <div class="details">
                    <h3>${item.name}</h3>
                    <p class="price">$${item.price.toFixed(2)}</p>
                </div>
                <div class="actions">
                    <button onclick="removeFromCart(${index})"><i class="fas fa-trash"></i></button>
                </div>
            `;
            cartItems.appendChild(cartItem);
        });
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        updateCart();
    }
});

function deleteRow(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel img');
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % 3;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + 3) % 3;
    showSlide(currentSlide);
}

document.addEventListener('DOMContentLoaded', function() {
    showSlide(currentSlide);
});
