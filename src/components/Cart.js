import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Cart = ({item, wishToCart, index, removeCart}) => {
  const [isLikes, setIsLikes] = useState(false);

  return (
    <View className="flex-row w-11/12 self-center bg-slate-50 mt-2 rounded-lg h-24 mb-2 items-center drop-shadow-md">
      {/* images */}
      <Image
        source={{
          uri: item.image,
        }}
        className="w-24 h-24 rounded-md m-1"
      />
      {/* descriptions */}
      <View className="justify-between flex-row flex-1 items-center mr-2">
        <View className="m-2">
          <Text className="text-lg font-bold">{item.code}</Text>
          <Text className="text-sm font-semibold">{item.suit}</Text>
          <View className="flex-row items-center">
            <Text className="text-lg text-rose-950">{item.value}</Text>
          </View>
        </View>
        <View>
          {/* wish button */}
          {!isLikes ? (
            <TouchableOpacity
              className=" p-2 rounded-lg items-center px-2 my-1 "
              onPress={() => {
                wishToCart(item);
                setIsLikes(!isLikes);
              }}>
              <Ionicons name={'heart-outline'} size={30} color={'purple'} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              className=" p-2 rounded-lg items-center px-2 my-1 "
              onPress={() => {
                removeCart(index);
                setIsLikes(!isLikes);
              }}>
              <Ionicons name={'heart'} size={30} color={'purple'} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default Cart;
