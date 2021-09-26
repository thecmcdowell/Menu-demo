import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { render, cleanup } from 'react-native-testing-library';
import EditItem from '../../app/screens/editMenuItem'

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

jest.mock('react-native-image-picker', () => {
    return {
        launchImageLibrary: jest.fn(),
    }
})

describe('Edit item screen tests', () => {
    const mockStore = configureStore([])


    it('should display template for new item ', () => {
        const mockRoute = {
            key: '',
            name: 'Edit',
            params: null
        }

        const store = mockStore({ menu: [] })
        const rendered = render(
            <Provider store={store}>
                <EditItem route={mockRoute} />
            </Provider>
        )
        expect(rendered).toMatchSnapshot()
    })
    it('should display editable fields for exisiting items', () => {
        const mockRoute = {
            key: '',
            name: 'Edit',
            params: {
                item: {
                    id: 1,
                    image: '',
                    title: 'Taco',
                    description: 'its NOT sushi?',
                    price: '$5.99'
                }
            }
        }

        const store = mockStore({ menu: [] })
        const rendered = render(
            <Provider store={store}>
                <EditItem route={mockRoute} />
            </Provider>
        )
        expect(rendered).to
    })
})