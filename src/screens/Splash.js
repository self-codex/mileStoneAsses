import {View, Text} from 'react-native';
import React, {useEffect} from 'react';

const Splash = ({navigation}) => {
  useEffect(() => {
    // after 2 second redirect home screen
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  }, []);

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-3xl text-rose-900">MileStone</Text>
    </View>
  );
};

export default Splash;
