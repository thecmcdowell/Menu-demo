import React, { useReducer } from 'react'
import { View, FlatList, Button, TouchableOpacity, Text } from 'react-native'
import { useSelector } from "react-redux";
import MenuItem from '../components/menuItem'
import { useNavigation } from '@react-navigation/native';


const ExisitingMenu = () => {
    const navigation = useNavigation();
    const menu = useSelector((state) => state.menu)
    const state = useSelector((state) => state)
    console.log('state', state)
    return (
        <View style={{ height: '100%', alignItems: 'center' }}>
            {menu.length !== 0 ? (
                <FlatList
                    data={menu}
                    renderItem={item =>
                        <TouchableOpacity onPress={() => navigation.navigate('Edit', { item: item.item })}>
                            <MenuItem item={item.item} />
                        </TouchableOpacity>
                    }
                    keyExtractor={item => item.id}
                />
            ) :
                <Text>you have no menu items. Add some? </Text>
            }
            <Button
                onPress={() => navigation.navigate('Edit', null)}
                title="Add Menu Item"
            />

        </View>
    )
}

export default ExisitingMenu