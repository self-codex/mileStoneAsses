import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {removeItem} from '../redux/actions/actions';

const Wishlist = () => {
  //   const [item, setItem] = useState(0);

  // get data in redux
  const item = useSelector(state => state.addWishReducer);
  const dispatch = useDispatch();
  // console.log(item);

  const removeCart = index => {
    console.log(index);
    // dispatch to remove wish cart
    dispatch(removeItem(index));
  };
  return (
    // show carts to wish list
    <FlatList
      data={item}
      renderItem={({item, index}) => {
        return (
          <View style={styles.itemView}>
            <Image
              source={{
                uri: item.img,
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
                <Text style={styles.nameText}>{item.name}</Text>
                <Text style={styles.descText}>{item.description}</Text>
                <View style={styles.priceView}>
                  <Text style={styles.priceText}>{'$' + item.price}</Text>
                  <Text style={styles.discountText}>
                    {'$' + item.discountPrice}
                  </Text>
                </View>
              </View>
              <View>
                <TouchableOpacity
                  style={styles.addToCartBtn}
                  onPress={() => {
                    removeCart(index);
                  }}>
                  <Text style={{color: '#fff'}}>Remove</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        );
      }}
    />
  );
};

export default Wishlist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
    width: '30%',
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
  addRemoveView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addToCartBtn: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 10,
  },
  checkoutView: {
    width: '100%',
    height: 60,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
