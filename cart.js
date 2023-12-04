

function saveCartToLocalStorage() {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

// Function to calculate cart total
function calculateCartTotal(cart) {
    return Object.values(cart).reduce((total, item) => total + item.price * item.quantity, 0);
}



// Additional code to update the cart on the cart.html page
function updateCartOnCartPage() {
    const cartItemsElement = document.getElementById("cart-items");
    cartItemsElement.innerHTML = "";

    for (const itemName in cartItems) {
        const item = cartItems[itemName];
        if (item.quantity > 0) {
            const li = document.createElement("li");
            li.textContent = `${itemName} - Quantity: ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
            cartItemsElement.appendChild(li);
        }
    }

    const cartTotalElement = document.getElementById("cart-total");
    cartTotalElement.textContent = cartTotal.toFixed(2);
}

// Additional code to update the cart on the cart.html page on page load
document.addEventListener("DOMContentLoaded", function () {
    updateCartOnCartPage();
});

