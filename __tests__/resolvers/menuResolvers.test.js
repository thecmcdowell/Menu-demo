import menuReducer from '../../app/state/menuReducers'

describe('tests menu reducers', () => {
    it('should create a new menu item', () => {
        const input = {
            type: 'CREATE_MENU_ITEM',
            payload: {
                id: 1,
                image: '',
                title: 'Taco',
                description: 'its NOT sushi?',
                price: '$5.99'
            }
        }

        const expectedOutcome = {
            menu: [
                {
                    id: 1,
                    image: '',
                    title: 'Taco',
                    description: 'its NOT sushi?',
                    price: '$5.99'
                },
            ]
        }

        const initState = {
            menu: []
        }
        expect(menuReducer(initState, input)).toEqual(expectedOutcome)
    })
    it('Should delete menu item', () => {
        const input = {
            type: 'DELETE_MENU_ITEM',
            payload: {
                id: 1,
                image: '',
                title: 'Taco',
                description: 'its NOT sushi?',
                price: '$5.99'
            }
        }

        const expectedOutcome = {
            menu: []
        }

        const initState = {
            menu: [
                {
                    id: 1,
                    image: '',
                    title: 'Taco',
                    description: 'its NOT sushi?',
                    price: '$5.99'
                }
            ]
        }
        expect(menuReducer(initState, input)).toEqual(expectedOutcome)
    })
    it('Should update a menu item ', () => {
        const input = {
            type: 'UPDATE_MENU_ITEM',
            payload: {
                id: 1,
                image: '',
                title: 'sushi',
                description: 'its IS NOW sushi?',
                price: '$5.99'
            }
        }

        const expectedOutcome = {
            menu: [
                {
                    id: 1,
                    image: '',
                    title: 'sushi',
                    description: 'its IS NOW sushi?',
                    price: '$5.99'
                }
            ]
        }

        const initState = {
            menu: [
                {
                    id: 1,
                    image: '',
                    title: 'Taco',
                    description: 'its NOT sushi?',
                    price: '$5.99'
                }
            ]
        }
        expect(menuReducer(initState, input)).toEqual(expectedOutcome)
    })
})