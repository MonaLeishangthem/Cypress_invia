class HomePage{

    visitHomePage(){
        cy.visit("https://www.ab-in-den-urlaub.de/");
    }
    getText_HomePage(){
        return cy.get('section#formHeadline span._styling-h1')
    }
    getEditBox_ToCity(){
        return cy.get('.standard-version > #idestflat')
    }
    getDropDownCity_FirstOption(){
        return cy.get('.ac-box > .ac-item > .aiduac-wrapper > .aiduac-content > :nth-child(1) > .area > :nth-child(1) > ul > li > .aiduac-response-element')
    }
    getButton_StartDate(){
        return cy.get('.datepicker-input-wrapper-start > .datepicker-trigger')
    }
    getButton_NextMonthArrow(){
        return cy.get('form#flattrip span.month-button.month-button-next.icon-arrow-right-bold')
    }
    getCalender_ToDate(){
        return cy.get('form#flattrip div:nth-child(4) > table > tbody > tr:nth-child(3) > td.day.day-6')
    }
    getCalender_ReturnDate(){
        return cy.get('form#flattrip div:nth-child(4) > table > tbody > tr:nth-child(4) > td.day.day-13')
    }
    getButton_Submit(){
        return cy.get('input#submit')
    }

}
export default HomePage
