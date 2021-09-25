import React from 'react'
import { View, FlatList } from 'react-native'
import MenuItem from '../components/menuItem'

// just for menuItem dev purposes
const dumbyItemsArry = [
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
    }
]


const ExisitingMenu = () => {
    return (
        <View style={{ height: '100%', alignItems: 'center' }}>
            <FlatList
                data={dumbyItemsArry}
                renderItem={MenuItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default ExisitingMenu