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

const data = [
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

const Main = () => {
  const dispatch = useDispatch();

  const wishToCart = item => {
    dispatch(addWishList(item));
  };

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
                    style={[styles.addToCartBtn, {backgroundColor: 'purple'}]}
                    onPress={() => {
                      wishToCart(item);
                    }}>
                    <Text style={{color: '#fff'}}>Wish List</Text>
                  </TouchableOpacity>
                </View>
              </View>
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
    backgroundColor: 'green',
    padding: 6,
    borderRadius: 10,
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 5,
  },
});
