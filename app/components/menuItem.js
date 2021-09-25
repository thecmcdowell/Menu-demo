import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const MenuItem = props => {
    const { item } = props
    return (
        <View style={menuItemStyle.container}>
            <View style={{ flexDirection: 'row' }}>
                <Image source={{ uri: item.image }} style={menuItemStyle.image} />
                <Text>{item.price}</Text>
            </View>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>

        </View>
    )
}

const menuItemStyle = StyleSheet.create({
    container: {
        borderWidth: .5,
        borderRadius: 15,
        alignItems: 'center',
        margin: 5,
        padding: 5
    },
    image: {
        width: 50,
        height: 50
    }
})

export default MenuItem