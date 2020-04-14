class Hoteldetails{

    getCalender_ArrivalDate13(){
        return cy.get('div#offerFilter-arrival label:nth-child(3) > input#arrival-2020-06-13')
    }
    getButton_DirectFlight(){
        return cy.get('input#directFlight')
    }
    getDocument_ListOFDirectFlight(){
        return cy.get('section#skeletonOffers article')
    }
    getText_FlightTimeForFirstFlight(){
        return cy.get('section#skeletonOffers article.success.top-offer > div > div.duration > div.duration-departure > div > span:nth-child(1)')
       // return cy.get('section#skeletonOffers article.success.top-offer > div > div.duration > div.duration-departure > div > span:nth-child(1)')
    }
    getButton_ForBooking(){
        return cy.get('section#skeletonOffers section.skeleton-offers > article:nth-child(1) > div > div.price.js-priceBlock > :nth-child(6) ')
    }
    getText_Accomodation(){
        return cy.get('section#vacationSummary li.hotel-name > span.value')
    }
    getDepartureTime_StartRange(){
        return cy.get('div#departureTimeRange div > div:nth-child(1)>div:nth-child(1)')
    }
    getDepartureTime_Start_Style(){
        return cy.get('div#departureTimeRange div > div:nth-child(2)')
    }
    getDepartureTime_EndRange(){
        return cy.get('div#departureTimeRange div > div:nth-child(3)>div:nth-child(1)')
    }
    getRetuenTime_EndRange(){
        return cy.get('div#returnTimeRange div:nth-child(3) > div')
    }
}
export default Hoteldetails