

require('cypress-xpath');
import dashboardLocators from "../fixtures/dashboardLocators";
import methods from "../pages/Methods"
describe('İnclude dashboard test', () => {

  it('redirect to shirts category',()=>{
    methods.visit("https://demo.vercel.store/")
    methods.clickButton(dashboardLocators.shirtsLinkText)
  })
  

it('redirect to stickers category',()=>{
  methods.visit("https://demo.vercel.store/")
  methods.clickButton(dashboardLocators.stickersLinkText,5000)
})

it('search product',() =>{
  methods.visit("https://demo.vercel.store/")
  methods.fillInput(dashboardLocators.searchLinkText,'Acme T-Shirt')
})


it('verify dashboard page', ()=>{
  methods.visit("https://demo.vercel.store/")
  cy.contains('Stickers')
  cy.contains('All')
  cy.contains('Shirts')
})
it('About',()=>{
  methods.visit('https://demo.vercel.store/')
  methods.clickButton(dashboardLocators.aboutLinkText)
  /*cy.url().should('eq',"https://demo.vercel.store/about")    */
  methods.url("https://demo.vercel.store/about")
  methods.wait(1000)

})
it('Terms & Conditions',()=>{
  methods.visit('https://demo.vercel.store/')
  methods.clickButton(dashboardLocators.termsLinkText)
  methods.url("https://demo.vercel.store/terms-conditions")    
  methods.wait(1000)
})
it('Shipping & Return Policy',()=>{
  methods.visit('https://demo.vercel.store/')
  methods.clickButton(dashboardLocators.shippingLinkText)
  methods.url("https://demo.vercel.store/shipping-return-policy")    
  methods.wait(1000)
})
it('Privacy Policy',()=>{
  methods.visit('https://demo.vercel.store/')
  methods.clickButton(dashboardLocators.privacyLinkText)
  methods.url("https://demo.vercel.store/privacy-policy")    
  methods.wait(1000)

})
it('FAQ',()=>{
  methods.visit('https://demo.vercel.store/')
  methods.clickButton(dashboardLocators.faQLinkText)
  methods.url("https://demo.vercel.store/frequently-asked-questions")    
  methods.wait(1000)
})



})