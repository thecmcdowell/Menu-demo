import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const MenuItem = props => {
  const {item} = props;
  return (
    <View style={menuItemStyle.container}>
      <View style={{alignItems: 'center'}}>
        <Image source={{uri: item.image}} style={menuItemStyle.image} />
        <Text>{item.title}</Text>
      </View>
      <View style={{padding: 25}}>
        <Text>{item.description}</Text>
        <Text>${item.price}</Text>
      </View>
    </View>
  );
};

const menuItemStyle = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderRadius: 15,
    alignItems: 'center',
    margin: 5,
    padding: 5,
    flexDirection: 'row',
  },
  image: {
    width: 150,
    height: 150,
  },
});

export default MenuItem;
