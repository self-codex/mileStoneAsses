import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Header from '../../components/Header';
import {useDispatch} from 'react-redux';
import {addWishList} from '../../redux/actions/actions';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Cart from '../../components/Cart';

const domeData = [
  {
    name: 'Item 1',
    price: 12,
    discountPrice: 2,
    description: 'this is a item number one',
    img: 'https://fastly.picsum.photos/id/143/350/350.jpg?hmac=wi0ZF6ZBeYk539e0rxtJnpNV_FyYF3J7ovM7uXkYlBU',
  },
  {
    name: 'Item 2',
    price: 16,
    discountPrice: 2,
    description: 'this is a item number one',
    img: 'https://fastly.picsum.photos/id/143/350/350.jpg?hmac=wi0ZF6ZBeYk539e0rxtJnpNV_FyYF3J7ovM7uXkYlBU',
  },
  {
    name: 'Item 3',
    price: 22,
    discountPrice: 2,
    description: 'this is a item number one',
    img: 'https://fastly.picsum.photos/id/143/350/350.jpg?hmac=wi0ZF6ZBeYk539e0rxtJnpNV_FyYF3J7ovM7uXkYlBU',
  },
  {
    name: 'Item 4',
    price: 10,
    discountPrice: 2,
    description: 'this is a item number one',
    img: 'https://fastly.picsum.photos/id/143/350/350.jpg?hmac=wi0ZF6ZBeYk539e0rxtJnpNV_FyYF3J7ovM7uXkYlBU',
  },
  {
    name: 'Item 5',
    price: 14,
    discountPrice: 2,
    description: 'this is a item number one',
    img: 'https://fastly.picsum.photos/id/143/350/350.jpg?hmac=wi0ZF6ZBeYk539e0rxtJnpNV_FyYF3J7ovM7uXkYlBU',
  },
];

// https://deckofcardsapi.com/api/deck/new/draw/?count=5

const Main = () => {
  const [data, setData] = useState([]);

  const dispatch = useDispatch();

  const getData = async () => {
    const {data} = await axios.get(
      'https://deckofcardsapi.com/api/deck/new/draw/?count=5',
    );
    setData(data.cards);
  };

  const wishToCart = item => {
    dispatch(addWishList(item));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <Header
        title={'MileStone'}
        icon={require('../../images/cart.png')}
        wish={require('../../images/wish.png')}
      />

      <FlatList
        data={data}
        renderItem={({item, index}) => {
          // console.log(item, 'data');
          return (
            <View>
              <Cart item={item} wishToCart={wishToCart} index={index} />
            </View>
          );
        }}
      />
    </View>
  );
};

export default Main;
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
