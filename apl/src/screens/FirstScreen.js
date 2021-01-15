import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import CardView from '../components/Card';

export default First = () => {
  const navigation = useNavigation();

  const arrayList = [
    {title: 'title 1', path: 'List', style: {backgroundColor: 'coral'}},
    {title: 'title 2', path: 'List', style: {backgroundColor: 'green'}},
    {title: 'title 3', path: 'List', style: {backgroundColor: 'red'}},
    {title: 'title 4', path: 'List', style: {backgroundColor: 'blue'}},
    {title: 'title 5', path: 'List', style: {backgroundColor: 'black'}},
  ];

  console.log('FIRST SCREEN');

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {arrayList.map((item) => (
        <CardView
          key={item.title}
          title={item.title}
          onPress={() =>
            navigation.navigate(item.path, {
              title: item.title,
              style: item.style,
            })
          }
        />
      ))}
    </View>
  );
};
