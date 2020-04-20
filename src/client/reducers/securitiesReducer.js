import * as types from '../constants/actionTypes';

//should handle editing securities
//should handle adding securities

const initialState = {
    securities: {},
    addIsOpen: false,
}


const securitiesReducer = (state = initialState, action) => {
    let newState = Object.assign({}, state)
    switch (action.type) {

        case types.OPEN_ADD_MODAL:
            newState.addIsOpen = true;
            return newState;

        case types.CLOSE_ADD_MODAL:
            newState.addIsOpen = false;
            return newState;

        case types.ADD_SECURITY:
            let newSecurity = action.payload;
            newState.securities[newSecurity.ISIN] = newSecurity;
            newState.securities[newSecurity.ISIN].isOpen = false;
            newState.securities[newSecurity.ISIN].pricesOpen = false;
            newState.addIsOpen = false;
            return newState;
            
        case types.OPEN_EDIT_MODAL:
            newState.securities[action.payload].isOpen = true;
            return newState;

        case types.CLOSE_EDIT_MODAL:
            newState.securities[action.payload].isOpen = false;
            return newState;

        case types.EDIT_SECURITY:
            delete newState.securities[action.payload.deleteid]
            let modifiedSecurity = action.payload.details;
            modifiedSecurity.isOpen = false;
            modifiedSecurity.pricesOpen = false;
            newState.securities[action.payload.details.ISIN] = modifiedSecurity;
            return newState;

        case types.DELETE_SECURITY:
            delete newState.securities[action.payload]
            return newState;
        
        case types.OPEN_PRICES_MODAL:
            newState.securities[action.payload].pricesOpen = true;
            return newState;

        case types.CLOSE_PRICES_MODAL:
            newState.securities[action.payload].pricesOpen = false;
            return newState;

        
        case types.ADD_PRICE:
            newState.securities[action.payload.id].prices[action.payload.date] = action.payload.price
            return newState;

        case types.EDIT_PRICE:
            delete newState.securities[action.payload.id].prices[action.payload.originalDate]
            newState.securities[action.payload.id].prices[action.payload.newDate] = action.payload.newPrice
            return newState;

        case types.DELETE_PRICE:
            delete newState.securities[action.payload.id].prices[action.payload.date]
            return newState;

        default:
            return state;
    }
}

export default securitiesReducer;