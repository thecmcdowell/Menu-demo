import React from 'react'
import { View, FlatList, Button, TouchableOpacity } from 'react-native'
import MenuItem from '../components/menuItem'
import { useNavigation } from '@react-navigation/native';
import dumbyMenuItems from '../state/dumbyMenuItems'


const ExisitingMenu = () => {
    const navigation = useNavigation();
    console.log('dumby', dumbyMenuItems)
    return (
        <View style={{ height: '100%', alignItems: 'center' }}>
            <Button
                onPress={() => navigation.navigate('Edit', null)}
                title="Add Menu Item"
            />
            <FlatList
                data={dumbyMenuItems}
                renderItem={item =>
                    <TouchableOpacity onPress={() => navigation.navigate('Edit', { item: item.item })}>
                        <MenuItem item={item.item} />
                    </TouchableOpacity>
                }
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default ExisitingMenu