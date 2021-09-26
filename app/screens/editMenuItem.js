import React from 'react'
import { View, Text, Button, Alert } from 'react-native'
import dumbyMenuItems from '../state/dumbyMenuItems'

const EditItem = ({ route, navigation }) => {

    const item = route.params

    const deleteHandler = () => {
        Alert.alert(
            'Are you Sure?',
            `This will delete ${item.item.title}, this cannot be undone`,
            [
                {
                    text: 'Delete', onPress: () => {
                        let index = dumbyMenuItems.findIndex((currentItem) => currentItem.id === item.item.id)
                        dumbyMenuItems.splice(index, 1)
                    }, style: 'destructive'
                },
                { text: 'Cancel' }
            ]
        )
    }

    return (
        <View>
            <Text>{item ? 'Edit Item' : 'New Item'}</Text>

            {item ? <Button
                title="Delete"
                color="red"
                onPress={() => deleteHandler()}
            /> :
                <Button
                    title="Create Item"
                    onPress={() => console.log('handle new item func')}
                />
            }
        </View>
    )
}

export default EditItem