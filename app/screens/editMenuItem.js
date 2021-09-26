import React, { useState, useEffect } from 'react'
import { View, Text, Button, Alert, TextInput, StyleSheet } from 'react-native'
import { useDispatch } from "react-redux";
import { addMenuItem, deleteMenuItem, updateMenuItem } from '../state/menuActions'

const EditItem = ({ route, navigation }) => {
    const [price, setPrice] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const dispatch = useDispatch()

    const item = route.params
    useEffect(() => {
        if (item) {
            setPrice(item.item.price)
            setTitle(item.item.title)
            setDescription(item.item.description)
        }
    }, [])

    const deleteHandler = () => {
        Alert.alert(
            'Are you Sure?',
            `This will delete ${item.item.title}, this cannot be undone`,
            [
                {
                    text: 'Delete', onPress: () => {
                        dispatch(deleteMenuItem(item.item))
                        navigation.goBack()
                    }, style: 'destructive'
                },
                { text: 'Cancel' }
            ]
        )
    }

    const creationHandler = () => {
        const newMenuItem = {
            id: Math.random(),
            title: title,
            price: `$${price}`,
            description: description,
            image: 'https://www.listchallenges.com/f/items/4a98113a-62e5-444a-82a1-627089b81bbb.jpg'
        }
        dispatch(addMenuItem(newMenuItem))
        navigation.goBack()
    }

    const updateHandler = () => {
        const updatedMenuItem = {
            id: item.item.id,
            title: title,
            price: `$${price}`,
            description: description,
            image: 'https://www.listchallenges.com/f/items/4a98113a-62e5-444a-82a1-627089b81bbb.jpg'
        }

        dispatch(updateMenuItem(updatedMenuItem))
        navigation.goBack()
    }

    return (
        <View>
            <Text>{item ? 'Edit Item' : 'New Item'}</Text>
            <TextInput value={title} style={styles.input} placeholder={title} onChangeText={setTitle} placeholder='title' />
            <TextInput value={description} style={styles.input} onChangeText={setDescription} placeholder='description' />
            <TextInput value={price} style={styles.input} onChangeText={setPrice} placeholder='price' />
            {item ?
                <>
                    <Button
                        title="Update"
                        onPress={() => updateHandler()}
                    />
                    <Button
                        title="Delete"
                        color="red"
                        onPress={() => deleteHandler()}
                    />
                </>
                :
                <Button
                    title="Create Item"
                    onPress={() => creationHandler()}
                />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default EditItem