const form = document.getElementById('orderForm')

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    
    const firstName = formData.get('first_name');
    const lastName = formData.get('last_name');
    const address = formData.get('address');
    const artProduct = formData.get('ART_product');
    const productsNumber = formData.get('products-number') || 'не обрано'; 
    const stickerss = formData.get('stickerss') ? 'Так' : 'Ні';
    const QRcode = formData.get('QR_code') ? 'Так' : 'Ні';
    const comments = formData.get('comments') || 'немає'; 
    
    const message = `
       Ваше замовлення:
       Ім'я: ${firstName}
       Прізвище: ${lastName}
       Адреса: ${address}
       Товар: ${artProduct}
       Розмір набору: ${productsNumber}
       Стікери: ${stickerss}
       QR код: ${QRcode}
       Коментар: ${comments}
    `;
    
    alert (message);
    console.log (message);

});

