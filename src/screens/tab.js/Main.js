import {View, FlatList} from 'react-native';
import Header from '../../components/Header';
import {useDispatch} from 'react-redux';
import {addWishList, removeItem} from '../../redux/actions/actions';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Cart from '../../components/Cart';

// https://deckofcardsapi.com/api/deck/new/draw/?count=5

const Main = () => {
  const [data, setData] = useState([]);
  // dispatch to reducer
  const dispatch = useDispatch();
  // get api using axios
  const getData = async () => {
    const {data} = await axios.get(
      'https://deckofcardsapi.com/api/deck/new/draw/?count=5',
    );
    setData(data.cards);
  };
  // add wish list
  const wishToCart = item => {
    dispatch(addWishList(item));
  };
  // remove item to wish
  const removeCart = index => {
    // dispatch to remove wish cart
    dispatch(removeItem(index));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View className="flex-1">
      {/* header */}
      <Header title={'MileStone'} icon={'heart-outline'} />
      {/* flatlist to show data apis */}
      <FlatList
        data={data}
        renderItem={({item, index}) => {
          // console.log(item, 'data');
          return (
            <View>
              {/* cart componet */}
              <Cart
                item={item}
                wishToCart={wishToCart}
                removeCart={removeCart}
                index={index}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default Main;
