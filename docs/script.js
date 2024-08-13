// Toggle mobile navigation
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}

// Ensure the correct function declaration for DOMContentLoaded event

    document.addEventListener('DOMContentLoaded', function () {
        console.log("DOMContentLoaded event fired!");

        document.querySelector('form').addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent the default form submission

            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;

            if (username === "" || password === "") {
                alert("Please enter both username and password.");
                return;
            }

            // Perform your login logic here
            // For now, simulate a successful login
            alert("Login successful!");

            // Redirect to the E-commerce page after successful login
            window.location.href = "E-commerce.html";

        });
    });
    // Updated script.js


    function addToCart(productId) {
        // Here, you can implement the logic to add the product to the cart
        // For now, let's just log the product ID to the console
        console.log('Product added to cart:', productId);
    }

    // Wait for the DOM to be fully loaded
    document.addEventListener('DOMContentLoaded', function () {
        // Select all elements with the class 'cart'
        var addToCartButtons = document.querySelectorAll('.cart');

        // Attach a click event listener to each button
        addToCartButtons.forEach(function (button, index) {
            // Use the index as the product ID (you might want to use unique IDs in a real scenario)
            var productId = index + 1;

            button.addEventListener('click', function () {
                // Call the addToCart function with the corresponding product ID
                addToCart(productId);
            });
        });
    });
    // script.js

function addToCart(productId) {
    // Simulate a purchase process
    alert(`Product with ID ${productId} added to cart. Proceed to checkout for payment.`);
}
document.addEventListener("DOMContentLoaded", function() {
    // Add event listener for each remove icon
    var removeIcons = document.querySelectorAll('.remove-icon');

    removeIcons.forEach(function(icon) {
        icon.addEventListener("click", function() {
            removeCartItem(icon);
        });
    });
});

// Function to remove the cart item
function removeCartItem(icon) {
    // Get the table row corresponding to the icon
    var rowToRemove = icon.closest("tr");

    // Remove the row from the table
    rowToRemove.remove();
}






