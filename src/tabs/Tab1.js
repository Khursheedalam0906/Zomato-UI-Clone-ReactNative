import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Tab1 = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Image
              source={require('../images/icons/location.png')}
              style={styles.location}
            />
            <View>
              <View style={{flexDirection: 'row', marginLeft: 10}}>
                <Text style={{fontWeight: '800'}}>Noida Utter Pradesh</Text>
              </View>
              <Text style={{marginLeft: 10}}>Railway Colony</Text>
            </View>
          </View>
          <View style={styles.headerRight}>
            <Image
              source={require('../images/icons/languages.png')}
              style={[styles.translating]}
            />
          </View>
        </View>
        <View style={styles.searchBar}>
          <Image
            source={require('../images/icons/searchIcon.png')}
            style={styles.seachIcon}
          />
          <Text style={{width: '75%', color: '#8e8e8e'}}>Search Items</Text>
          <Image
            source={require('../images/icons/mic.png')}
            style={styles.seachIcon}
          />
        </View>
        <View style={{marginTop: 20}}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={[
              'Sort',
              'Fast Delivery',
              'Rating 4.0+',
              'Pure Veg',
              'Cuisions',
              'More',
            ]}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity style={styles.filterItem}>
                  <View style={styles.filterItemView}>
                    {item == 'Sort' ? (
                      <Image
                        source={require('../images/icons/filter.png')}
                        style={[
                          styles.location,
                          {
                            tintColor: '#000',
                            width: 20,
                            height: 20,
                            marginRight: 5,
                          },
                        ]}
                      />
                    ) : null}
                    <Text>{item}</Text>
                    {item == 'Sort' || item == 'More' ? (
                      <Image
                        source={require('../images/icons/drop-down-arrow.png')}
                        style={[
                          styles.location,
                          {
                            tintColor: '#8e8e8e',
                            width: 16,
                            height: 16,
                            marginLeft: 5,
                          },
                        ]}
                      />
                    ) : null}
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View style={styles.upperView}>
          <TouchableOpacity style={styles.card}>
            <Image
              source={require('../images/banner.jpg')}
              style={{width: '100%', height: '100%', borderRadius: 10}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Image
              source={require('../images/banner.jpg')}
              style={{width: '100%', height: '100%', borderRadius: 10}}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.banner}>
          <Image
            source={require('../images/banner.jpg')}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 10,
            }}
          />
        </TouchableOpacity>
        <Text style={styles.categoryTitle}>Top Brands For You</Text>
        <View style={{marginTop: 10, paddingLeft: 20}}>
          <FlatList
            data={[
              {image: require('../images/banner.jpg'), title: 'Burger King'},
              {image: require('../images/banner.jpg'), title: 'KFC'},
              {image: require('../images/banner.jpg'), title: 'Subway'},
              {image: require('../images/banner.jpg'), title: 'Dominos'},
            ]}
            horizontal
            renderItem={({item, index}) => {
              return (
                <View style={styles.brandItem}>
                  <View style={styles.brandImageView}>
                    <Image source={item.image} style={styles.brandImage} />
                  </View>
                  <View style={styles.percentageView}>
                    <Text style={{color: '#fff', fontSize: 10}}>40% off</Text>
                  </View>
                  <Text style={styles.brandTitle}>{item.title}</Text>
                </View>
              );
            }}
          />
        </View>
        <Text style={styles.categoryTitle}>Recommanded for you</Text>
        <View style={{marginTop: 15}}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={[1, 1, 1, 1]}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity style={styles.recommendedItem}>
                  <Image
                    source={require('../images/banner.jpg')}
                    style={styles.itemImage}
                  />
                  <View style={styles.recommendedItemPriceView}>
                    <Text>Rooms Pizza</Text>
                    <View style={styles.recommendedItemName}>
                      <Text style={{color: '#fff', marginLeft: 2}}>4.9</Text>
                      <Image
                        source={require('../images/icons/unselected.png')}
                        style={{
                          width: 14,
                          height: 14,
                          marginLeft: 3,
                          tintColor: 'white',
                        }}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingLeft: 10,
                      marginTop: 10,
                    }}>
                    <Image
                      source={require('../images/icons/selected.png')}
                      style={{width: 16, height: 16}}
                    />
                    <Text style={{marginLeft: 5, fontSize: 12}}>36 mins</Text>
                    <Text style={{marginLeft: 5, fontSize: 12}}>5Km</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingLeft: 10,
                      marginTop: 5,
                    }}>
                    <Image
                      source={require('../images/icons/selected.png')}
                      style={{width: 16, height: 16, tintColor: 'red'}}
                    />
                    <Text style={{marginLeft: 5, fontSize: 14}}>
                      150 for one
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Tab1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    marginBottom: 50,
  },
  header: {
    height: responsiveHeight(8),
    width: responsiveWidth(100),
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  headerRight: {
    flexDirection: 'row',
    marginRight: 10,
  },
  location: {
    tintColor: 'red',
    width: 24,
    height: 24,
  },
  translating: {
    width: 24,
    height: 24,
  },
  searchBar: {
    height: responsiveHeight(5),
    borderWidth: 0.2,
    borderColor: '#8e8e8e',
    alignSelf: 'center',
    width: responsiveWidth(90),
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: '#f2f2f2',
    flexDirection: 'row',
    alignItems: 'center',
  },
  seachIcon: {
    width: 24,
    height: 24,
    marginHorizontal: 10,
    alignItems: 'center',
    tintColor: 'red',
  },
  filterItem: {
    borderWidth: 0.2,
    borderRadius: 5,
    marginLeft: 15,
    height: 30,
  },
  filterItemView: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 5,
    paddingRight: 5,
  },
  upperView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 20,
  },
  card: {
    width: responsiveWidth(38),
    height: responsiveHeight(12),
    borderRadius: 10,
    //  flexDirection: 'row',
  },
  banner: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
    height: responsiveHeight(18),
  },
  categoryTitle: {
    fontWeight: '800',
    marginLeft: 20,
    marginTop: 20,
    color: 'black',
    fontSize: 16,
  },
  brandItem: {
    marginLeft: 10,
    marginBottom: 10,
  },
  brandImage: {
    width: '80%',
    height: '90%',
    resizeMode: 'contain',
  },
  brandImageView: {
    backgroundColor: '#fff',
    width: responsiveWidth(14),
    height: responsiveHeight(7),
    borderRadius: responsiveWidth(14) / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  percentageView: {
    width: '80%',
    height: 20,
    backgroundColor: '#497ceb',
    borderRadius: 4,
    position: 'absolute',
    top: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandTitle: {
    marginTop: 10,
    color: '#000',
  },
  recommendedItem: {
    width: responsiveWidth(40),
    height: responsiveHeight(30),
    backgroundColor: '#fff',
    borderRadius: 10,
    marginLeft: 15,
  },
  itemImage: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  recommendedItemPriceView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    paddingRight: 10,
    paddingLeft: 10,
  },
  recommendedItemName: {
    width: 45,
    height: 25,
    backgroundColor: 'green',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
