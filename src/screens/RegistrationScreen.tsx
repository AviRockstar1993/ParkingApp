import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/RegistrationStyle';
import { staticText } from '../config/staticText';
import { colors } from '../common/colors';
import ProfileIcon from '../images/assets/svg/profile.svg';
import EditIcon from '../images/assets/svg/edit.svg';
import DobIcon from '../images/assets/svg/dob.svg';
import { hs, ms, ws } from '../designs/measurement.design';
import {
  launchCamera,
  launchImageLibrary,
  ImagePickerResponse,
} from 'react-native-image-picker';
import React, { useEffect, useRef, useState } from 'react';
import ImagePickerModal from '../components/ImagePickerModal';
import CustomInput from '../components/CustomInput';
import DatePicker from 'react-native-date-picker';
import PhoneInput from 'react-native-phone-number-input';
import { Dropdown } from 'react-native-element-dropdown';
import Header from '../components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegistrationScreen = ({ navigation, route }: any) => {
  const fromProfile = route?.params?.fromProfile || false;

  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [nickName, setNickName] = useState<string>('');
  const [imageUri, setImageUri] = useState<any>('');
  const [dob, setDob] = useState('');
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [isProfileLoaded, setIsProfileLoaded] = useState<boolean>(false);
  const phoneInput = useRef(null);

  const goback = () => {
    navigation.goBack();
  };

  const data = [
    { label: 'Male', value: '1' },
    { label: 'Female', value: '2' },
  ];

  const openCamera = () => {
    setModalVisible(false);
    launchCamera({ mediaType: 'photo' }, (response: ImagePickerResponse) => {
      if (response.didCancel) {
        console.log('User cancelled camera');
        return;
      }

      if (response.errorCode) {
        console.log('Camera Error: ', response.errorMessage);
        return;
      }

      if (response.assets && response.assets.length > 0) {
        const uri = response.assets[0].uri;
        if (uri) {
          setImageUri(uri);
        }
      }
    });
  };

  const openGallery = () => {
    setModalVisible(false);
    launchImageLibrary(
      { mediaType: 'photo' },
      (response: ImagePickerResponse) => {
        if (response.didCancel) {
          console.log('User cancelled gallary');
          return;
        }

        if (response.errorCode) {
          console.log('Gallery fetch Error: ', response.errorMessage);
          return;
        }

        if (response.assets && response.assets.length > 0) {
          const uri = response.assets[0].uri;
          if (uri) {
            setImageUri(uri);
          }
        }
      },
    );
  };

  const formatDate = (date: Date) => {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  const saveData = async () => {
    try {
      const userData = {
        name,
        nickName,
        imageUri,
        dob,
        phone: value,
        formattedPhone: value,
      };

      await AsyncStorage.setItem('USER_PROFILE', JSON.stringify(userData));

      console.log('Data saved successfully');

      navigation.navigate('BottomNavigation');
    } catch (error) {
      console.log('Error saving data:', error);
    }
  };

  const loadData = async () => {
    try {
      const data = await AsyncStorage.getItem('USER_PROFILE');

      if (data !== null) {
        const parsedData = JSON.parse(data);

        setName(parsedData.name || '');
        setNickName(parsedData.nickName || '');
        setImageUri(parsedData.imageUri || '');
        setDob(parsedData.dob || '');
        setValue(parsedData.phone || '');
        setFormattedValue(parsedData.formattedPhone || '');
        setIsProfileLoaded(true);
      }
    } catch (error) {
      console.log('Error loading data:', error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainView}>
        <View style={styles.alignView}>
          <View>
            <Header
              title={
                fromProfile || isProfileLoaded
                  ? 'Edit Profile'
                  : staticText.fillProfile
              }
              onBack={goback}
              titleAlign="left"
            />
            <View style={styles.imageConatiner}>
              {imageUri ? (
                <Image source={{ uri: imageUri }} style={styles.image} />
              ) : (
                <ProfileIcon
                  width={90}
                  height={90}
                  fill={colors.white}
                  style={{ marginTop: hs(35) }}
                />
              )}
            </View>
            <TouchableOpacity
              style={styles.editBtn}
              onPress={() => setModalVisible(true)}
            >
              <EditIcon width={12} height={12} fill={colors.black} />
            </TouchableOpacity>
            <ImagePickerModal
              visible={modalVisible}
              onClose={() => setModalVisible(false)}
              onCamera={openCamera}
              onGallery={openGallery}
            />

            <View style={styles.inputView}>
              <CustomInput
                placeholder="Full Name"
                value={name}
                onChangeText={setName}
              />
              <View style={styles.fieldWrapper}>
                <CustomInput
                  placeholder="Nick Name"
                  value={nickName}
                  onChangeText={setNickName}
                />
              </View>
              <View style={styles.fieldWrapper}>
                <TouchableOpacity onPress={() => setShow(true)}>
                  <CustomInput
                    placeholder="Date of Birth"
                    value={dob}
                    editable={false}
                    pointerEvents="none"
                    iconRight={<DobIcon width={16} height={16} fill="black" />}
                  />
                </TouchableOpacity>
                <DatePicker
                  modal
                  open={show}
                  date={date}
                  mode="date"
                  maximumDate={new Date()}
                  onConfirm={selectedDate => {
                    setShow(false);
                    setDate(selectedDate);
                    setDob(formatDate(selectedDate));
                  }}
                  onCancel={() => {
                    setShow(false);
                  }}
                />
              </View>
              <View style={styles.fieldWrapper}>
                <View style={styles.phoneField}>
                  <PhoneInput
                    ref={phoneInput}
                    defaultValue={value}
                    defaultCode="IN"
                    layout="first"
                    containerStyle={styles.phoneContainer}
                    textContainerStyle={styles.textContainer}
                    onChangeText={text => setValue(text)}
                    onChangeFormattedText={text => setFormattedValue(text)}
                  />
                </View>
              </View>
              <View style={styles.fieldWrapper}>
                <Dropdown
                  style={styles.dropdown}
                  data={data}
                  maxHeight={100}
                  labelField="label"
                  valueField="value"
                  placeholder="Select item"
                  placeholderStyle={{
                    fontSize: ms(14),
                    fontWeight: '400',
                    paddingLeft: ws(5),
                    color: colors.customGrey,
                  }}
                  value={value}
                  onChange={item => {
                    setValue(item.value);
                  }}
                />
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={saveData}>
            <Text style={styles.buttonText}>
              {fromProfile ? 'Update' : staticText.continue}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default RegistrationScreen;
