import {GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING} from './../actions/types';

export const getItems = () => {
    return {
        type: GET_ITEMS
    }
}

export const deleteItem = id => {
    return {
        type: DELETE_ITEM,
        payload: id
    }
}

export const addItem = item => {
    return {
        type: ADD_ITEM,
        payload: item
    }
}

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
}