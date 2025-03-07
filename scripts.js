document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const inventoryForm = document.getElementById('inventoryForm');
    const supplierForm = document.getElementById('supplierForm');
    const checkoutForm = document.getElementById('checkoutForm');
    const checkoutButton = document.getElementById('checkoutButton');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Inicio de sesión exitoso');
            window.location.href = 'dashboard.html';
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
                <td><button onclick="deleteRow(this)">Eliminar</button></td>
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
                <td><button onclick="deleteRow(this)">Eliminar</button></td>
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
});

function deleteRow(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
