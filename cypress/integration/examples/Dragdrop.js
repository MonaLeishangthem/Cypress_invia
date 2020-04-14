// <reference types="Cypress" />
import HomePage from '../examples/pageObjects/HomePage'
import HotelauswahlPage from '../examples/pageObjects/HotelauswahlPage'
describe('Test Suite for Invia Travels', function() {
    it('Open Browser', function() {
        
      const homePage = new HomePage();
      const hotelauswahlPage= new HotelauswahlPage();
      //cy.viewport(1000, 660)

      cy.visit("https://www.ab-in-den-urlaub.de/iberl/offers/adult/2/area/77/children/0/depAirport/5000%2C5001%2C5002%2C5003/depDate/06.06.2020/dest/77/duration/6_7-14/hotelAttributes/-1/hotelAttributesSport/-1/optCategory/-1/port/654/retDate/13.06.2020/switchAction/process/switchController/service-layer/switchDestinationField/input/ibeHotelPort/654/ibeHotelSorting/price%3Bdesc/mdAttributeGroups/rating5/nofollow/1/hotelId/26416/topHotelSelected/0/alternativeHotelSelected/0/hotelIdType/iff/multiRoomCount/1/page/1?asdd=aj2bb3bp1dk0lc0me1nt0or0pp1rc1si1tm1ts3tz1vc1vd2vw0xi1");
      cy.get("section#searchSummaryBanner button").click()
      cy.wait(4000)
       cy.get('div#departureTimeRange div > div:nth-child(1)>div:nth-child(1)').invoke('attr', 'style', 'left: 16.6782%;').invoke('attr','aria-valuenow', 16.7).invoke('attr','aria-valuetext', 240.00) 
      // cy.get('div#departureTimeRange div > div:nth-child(1)>div:nth-child(1)').invoke('attr','aria-valuenow', 16.7)
       //cy.get('div#departureTimeRange div > div:nth-child(1)>div:nth-child(1)').invoke('attr','aria-valuetext', 240.00) 
      
    //   cy.get('div#departureTimeRange div > div:nth-child(2)').invoke('attr','style', 'left: 16.6782%; right: 12.4392%;')

       cy.get('div#departureTimeRange div > div:nth-child(3)>div:nth-child(1)').invoke('attr', 'style', 'left: 87.5608%;').invoke('attr','aria-valuetext', 1260.00).invoke('attr','aria-valuenow', 87.6)
    //   cy.get('div#departureTimeRange div > div:nth-child(3)>div:nth-child(1)').invoke('attr','aria-valuenow', 87.6)
    //   cy.get('div#departureTimeRange div > div:nth-child(3)>div:nth-child(1)').invoke('attr','aria-valuetext', 1260.00)


      cy.get('div#returnTimeRange div:nth-child(3) > div').invoke('attr','style', 'left: 50.0347%;').invoke('attr','aria-valuenow', 50.0).invoke('attr','aria-valuetext', 720.0)
   //   cy.get('div#returnTimeRange div:nth-child(3) > div').invoke('attr','aria-valuenow', 50.0)
     // cy.get('div#returnTimeRange div:nth-child(3) > div').invoke('attr','aria-valuetext', 720.0)
      cy.wait(6000)
      cy.get("section#searchSummaryBanner button").click()
      // cy.get('#departureTimeRange > div >div.noUi-origin').find('slider').find('[aria-valuetext="0.0"]').type('{rightarrow}{rightarrow}{rightarrow}')
    })

}) 
