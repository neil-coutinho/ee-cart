//Returns an object with method and properties for a shopping cart
var app = (function() {
    let cart = [];
    let price = 0;
    const items = [{
        id: 1,
        name: 'Dove Soap',
        price: 39.99
    }];

    //function to calculate total
    function _calcTotal() {
        price = 0;
        cart.forEach(function(item) {
            price += item.price;
        });

        return parseFloat(price.toFixed(2));

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
        getTotal: function() {
            return _calcTotal();
        },
        //clear out items in the cart
        emptyCart: function() {
            cart = [];

        }

    };
})();

module.exports = app;
