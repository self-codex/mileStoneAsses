import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = ({title, icon}) => {
  const [count, setCount] = useState([]);
  // get state to count fav
  const state = useSelector(state => state.addWishReducer);
  useEffect(() => {
    setCount(state);
  }, [count, state]);

  return (
    <View className="h-16 w-full bg-slate-50 flex-row items-center justify-between px-4">
      {/* header title */}
      <Text className="text-xl font-semibold text-rose-900">{title}</Text>

      {/* counting icon heart wish */}
      <View className="flex-row">
        <View className="justify-center items-center w-12 h-12">
          <TouchableOpacity>
            <Ionicons name={icon} size={35} color={'purple'} />
          </TouchableOpacity>

          <View className="bg-rose-600 w-6 h-6 rounded-3xl absolute top-1 right-0 justify-center items-center">
            <Text className="text-slate-50">
              {count.length >= 1 ? count.length : '0'}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;
