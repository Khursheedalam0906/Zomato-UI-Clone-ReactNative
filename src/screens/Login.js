import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  Platform,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {LOGIN_TITLE} from '../Strings';
import auth from '@react-native-firebase/auth';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import Modal from 'react-native-modal';
import {Grayscale} from 'react-native-color-matrix-image-filters';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const [mobileNo, setMobileNo] = useState('');
  const [confirm, setConfirm] = useState(null);
  const [otp, setOtp] = useState('');
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();
  const [languages, setLanguages] = useState([
    {name: 'English', selected: true},
    {name: 'हिंदी', selected: false},
    {name: 'اردو', selected: false},
    {name: 'বাঙালি', selected: false},
  ]);

  const signInWithPhoneNumber = async () => {
    const confirmation = await auth().signInWithPhoneNumber('+91' + mobileNo);
    setConfirm(confirmation);
    console.log(confirmation);
  };

  const verifyCode = async () => {
    try {
      const res = await confirm.confirm(otp);
      console.log(res);
    } catch (error) {
      console.log('Invalid code.');
    }
  };

  const Onselect = index => {
    let tempLang = languages;
    tempLang.map((item, ind) => {
      if (ind == index) {
        if (item.selected == true) {
          item.selected = false;
        } else {
          item.selected = true;
        }
      } else {
        item.selected = false;
      }
    });
    let x = [];
    tempLang.map(item => {
      x.push(item);
    });
    setLanguages(x);
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'transparent'} translucent={true} />
      <View style={styles.topView}>
        <Image source={require('../images/banner.jpg')} style={styles.banner} />
        <TouchableOpacity
          style={styles.changeLangBtn}
          onPress={() => {
            setVisible(true);
          }}>
          <Image
            source={require('../images/icons/languages.png')}
            style={styles.langIcon}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.logintitle}>{LOGIN_TITLE}</Text>
      <View style={styles.divider}>
        <View style={styles.dividerView}></View>
        <Text style={styles.dividerText}>Login or Signup </Text>
        <View style={styles.dividerView}></View>
      </View>

      {confirm == null ? (
        <View>
          <TextInput
            placeholder="Enter Mobile Number"
            placeholderTextColor={'#8e8e8e'}
            style={styles.mobileInput}
            value={mobileNo}
            onChangeText={text => setMobileNo(text)}
            keyboardType="number-pad"
          />
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => {
              // signInWithPhoneNumber();
              navigation.navigate('MainScreen');
            }}>
            <Text style={styles.loginBtnText}>Login</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <OTPInputView
            style={{width: '80%', height: 100, alignSelf: 'center'}}
            pinCount={6}
            autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled={code => {
              console.log(`Code is ${code}, you are good to go!`);
              setOtp(code);
            }}
          />
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => {
              verifyCode();
            }}>
            <Text style={styles.loginBtnText}>Veryfy OTP</Text>
          </TouchableOpacity>
        </View>
      )}
      <Modal
        isVisible={visible}
        style={styles.modelStyle}
        animationIn={'slideInUp'}
        onBackdropPress={() => {
          setVisible(false);
        }}>
        <View style={styles.modelContainer}>
          <FlatList
            data={languages}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={[
                    styles.languageItem,
                    {borderColor: item.selected == true ? 'red' : '#8e8e8e'},
                  ]}
                  onPress={() => {
                    Onselect(index);
                  }}>
                  <View
                    style={{
                      width: '100%',
                      height: '100%',
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingLeft: 20,
                      justifyContent: 'space-between',
                      backgroundColor:
                        item.selected == true ? '#fff7f7' : '#fff',
                      borderRadius: 10,
                    }}>
                    <View style={{flexDirection: 'row'}}>
                      {item.selected == true ? (
                        <Image
                          source={require('../images/icons/selected.png')}
                          style={{
                            width: 24,
                            height: 24,
                            marginRight: 10,
                            tintColor: 'red',
                          }}
                        />
                      ) : (
                        <Image
                          source={require('../images/icons/unselected.png')}
                          style={{width: 24, height: 24, marginRight: 10}}
                        />
                      )}
                      <Text
                        style={{
                          fontWeight: '700',
                          fontSize: 18,
                          color: item.selected == true ? 'red' : '#000',
                        }}>
                        {item.name}
                      </Text>
                    </View>
                    {item.selected == true ? (
                      <View style={{marginRight: 20}}>
                        <Image
                          source={require('../images/icons/languages.png')}
                          style={{width: 30, height: 30}}
                        />
                      </View>
                    ) : (
                      <Grayscale style={{marginRight: 20}}>
                        <Image
                          source={require('../images/icons/languages.png')}
                          style={{width: 30, height: 30}}
                        />
                      </Grayscale>
                    )}
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </Modal>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topView: {
    height: responsiveHeight(35),
  },
  banner: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: Platform.OS == 'ios' ? 50 : 0,
    borderBottomRightRadius: Platform.OS == 'ios' ? 50 : 0,
  },
  logintitle: {
    fontSize: responsiveFontSize(3.5),
    color: '#000',
    alignSelf: 'center',
    width: '80%',
    fontWeight: '700',
    textAlign: 'center',
    marginTop: responsiveHeight(4),
  },
  divider: {
    flexDirection: 'row',
    width: '100%',
    marginTop: responsiveHeight(4),
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  dividerView: {
    height: 1,
    backgroundColor: '#8e8e8e',
    width: '20%',
    opacity: 0.5,
  },
  dividerText: {
    fontSize: responsiveFontSize(3),
    color: '#8e8e8e',
  },
  mobileInput: {
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    borderColor: '#8e8e8e',
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
    paddingLeft: 15,
    color: '#000',
  },
  loginButton: {
    backgroundColor: 'red',
    width: '90%',
    height: 50,
    borderRadius: 10,
    marginTop: responsiveHeight(3),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  loginBtnText: {
    fontSize: responsiveFontSize(2),
    fontWeight: '600',
    color: '#fff',
  },
  underlineStyleBase: {
    width: 50,
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#000',
    color: '#000',
  },

  underlineStyleHighLighted: {
    borderColor: 'red',
  },
  modelContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 300,
    paddingTop: 20,
  },
  modelStyle: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  changeLangBtn: {
    borderWidth: 1,
    borderColor: '#fff',
    padding: 5,
    position: 'absolute',
    top: 60,
    left: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  langIcon: {
    width: 24,
    height: 24,
  },
  languageItem: {
    width: '90%',
    alignSelf: 'center',
    height: 60,
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 10,
  },
});
