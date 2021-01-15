import React from 'react';
import {Text, View, TouchableHighlight} from 'react-native';

const CardView = ({title, onPress}) => {
  console.log(title);
  return (
    <TouchableHighlight onPress={() => onPress()}>
      <View
        style={{
          marginTop: 10,
          width: 100,
          height: 30,
          backgroundColor: 'red',
          color: 'fff',
        }}>
        <Text style={{color: 'white'}}>{title && title}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default CardView;
