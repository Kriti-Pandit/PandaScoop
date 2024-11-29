
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItemsContainer = document.getElementById('cart-items');
const totalAmountContainer = document.getElementById('total-amount');

let cart = [];

addToCartButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const itemName = button.getAttribute('data-name');
        const itemPrice = parseFloat(button.getAttribute('data-price'));

        const existingItem = cart.find(item => item.name === itemName);
        if (existingItem) {
            existingItem.quantity += 1; 
        } else {
            cart.push({ name: itemName, price: itemPrice, quantity: 1 }); 
        }

        updateCartUI();
    });
});


function updateCartUI() {
  
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<li>Your cart is empty</li>';
        totalAmountContainer.textContent = '0.00';
        return;
    }

    let totalAmount = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - £${item.price} x ${item.quantity}`;
        cartItemsContainer.appendChild(li);
        totalAmount += item.price * item.quantity;
    });

    totalAmountContainer.textContent = totalAmount.toFixed(2);
}
