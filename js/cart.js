const cart = {
    items: [],
    totalPrice: 0,
    count: 0,
    getTotalPrice () {
    return `${this.totalPrice}`
    },

    add (nameItem, priceItem, countItem) {
        return this.items.push({nameItem, priceItem, countItem});
    },

    increaseCount () {
        const totalCount = this.items.reduce((acc, item, i, arr) => {
            return acc + item.countItem;
            }, 0)
        console.log(totalCount);
    },

    calculateItemPrice () {
        const sumPriceItems = cart.items.reduce((acc, item, i, arr) => {
            cart.totalPrice = acc + (item.priceItem * item.countItem);
            return cart.totalPrice;
            }, 0)
        
        console.log('sumItems: ', sumPriceItems);
    },

    clear () {
        cart.items = [];
        console.log('cart.items: ', cart.items);
        cart.totalPrice = 0;
        console.log('cart.totalPrice: ', cart.totalPrice);
        count = 0;
        console.log('count: ', count);
    },

    print() {
        const itemsStr = JSON.stringify(cart.items);
        console.log(itemsStr);
        console.log(this.totalPrice);

    },
};



cart.add ('toy', 5, 2);
cart.add ('doll', 3, 1);
cart.add ('book', 4, 5);
console.log(cart.items);
cart.calculateItemPrice ()
cart.print();


