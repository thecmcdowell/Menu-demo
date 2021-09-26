import * as types from './menuTypes'
const initState = {
    menu: [

        {
            id: 1,
            image: 'https://www.listchallenges.com/f/items/4a98113a-62e5-444a-82a1-627089b81bbb.jpg',
            title: 'Sushi',
            description: 'its sushi?',
            price: '$1.99'
        },
        {
            id: 2,
            image: 'https://www.listchallenges.com/f/items/4a98113a-62e5-444a-82a1-627089b81bbb.jpg',
            title: 'not Sushi',
            description: 'its NOT sushi?',
            price: '$5.99'
        },
        {
            id: 3,
            image: 'https://www.listchallenges.com/f/items/4a98113a-62e5-444a-82a1-627089b81bbb.jpg',
            title: 'REALLY NOT Sushi',
            description: 'its NOT sushi? we promise',
            price: '$10.99'
        },

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
            let deleteMenuItem = state.menu.filter((item) => item.id !== action.payload.item.id
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