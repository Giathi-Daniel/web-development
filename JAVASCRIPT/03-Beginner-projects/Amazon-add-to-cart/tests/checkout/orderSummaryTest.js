import {renderOrderSummary} from '../../scripts/checkout/orderSummary.js'
import {loadFromStorage, cart} from "../../data/cart.js";


describe('test suite: renderOrderSummary', () => {

    const productid1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6'
    const productid2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d'
    
    // js hooks (beforeEach method) in Jasmine
    beforeEach(() => {
        spyOn(localStorage, 'setItem') //not to update localSTORAGE

        document.querySelector('.js-test-container').innerHTML = `
            <div class="js-order-summary"></div>
            <div class="js-payment-summary"></div>
        `;

       spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([
                {
                    productId: productid1,
                    quantity: 2,
                    deliveryOptionId: '1'
                },
                {
                    productId: productid2,
                    quantity: 1,
                    deliveryOptionId: '2'
                }
            ]);
        })
        loadFromStorage()

        renderOrderSummary()
    })

    // 1. how the page looks
    it('displays the cart', () => {
        // check if the cart has two of the elements
        expect(
            document.querySelectorAll('.js-cart-item-container').length
        ).toEqual(2)

        // test the item quantity
        expect (
            document.querySelectorAll(`.js-product-quantity-${productid1}`).innerText
        ).toContain('Quantity: 2')

        expect(
            document.querySelectorAll(`.js-product-quantity-${productid2}`).innerText
        ).toContain('Quantity: 1')

        document.querySelector('.js-test-container').innerHTML = '';
    })

    // 2.  How the page behaves
    it('removes product from cart', () => {
        document.querySelector(`.js-delete-link-${productid1}`).click();

        expect(
            document.querySelectorAll('.js-cart-item-container').length
        ).toEqual(1)

        // check if our first product is no longer in the page
        expect (
            document.querySelector(`.js-item-container-${productid1}`)
        ).toEqual(null) // because we have already removed in the page

        // if the item exists (.not)
        expect (
            document.querySelector(`.js-item-container-${productid2}`)
        ).not.toEqual(null) 

        // after deleting is the cart array updated?
        expect(cart.length).toEqual(1)
        expect(cart[0].productId).toEqual(productid2)

        document.querySelector('.js-test-container').innerHTML = '';
    })
})