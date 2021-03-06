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

  test('typeof getTax', () => {
    assert.isNumber(ap.getTax(), 'Function should return tax amount for cart items');
  });
  test('The user adds 4 items to the shopping cart', () => {
    ap.emptyCart();
    console.log('ADD 2 DOVE SOAPS')
    ap.addToCart(1);
    ap.addToCart(1);
    var cart = ap.getCart();

    console.log('ADD 2 AXE DEO')
    ap.addToCart(2);
    ap.addToCart(2);
    var cart = ap.getCart();
    console.log('Cart Size:'+ cart.length);
    console.log('Cart Items:', cart);
    console.log('Cart Total:',ap.getTotal());


    assert.strictEqual(ap.getTotal(), 279.96, 'The shopping cart should contain 5 Dove Soaps + 3 Axe Deos And the shopping cart’s total price should equal 279.96');
  });

  test('Tax for 39.99 x2 + 99.99x2 @12.5%', () => {
    ap.emptyCart();
    console.log('ADD 2 DOVE SOAPS')
    ap.addToCart(1);
    ap.addToCart(1);
    var cart = ap.getCart();

    console.log('ADD 2 AXE DEO')
    ap.addToCart(2);
    ap.addToCart(2);
    var cart = ap.getCart();
    console.log('Cart Size:'+ cart.length);
    console.log('Cart Items:', cart);
    console.log('Cart Total:',ap.getTotal());
    let cartTax = ap.getTax();
    console.log('Cart Tax Total:', cartTax);


    assert.strictEqual(cartTax, 35.00, '39.99 x2 + 99.99x2 @12.5%');
  });


  test('Get Total with tax parameter', () => {
    ap.emptyCart();
    console.log('ADD 2 DOVE SOAPS')
    ap.addToCart(1);
    ap.addToCart(1);
    var cart = ap.getCart();

    console.log('ADD 2 AXE DEO')
    ap.addToCart(2);
    ap.addToCart(2);
    var cart = ap.getCart();
    console.log('Cart Size:'+ cart.length);
    console.log('Cart Items:', cart);
    let total = ap.getTotal();
    console.log('Cart Total:',total);
    let cartTax = ap.getTax();
    console.log('Cart Tax Total:', cartTax);

    console.log('Cart Total inc Tax:',ap.getTotal(1));

    assert.isNumber(ap.getTotal(1), 'Function should return the total price inclusive of tax');
  });


  test('Main: 2 Dove + 2 Axe + Tax', () => {
    ap.emptyCart();
    console.log('ADD 2 DOVE SOAPS')
    ap.addToCart(1);
    ap.addToCart(1);
    var cart = ap.getCart();

    console.log('ADD 2 AXE DEO')
    ap.addToCart(2);
    ap.addToCart(2);
    var cart = ap.getCart();
    console.log('Cart Size:'+ cart.length);
    console.log('Cart Items:', cart);
    let total = ap.getTotal();
    console.log('Cart Total:',total);
    let cartTax = ap.getTax();
    console.log('Cart Tax Total:', cartTax);

    console.log('Cart Total inc Tax:',ap.getTotal(1));

    assert.strictEqual(ap.getTotal(1), 314.96 ,'Function should return the total price inclusive of tax');
  });












});
