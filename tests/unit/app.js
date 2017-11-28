const { suite, test } = intern.getInterface('tdd');
const { assert } = intern.getPlugin('chai');
const ap = require('../../app/app.js');

suite('EE Shopping Cart', () => {
  test('check func return type', () => {
    console.log(ap);
    assert.isObject(ap, 'Function should return an object with methods and properties');
  });

  test('typeof getItems', () => {
    assert.isFunction(ap.getItems, 'Check if typeof getItems is a function');
  });

  test('return typeof getItems()', () => {
    console.log('Shopping Items:', ap.getItems());
    assert.isArray(ap.getItems(), 'Check if return value of  getItems() is an array');
  });

  test('typeof getCart', () => {
    //console.log(ap);
    assert.isFunction(ap.getCart, 'Check if typeof getCart is a function');
  });

  test('return typeof getCart()', () => {
    console.log('Shopping Cart:', ap.getCart());
    assert.isArray(ap.getCart(), 'Check if return value of  getCart() is an array');
  });

  test('call addToCart without a parameter should return error', () => {
    assert.strictEqual(ap.addToCart(), 'item id parameter is required');
  });

  test('call addToCart with incorrect type parameter', () => {
    assert.strictEqual(ap.addToCart('5'), 'invalid item id type passed');
  });

  test('call addToCart with id which IS NOT present in valid items', () => {
    assert.strictEqual(ap.addToCart(5), 'item not found', 'If passed itemId is not present in available items return error message');
  });


  test('call addToCart with id which IS present in valid items', () => {
    assert.strictEqual(ap.addToCart(1), true, 'If item is present in available items push item into cart');
  });

  test('cart size on addToCart success', () => {
    ap.addToCart(1);
    let cart = ap.getCart();
    //console.log(cart);
    assert.isNotEmpty(cart,'Cart size should be > 0 if an item is added to it');
  });

  test('typeof getTotal', () => {
    //console.log('Cart Items:',ap.getCart());
  //  console.log('Cart Total:',ap.getTotal())
    assert.isNumber(ap.getTotal(), 'Function should return cart items total price');
  });

  test('The user adds 5 Dove Soaps to the shopping cart', () => {
    ap.emptyCart();
    console.log('ADD 5 DOVE SOAPS')
    for(var i = 1; i<6; i++){
      ap.addToCart(1);
    }
    var cart = ap.getCart();
    console.log('Cart Size:'+ cart.length);
    console.log('Cart Items:', cart);
    console.log('Cart Total:',ap.getTotal());


    assert.strictEqual(ap.getTotal(), 199.95, 'The shopping cart should contain 5 Dove Soaps each with a unit price of 39.99 And the shopping cart’s total price should equal 199.95');
  });


  test('Another 3 Dove Soaps to the shopping cart', () => {

    console.log('ADD +3 DOVE SOAPS')
    for(var i = 1; i<4; i++){
      ap.addToCart(1);
    }
    var cart = ap.getCart();
    console.log('Cart Size:'+ cart.length);
    console.log('Cart Items:', cart);
    console.log('Cart Total:',ap.getTotal());


    assert.strictEqual(cart.length, 8, 'With prior 5 items an additional of 3 items should make the cart size to 8');
  });


  test('The user adds 8 Dove Soaps to the shopping cart', () => {
    ap.emptyCart();
    console.log('ADD 8 DOVE SOAPS')
    for(var i = 1; i<9; i++){
      ap.addToCart(1);
    }
    var cart = ap.getCart();
    console.log('Cart Size:'+ cart.length);
    console.log('Cart Items:', cart);
    console.log('Cart Total:',ap.getTotal());


    assert.strictEqual(ap.getTotal(), 319.92, 'The shopping cart should contain 5 Dove Soaps each with a unit price of 39.99 And the shopping cart’s total price should equal 319.92');
  });


});
