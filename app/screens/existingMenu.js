import React from 'react';
import {View, FlatList, Button, TouchableOpacity, Text} from 'react-native';
import {useSelector} from 'react-redux';
import MenuItem from '../components/menuItem';
import {useNavigation} from '@react-navigation/native';

const ExisitingMenu = () => {
  const navigation = useNavigation();
  const menu = useSelector(state => state.menu);
  return (
    <View style={{alignItems: 'center', height: '100%'}}>
      <Button
        onPress={() => navigation.navigate('Edit', null)}
        title="Add Menu Item"
      />
      {menu.length !== 0 ? (
        <FlatList
          style={{width: '100%'}}
          data={menu}
          renderItem={item => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Edit', {item: item.item})}>
              <MenuItem item={item.item} />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      ) : (
        <Text>you have no menu items. Add some? </Text>
      )}
    </View>
  );
};

export default ExisitingMenu;
