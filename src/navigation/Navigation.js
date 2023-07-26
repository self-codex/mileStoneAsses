import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Wishlist from '../screens/WishlistTop';
import Splash from '../screens/Splash';

const STACK = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <STACK.Navigator>
        <STACK.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <STACK.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <STACK.Screen name="Wish" component={Wishlist} />
      </STACK.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
