import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Tab1 from '../tabs/Tab1';
import Tab2 from '../tabs/Tab2';
import Tab3 from '../tabs/Tab3';

const MainScreen = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={'red'}
        barStyle={'light-content'}
        translucent={false}
      />
      {selectedTab == 0 ? (
        <Tab1 />
      ) : selectedTab == 1 ? (
        <Tab2 />
      ) : selectedTab == 2 ? (
        <Tab3 />
      ) : null}
      <View style={styles.bottomNavigationView}>
        <TouchableOpacity
          style={[styles.tab]}
          onPress={() => {
            setSelectedTab(0);
          }}>
          <View
            style={{
              borderTopWidth: 2,
              borderTopColor: selectedTab == 0 ? 'red' : '#fff',
              height: '100%',
              width: '60%',
            }}>
            <Image
              source={require('../images/icons/Delivery.png')}
              style={[
                styles.tabIcon,
                {
                  tintColor: selectedTab == 0 ? 'red' : '#8e8e8e',
                  alignSelf: 'center',
                  marginTop: 5,
                },
              ]}
            />
            <Text
              style={[
                styles.tabTitle,
                {
                  color: selectedTab == 0 ? 'red' : '#8e8e8e',
                  alignSelf: 'center',
                },
              ]}>
              Delivery
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab]}
          onPress={() => {
            setSelectedTab(1);
          }}>
          <View
            style={{
              borderTopWidth: 2,
              borderTopColor: selectedTab == 1 ? 'red' : '#fff',
              height: '100%',
              width: '60%',
            }}>
            <Image
              source={require('../images/icons/Dining.png')}
              style={[
                styles.tabIcon,
                {
                  tintColor: selectedTab == 1 ? 'red' : '#8e8e8e',
                  alignSelf: 'center',
                  marginTop: 5,
                },
              ]}
            />
            <Text
              style={[
                styles.tabTitle,
                {
                  color: selectedTab == 1 ? 'red' : '#8e8e8e',
                  alignSelf: 'center',
                },
              ]}>
              Dining
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab]}
          onPress={() => {
            setSelectedTab(2);
          }}>
          <View
            style={{
              borderTopWidth: 2,
              borderTopColor: selectedTab == 2 ? 'red' : '#fff',
              height: '100%',
            }}>
            <Image
              source={require('../images/icons/Zomaland.png')}
              style={[
                styles.tabIcon,
                {
                  tintColor: selectedTab == 2 ? 'red' : '#8e8e8e',
                  alignSelf: 'center',
                  marginTop: 5,
                },
              ]}
            />
            <Text
              style={[
                styles.tabTitle,
                {color: selectedTab == 2 ? 'red' : '#8e8e8e'},
              ]}>
              Zomaland
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomNavigationView: {
    height: responsiveHeight(8),
    width: responsiveWidth(100),
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    elevation: 5,
  },
  tab: {
    width: '30%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabIcon: {
    width: 30,
    height: 30,
  },
  tabTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
});
