/// <reference types="Cypress" />
import HomePage from '../examples/pageObjects/HomePage'
import HotelauswahlPage from '../examples/pageObjects/HotelauswahlPage'
import Hoteldetails from '../examples/pageObjects/Hoteldetails'
describe('Test Suite for Invia Travels', function() {

    before(function(){
      cy.fixture('inputdata').then(function(data){
        this.data = data
      })

    })
    it('Open Browser', function() {
        
      const homePage = new HomePage()
      const hotelauswahlPage= new HotelauswahlPage()
      const hoteldetailsPage = new Hoteldetails()
      //cy.viewport(1000, 660)

      homePage.visitHomePage()
      homePage.getText_HomePage().should((element) => {
        const name = element.text()
        assert.include(name, this.data.text_homepage ,this.data.start_testcase)
      })
      homePage.getEditBox_ToCity().type(this.data.city) //('Sizilien')
      cy.wait(1000)
      homePage.getDropDownCity_FirstOption().click({ force: true });
        
      homePage.getButton_StartDate().click()
      for(let click_count = 0; click_count < this.data.monthcount; click_count ++){
          homePage.getButton_NextMonthArrow().click()
      }

      homePage.getCalender_ToDate().click()
      cy.wait(2000)
      homePage.getCalender_ReturnDate().click({ force: true })
         
      homePage.getButton_Submit().click()
      cy.wait(2000)
      
      
      hotelauswahlPage.getButton_Summary().click()
      hotelauswahlPage.getCalender_ToDate().click()
      hotelauswahlPage.getCalender_Date13().click()
      cy.wait(1000)
      hotelauswahlPage.getCalender_Date20().click()
      homePage.getButton_Submit().click()
      cy.wait(8000)

      //Question 2
      hotelauswahlPage.getButton_Filter().click()
      hotelauswahlPage.getButton_SmileyRating().click() 
      hotelauswahlPage.getButton_5PointsRating().click()
      hotelauswahlPage.getButton_ApplyFilter().click()
      cy.wait(3000)

      //Question 3
      hotelauswahlPage.getButton_SortOptions().select(this.data.highestprice).should('have.value',this.data.descending)
      cy.wait(7000) 

      //Question 4
      hotelauswahlPage.getButton_AboutOffer().invoke('removeAttr','target').click()
      cy.wait(6000)
      let nameHotel = null
      cy.get('section#hotelInfoBox div._styling-h1.hotel-name > div').should((element) => {
        nameHotel = element.text()
      })
      
    
        //Question5
      hotelauswahlPage.getButton_Summary().click()
      //code for drag drop
      hoteldetailsPage.getDepartureTime_StartRange().invoke('attr', 'style', this.data.departure_start_range)
      .invoke('attr','aria-valuenow', this.data.departure_start_range_valuenow)
      .invoke('attr','aria-valuetext', this.data.departure_start_range_valuetext) 

      hoteldetailsPage.getDepartureTime_EndRange().invoke('attr', 'style', this.data.departure_end_range)
      .invoke('attr','aria-valuenow', this.data.departure_end_range_valuenow)
      .invoke('attr','aria-valuetext', this.data.departure_end_range_valuetext)
      
      hoteldetailsPage.getDepartureTime_Start_Style().invoke('attr','style', this.data.time_range_style)
      //return time
      hoteldetailsPage.getRetuenTime_EndRange().invoke('attr','style', this.data.return_end_range)
      .invoke('attr','aria-valuenow', this.data.return_end_range_valuenow)
      .invoke('attr','aria-valuetext', this.data.return_end_range_valuetext)
      cy.wait(1000)

/
        //Question 6
      cy.wait(2000)
      hoteldetailsPage.getCalender_ArrivalDate13().check()

        //Question 7
      hoteldetailsPage.getButton_DirectFlight().click()
      homePage.getButton_Submit().click()
      cy.wait(5000)
      const count = hoteldetailsPage.getDocument_ListOFDirectFlight()
      //cy.log(count)

      //Question 8
      hoteldetailsPage.getText_FlightTimeForFirstFlight().each(($element, index, $list) => {
        const complete_time = $element.text()
        var time = complete_time.split(" ")
        let start_time = time[0].split(this.data.spilt_parameter_colon)
        let start_time_hour = start_time[0]
        let arrival_time = time[2].split(this.data.spilt_parameter_colon)
        let arrival_time_hour = arrival_time[0]
        assert.isAbove(Number(start_time_hour),Number(this.data.departure_range_start)) & (assert.isBelow(Number(start_time_hour),Number(this.data.departure_range_end)))
        expect.isAbove(Number(arrival_time_hour),Number(this.data.return_range_start)) & (assert.isBelow(Number(arrival_time_hour),Number(tjhis.data.return_range_end)))
      })

      //Question 9
      hoteldetailsPage.getButton_ForBooking().then(function(element){
        const url = element.prop('href')
        cy.visit(url)
      })
       cy.wait(3000)

      //Question 10
      hoteldetailsPage.getText_Accomodation().should((element) => {
        const name = element.text()
        assert.include(name, nameHotel,this.data.hotelname )

      })

    })

  }) 

