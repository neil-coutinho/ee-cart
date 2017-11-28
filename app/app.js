//Returns an object with method and properties for a shopping cart
var app = (function() {
    let cart = [];
    let price = 0;
    const tax = 12.5;
    const items = [{
        id: 1,
        name: 'Dove Soap',
        price: 39.99
    },{
        id: 2,
        name: 'Axe Deo',
        price: 99.99
    }];

    //function to calculate total
    function _calcTotal(withTax) {
        price = 0;
        cart.forEach(function(item) {
            price += item.price;
        });

        if(withTax){
          let taxAmt = _calcTax();
          return parseFloat(price.toFixed(2)) + taxAmt;
        } else{
          return parseFloat(price.toFixed(2));
        }


    }

    //function to calculate cart tax
    function _calcTax() {
        let total = 0;
        cart.forEach(function(item) {
            total += (item.price * (tax/100));
        });


        return parseFloat(Math.round(total.toFixed(2)));

    }

    return {

        //function to get private available items array
        getItems: function() {
            return items;
        },

        //function to get private cart array
        getCart: function() {
            return cart;
        },

        //function to add an item to the cart if it is available in items
        addToCart: function(itemId) {
            // console.log(itemId);
            // console.log(typeof itemId);
            // console.log(isNaN(itemId));
            if (!itemId) {
                return 'item id parameter is required';
            }

            if (typeof itemId != 'number') {
                return 'invalid item id type passed';
            }

            let index = items.findIndex(item => item.id == itemId);

            if (index == -1) {
                return 'item not found';

            } else {
                cart.push(items[index]);
                return true;
            }
        },
        //get total price of all items in the cart
        getTotal: function(withTax) {
            return _calcTotal(withTax);
        },
        //get total price of all items in the cart inclusive of tax
        getTax: function() {
            return _calcTax();
        },
        //clear out items in the cart
        emptyCart: function() {
            cart = [];

        }

    };
})();

module.exports = app;
