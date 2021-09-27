import * as types from './menuTypes'

export const addMenuItem = (item) => ({
    type: types.CREATE_MENU_ITEM,
    payload: item
})

export const deleteMenuItem = (item) => ({
    type: types.DELETE_MENU_ITEM,
    payload: item
})

export const updateMenuItem = (item) => ({
    type: types.UPDATE_MENU_ITEM,
    payload: item
})