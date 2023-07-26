import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const {height, width} = Dimensions.get('window');
const Header = ({title, wish}) => {
  const navigation = useNavigation();
  // get state to count
  const state = useSelector(state => state.addWishReducer);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {wish && (
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              width: 50,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Wish');
              }}>
              <Image source={wish} style={styles.icon} />
            </TouchableOpacity>
            <View style={styles.count}>
              <Text style={{color: '#fff'}}>
                {state.length ? state.length : '0'}
              </Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  container: {
    height: 60,
    width: width,
    elevation: 5,
    backgroundColor: '#fff',

    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 15,
    paddingLeft: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: 'purple',
  },
  icon: {
    width: 24,
    height: 24,
  },
  count: {
    backgroundColor: 'red',
    width: 20,
    height: 20,
    borderRadius: 10,
    position: 'absolute',
    top: 5,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
