document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('serviceForm');
    const optionsDiv = document.getElementById('options');
    const calculateButton = document.getElementById('calculateServiceButton');
    const result = document.getElementById('serviceResult');

    let serviceOptions = {
        type1: { price: 100 },
        type2: { price: 200, options: ["Опция 1", "Опция 2"] },
        type3: { price: 300, property: "Специальное свойство" }
    };

    form.addEventListener('change', function() {
        const selectedType = form.serviceType.value;
        optionsDiv.innerHTML = '';

        if (selectedType === 'type2') {
            let select = document.createElement('select');
            serviceOptions.type2.options.forEach(option => {
                let optionElement = document.createElement('option');
                optionElement.value = option;
                optionElement.textContent = option;
                select.appendChild(optionElement);
            });
            optionsDiv.appendChild(select);
        } else if (selectedType === 'type3') {
            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = 'propertyCheckbox';
            let label = document.createElement('label');
            label.textContent = serviceOptions.type3.property;
            optionsDiv.appendChild(checkbox);
            optionsDiv.appendChild(label);
        }
    });

    calculateButton.addEventListener('click', function() {
        const quantity = parseInt(form.quantity.value);
        const selectedType = form.serviceType.value;
        let totalPrice = serviceOptions[selectedType].price * quantity;

        if (selectedType === 'type2') {
            let selectedOption = optionsDiv.querySelector('select').value;
            result.textContent = `Стоимость услуги для ${selectedOption}: ${totalPrice} руб.`;
        } else if (selectedType === 'type3' && optionsDiv.querySelector('#propertyCheckbox').checked) {
            result.textContent = `Стоимость услуги с ${serviceOptions.type3.property}: ${totalPrice} руб.`;
        } else {
            result.textContent = `Общая стоимость: ${totalPrice} руб.`;
        }
    });
});
