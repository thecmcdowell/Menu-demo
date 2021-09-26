import * as types from './menuTypes'
const initState = {
    menu: [
        {
            id: 1,
            image: 'https://www.listchallenges.com/f/items/4a98113a-62e5-444a-82a1-627089b81bbb.jpg',
            title: 'Taco',
            description: 'its NOT sushi?',
            price: '$5.99'
        }
    ]
}

const menuReducer = (state = initState, action) => {
    switch (action.type) {
        case types.UPDATE_MENU_ITEM:
            let updatedMenu = state.menu.map((item) => item.id === action.payload.id ? action.payload : item)
            return {
                ...state,
                menu: updatedMenu
            }
        case types.DELETE_MENU_ITEM:
            console.log('createed', action)

            let deleteMenuItem = state.menu.filter((item) => item.id !== action.payload.id
            )
            return {
                ...state,
                menu: deleteMenuItem
            }
        case types.CREATE_MENU_ITEM:
            return {
                ...state,
                menu: [...state.menu, action.payload]
            }
        default:
            return state
    }
}

export default menuReducer