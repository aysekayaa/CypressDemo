require('cypress-xpath');
import methods from "../pages/Methods"
import productDetail from "../fixtures/productDetail";
import dashboardLocators from "../fixtures/dashboardLocators";
import searchResult from "../fixtures/searchResult";
describe('Includes search results test scenarios', () => {
  
    it('Search product white color type and 6X8 size', () => {
        methods.visit('https://demo.vercel.store/')
        methods.fillInput(dashboardLocators.searchProductInputText,'Acme Drawstring Bag{enter}')
        methods.clickButton(searchResult.searchResultProduct)
        methods.wait(1000)
        methods.clickButton(productDetail.colorWhiteType,1000)
        methods.clickButton(productDetail.productSizeType,1000)
        methods.clickButton(productDetail.addToCartButton)
        methods.shouldHaveText(productDetail.addedProductText,'Acme Drawstring Bag')
        methods.shouldHaveText(productDetail.addedProductTypes,'White / 6 x 8 inch')
      })
      it.only('Search product black color type and 7X9 size', () => {
        methods.visit('https://demo.vercel.store/')
        methods.fillInput(dashboardLocators.searchProductInputText,'Acme Drawstring Bag{enter}')
        methods.clickButton(searchResult.searchResultProduct)
        methods.wait(1000)
        methods.clickButton(productDetail.colorBlackType,1000)
        methods.clickButton(productDetail.productSecondSizeType,1000)
        methods.clickButton(productDetail.addToCartButton)
        methods.shouldHaveText(productDetail.addedProductText,'Acme Drawstring Bag')
        methods.shouldHaveText(productDetail.addedSecondProductTypes,'Black / 7 x 9 inch')
        methods.wait(3000)
        methods.clickButton(dashboardLocators.ekle)
        //methods.fiyatKont(dashboardLocators.fiyatKont,'&14,00 USD')
       // methods.ürünEkle(dashboardLocators.xlink) //sepeti boşaltır.
    


      })
})

