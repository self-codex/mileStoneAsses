import {View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Main from './tab.js/Main';
import Profile from './tab.js/Profile';
import Orders from './tab.js/Orders';
import Search from './tab.js/Search';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = () => {
  const bottomTab = 'w-1/5 h-full justify-center items-center';

  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <View className="flex-1">
      {/* tab to select change screen custom bottom tab */}
      {selectedTab == 0 ? (
        <Main />
      ) : selectedTab == 1 ? (
        <Search />
      ) : selectedTab == 2 ? (
        <Orders />
      ) : (
        <Profile />
      )}

      {/* bottom tab bar */}
      <View className="flex-row h-16 w-full bg-slate-50 justify-evenly items-center drop-shadow-md absolute bottom-0">
        <TouchableOpacity
          className={bottomTab}
          onPress={() => {
            setSelectedTab(0);
          }}>
          <Ionicons
            name={selectedTab == 0 ? 'home' : 'home-outline'}
            size={32}
            color={'purple'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          className={bottomTab}
          onPress={() => {
            setSelectedTab(1);
          }}>
          <Ionicons
            name={selectedTab == 1 ? 'search' : 'search-outline'}
            size={32}
            color={'purple'}
          />
        </TouchableOpacity>

        <TouchableOpacity
          className={bottomTab}
          onPress={() => {
            setSelectedTab(2);
          }}>
          <Ionicons
            name={selectedTab == 2 ? 'bag-check' : 'bag-check-outline'}
            size={32}
            color={'purple'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          className={bottomTab}
          onPress={() => {
            setSelectedTab(3);
          }}>
          <Ionicons
            name={selectedTab == 3 ? 'person' : 'person-outline'}
            size={32}
            color={'purple'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
