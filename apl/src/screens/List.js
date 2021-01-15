import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';

export default List = ({route}) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        ...route.params.style,
      }}>
      <Text onPress={() => navigation.goBack()}>{route.params.title}</Text>
    </View>
  );
};
