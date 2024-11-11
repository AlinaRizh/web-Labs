document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('orderForm');
    const calculateButton = document.getElementById('calculateButton');
    const result = document.getElementById('result');

    calculateButton.addEventListener('click', function() {
        const quantity = parseInt(form.quantity.value);
        const productPrice = parseInt(form.product.value);

        if (isNaN(quantity) || quantity <= 0) {
            result.textContent = "Введите корректное количество.";
        } else {
            const totalPrice = quantity * productPrice;
            result.textContent = `Общая стоимость: ${totalPrice} руб.`;
        }
    });
});
