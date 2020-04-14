class HotelauswahlPage{

    getButton_Summary(){
        return cy.get('.summary-cta > .button')
    }
    getCalender_ToDate(){
        return cy.get('form#flattrip div.datepicker-input-wrapper.datepicker-input-wrapper-start > div')
    }
    getCalender_Date13(){
        return cy.get('form#flattrip td.day.day-13.selected')
    }
    getCalender_Date20(){
        return cy.get('.month-5.year-2020 > .days > tbody > :nth-child(5) > .day-20')
    }
    getButton_Filter(){
        return cy.get('section#hotelListHeadSkeleton li.filter > label')
    }
    getButton_SmileyRating(){
        return cy.get('input#optCategory2')
    }
    getButton_5PointsRating(){
        return cy.get('[for="5 Punkte"] > svg')
    }
    getButton_ApplyFilter(){
        return cy.get('.menu-overlay-close')
    }
    getButton_SortOptions(){
        return cy.get('#hotelsorting')
    }
    getButton_AboutOffer(){
        return cy.get('[data-hotel-id="49151"] > .content > .priceBox > :nth-child(3)')
    }
    getText_NameAccomodation(){
        cy.get('section#hotelInfoBox div._styling-h1.hotel-name > div')
    }

}
export default HotelauswahlPage