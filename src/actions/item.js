import {GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING} from './../actions/types';
import axios from 'axios';

export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios
        .get('/api/items')
        .then(res => dispatch({
            type: GET_ITEMS,
            payload: res.data
        }))
        .catch(err => console.error(err.message));
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