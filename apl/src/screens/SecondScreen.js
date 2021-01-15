import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';

export default Second = () => {
  console.log('second SCREEN');

  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: 'green',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text onPress={() => navigation.goBack()}>Second</Text>
    </View>
  );
};
