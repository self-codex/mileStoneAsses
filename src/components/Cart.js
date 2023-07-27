import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {removeItem} from '../redux/actions/actions';

const Cart = ({item, wishToCart, index}) => {
  const [isLikes, setIsLikes] = useState(false);

  const dispatch = useDispatch();
  const removeCart = index => {
    console.log(index);
    // dispatch to remove wish cart
    dispatch(removeItem(index));
  };
  return (
    <View style={styles.itemView}>
      <Image
        source={{
          uri: item.image,
        }}
        style={styles.itemImage}
      />
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          flex: 1,
          alignItems: 'center',
          marginRight: 10,
        }}>
        <View style={styles.nameView}>
          <Text style={styles.nameText}>{item.code}</Text>
          <Text style={styles.descText}>{item.suit}</Text>
          <View style={styles.priceView}>
            <Text style={styles.priceText}>{item.value}</Text>
          </View>
        </View>
        <View>
          {!isLikes ? (
            <TouchableOpacity
              style={styles.addToCartBtn}
              onPress={() => {
                setIsLikes(!isLikes);
                wishToCart(item, index);
              }}>
              <Image
                source={require('../images/wish.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.addToCartBtn}
              onPress={() => {
                console.log(index);
                setIsLikes(!isLikes);
                removeCart(index);
              }}>
              <Image
                source={require('../images/wish_fill.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {flex: 1},
  itemView: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    elevation: 4,
    marginTop: 10,
    borderRadius: 10,
    height: 100,
    marginBottom: 10,
    alignItems: 'center',
  },
  itemImage: {
    width: 90,
    height: 90,
    borderRadius: 10,
    margin: 5,
  },
  nameView: {
    // width: '40%',
    // flex: 1,
    margin: 10,
  },
  priceView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameText: {
    fontSize: 18,
    fontWeight: '700',
  },
  descText: {
    fontSize: 14,
    fontWeight: '600',
  },
  priceText: {
    fontSize: 18,
    color: 'green',
    fontWeight: '700',
  },
  discountText: {
    fontSize: 17,
    fontWeight: '600',
    textDecorationLine: 'line-through',
    marginLeft: 5,
  },
  addToCartBtn: {
    // backgroundColor: 'green',
    padding: 6,
    borderRadius: 10,
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  icon: {
    width: 24,
    height: 24,
    // color: 'green',
  },
});
