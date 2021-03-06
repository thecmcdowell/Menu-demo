import React, {useState, useEffect} from 'react';
import {
  View,
  Button,
  Alert,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {useDispatch} from 'react-redux';
import {
  addMenuItem,
  deleteMenuItem,
  updateMenuItem,
} from '../state/menuActions';

const EditItem = ({route, navigation}) => {
  const [price, setPrice] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [itemImage, setItemImage] = useState(
    'https://www.listchallenges.com/f/items/4a98113a-62e5-444a-82a1-627089b81bbb.jpg',
  );
  const dispatch = useDispatch();

  const item = route.params;
  useEffect(() => {
    if (item) {
      setPrice(item.item.price);
      setTitle(item.item.title);
      setDescription(item.item.description);
      setItemImage(item.item.image);
    }
  }, []);

  const deleteHandler = () => {
    Alert.alert(
      'Are you Sure?',
      `This will delete ${item.item.title}, this cannot be undone`,
      [
        {
          text: 'Delete',
          onPress: () => {
            dispatch(deleteMenuItem(item.item));
            navigation.goBack();
          },
          style: 'destructive',
        },
        {text: 'Cancel'},
      ],
    );
  };

  const creationHandler = () => {
    const newMenuItem = {
      id: Math.random(),
      title: title,
      price: price,
      description: description,
      image: itemImage,
    };
    dispatch(addMenuItem(newMenuItem));
    navigation.goBack();
  };

  const updateHandler = () => {
    const updatedMenuItem = {
      id: item.item.id,
      title: title,
      price: price,
      description: description,
      image: itemImage,
    };

    dispatch(updateMenuItem(updatedMenuItem));
    navigation.goBack();
  };

  // instead of using the image URL as was in the spec, I decided to make this feel a little more APP friendly by using the phones image gallary
  const photoHandler = () => {
    const photoOptions = {
      mediaType: 'photo',
    };

    const updateImage = response => {
      if (response.assets) {
        setItemImage(response.assets[0].uri);
      }
    };
    launchImageLibrary(photoOptions, response => updateImage(response));
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => photoHandler()}
        style={{alignItems: 'center'}}>
        <Image source={{uri: itemImage}} style={styles.image} />
      </TouchableOpacity>
      <TextInput
        value={title}
        style={styles.input}
        placeholder={title}
        onChangeText={setTitle}
        placeholder="title"
      />
      <TextInput
        value={description}
        style={styles.input}
        onChangeText={setDescription}
        placeholder="description"
      />
      <TextInput
        value={price}
        style={styles.input}
        onChangeText={setPrice}
        placeholder="price"
        keyboardType="number-pad"
      />
      {item ? (
        <>
          <Button title="Update" onPress={() => updateHandler()} />
          <Button title="Delete" color="red" onPress={() => deleteHandler()} />
        </>
      ) : (
        <Button
          title="Create Item"
          onPress={() => creationHandler()}
          disabled={title === ''}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  image: {
    width: 150,
    height: 150,
  },
});

export default EditItem;
