import * as types from "../constants/actionTypes.js"

// export const addCard = (marketId) => ({
//     type: types.ADD_CARD,
//     payload: marketId,
//   });


export const openAddModal = () => {
    return {
        type: types.OPEN_ADD_MODAL
    }
}

export const closeAddModal = () => {
    return {
        type: types.CLOSE_ADD_MODAL
    }
}

export const addSecurity = (payload) => {
    return {
        type: types.ADD_SECURITY,
        payload: payload
    }
}

export const openEditModal = (id) => {
    return {
        type: types.OPEN_EDIT_MODAL,
        payload: id
    }
}

export const closeEditModal = (id) => {
    return {
        type: types.CLOSE_EDIT_MODAL,
        payload: id
    }
}

export const editSecurity = (payload) => {
    return {
        type: types.EDIT_SECURITY,
        payload: payload
    }
}

export const deleteSecurity = (id) => {
    return {
        type: types.DELETE_SECURITY,
        payload: id
    }
}

export const openPricesModal = (id) => {
    return {
        type: types.OPEN_PRICES_MODAL,
        payload: id
    }
}

export const closePricesModal = (id) => {
    return {
        type: types.CLOSE_PRICES_MODAL,
        payload: id
    }
}

export const editPrice = (payload) => {
    return {
        type: types.EDIT_PRICE,
        payload: payload
    }
}

export const deletePrice = (date, id) => {
    return {
        type: types.DELETE_PRICE,
        payload: {
            date: date,
            id: id
        }
    }
}

export const addPrice = (payload) => {
    return {
        type: types.ADD_PRICE,
        payload: payload
    }
}