const products = [
    {id: 1, img: 'img/note.png', title: 'Notebook', price: 2000},
    {id: 2, img: 'img/mouse.png', title: 'Mouse', price: 20},
    {id: 3, img: 'img/keyboard.png', title: 'Keyboard', price: 200},
    {id: 4, img: 'img/joystick.png', title: 'Gamepad', price: 50},
];
const renderProduct = (img, title, price) => {
    return `<div class="product-item">
                <img src="${img}" style="height: 75px; width: 95px">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    document.querySelector('.products').innerHTML = list.map(item => renderProduct(item.img, item.title, item.price)).join('');
};

renderPage(products);