class ProductsList{
    constructor(container = '.products'){
        this.container = container;
        this.goods = [];
//        this.allProducts = [];
        this._fetchProducts();
    }
    
    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
        ];
    }
    
    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const productObj = new ProductItem(product);
//            this.allProducts.push(productObj);
//            block.innerHTML += productObj.render();
            block.insertAdjacentHTML('beforeend',productObj.render());
            
        }
    }
    
    priceSum(){
        let sum = 0;
        for(let prod of this.goods){
            sum += prod.price;
        }
        console.log(sum);
    }
}

class ProductItem{
     constructor(product,img='https://placehold.it/200x150'){
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = img; 
    }
    
    render(){
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="some img">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

class cart{
    addProd(){
        
    }
    delProd(){
        
    }
    sumProd(){
        
    }
}

let list = new ProductsList();
list.render();
list.priceSum();




//const products = [
//    {id: 1, title: 'Notebook', price: 2000},
//    {id: 2, title: 'Mouse', price: 20},
//    {id: 3, title: 'Keyboard', price: 200},
//    {id: 4, title: 'Gamepad', price: 50},
//];
////Функция для формирования верстки каждого товара
//const renderProduct = (product,img='https://placehold.it/200x150') => {
//    return `<div class="product-item">
//                <img src="${img}">
//                <h3>${product.title}</h3>
//                <p>${product.price}</p>
//                <button class="buy-btn">Купить</button>
//            </div>`
//};
//const renderPage = list => {
//    document.querySelector('.products').innerHTML = list.map(item => renderProduct(item)).join('');
//};
//
//renderPage(products);