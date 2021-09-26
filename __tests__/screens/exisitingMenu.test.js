import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { render, cleanup } from 'react-native-testing-library';
import ExisitingMenu from '../../app/screens/existingMenu'

afterEach(cleanup)

jest.mock('@react-navigation/native', () => {
    const actualNav = jest.requireActual("@react-navigation/native")
    return {
        ...actualNav,
        useNavigation: () => ({
            navigate: jest.fn
        })
    }
})

describe('Exisiting Menu screen tests', () => {
    const mockStore = configureStore([])

    it('should display current menu items', () => {
        const store = mockStore({
            menu: [
                {
                    id: 1,
                    image: 'https://www.listchallenges.com/f/items/4a98113a-62e5-444a-82a1-627089b81bbb.jpg',
                    title: 'Taco',
                    description: 'its NOT sushi?',
                    price: '$5.99'
                }
            ]
        })

        const rendered = render(
            <Provider store={store}>
                <ExisitingMenu />
            </Provider>
        )

        expect(rendered).toMatchSnapshot()
    })
    it('shows there is no exisiting items', () => {
        const store = mockStore({ menu: [] })
        const rendered = render(
            <Provider store={store}>
                <ExisitingMenu />
            </Provider>
        )

        expect(rendered).toMatchSnapshot()
    })
})