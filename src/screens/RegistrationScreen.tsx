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
  const [errors, setErrors] = useState<any>({});

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
  const [phone, setPhone] = useState('');
  const phoneInput = useRef<PhoneInput>(null);

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

  const validate = () => {
    let valid = true;
    let tempErrors: any = {};

    // Name validation
    if (!name.trim()) {
      tempErrors.name = 'Full name is required';
      valid = false;
    } else if (name.trim().length < 3) {
      tempErrors.name = 'Name must be at least 3 characters';
      valid = false;
    }

    if (!nickName.trim()) {
      tempErrors.nickName = 'Nickname is required';
      valid = false;
    } else if (nickName.trim().length < 2) {
      tempErrors.nickName = 'Nickname too short';
      valid = false;
    }

    // DOB
    if (!dob) {
      tempErrors.dob = 'Date of birth is required';
      valid = false;
    }

    // Phone
    if (!phone) {
      tempErrors.phone = 'Phone number is required';
      valid = false;
    }

    // Gender (Dropdown)
    if (!value) {
      tempErrors.gender = 'Please select gender';
      valid = false;
    }

    setErrors(tempErrors);
    return valid;
  };

  const formatDate = (date: Date) => {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  const saveData = async () => {
    if (!validate()) return;
    try {
      const userData = {
        name,
        nickName,
        imageUri,
        dob,
        phone: formattedValue,
        gender: value,
      };
      console.log('userDta', userData);

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

        const formatted = parsedData.phone || '';

        const numberWithoutCode = formatted.replace(/^\+\d{1,2}/, '');
        let genderValue = '';

        if (Array.isArray(parsedData.gender)) {
          genderValue = parsedData.gender[0]?.value || '';
        } else {
          genderValue = parsedData.gender || '';
        }
        setName(parsedData.name || '');
        setNickName(parsedData.nickName || '');
        setImageUri(parsedData.imageUri || '');
        setDob(parsedData.dob || '');
        setPhone(numberWithoutCode);
        setFormattedValue(formatted);
        setValue(genderValue);
        setIsProfileLoaded(true);
        setTimeout(() => {
          phoneInput.current?.setState({
            number: numberWithoutCode,
          });
        }, 100);
        console.log('././', numberWithoutCode);
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
              {errors.name && (
                <Text style={{ color: colors.splashFirst }}>{errors.name}</Text>
              )}
              <View style={styles.fieldWrapper}>
                <CustomInput
                  placeholder="Nick Name"
                  value={nickName}
                  onChangeText={setNickName}
                />
              </View>
              {errors.nickName && (
                <Text style={{ color: colors.splashFirst }}>
                  {errors.nickName}
                </Text>
              )}
              <View style={styles.fieldWrapper}>
                <TouchableOpacity onPress={() => setShow(true)}>
                  <CustomInput
                    placeholder="Date of Birth"
                    value={dob}
                    editable={false}
                    pointerEvents="none"
                    iconRight={<DobIcon width={16} height={16} fill="black" />}
                  />
                  {errors.dob && (
                    <Text style={{ color: colors.splashFirst }}>
                      {errors.dob}
                    </Text>
                  )}
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
                    value={phone}
                    // defaultValue={phone}
                    defaultCode="IN"
                    layout="first"
                    containerStyle={styles.phoneContainer}
                    textContainerStyle={styles.textContainer}
                    onChangeText={text => setPhone(text)}
                    onChangeFormattedText={text => setFormattedValue(text)}
                  />
                </View>
                {errors.phone && (
                  <Text style={{ color: colors.splashFirst }}>
                    {errors.phone}
                  </Text>
                )}
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
                {errors.gender && (
                  <Text style={{ color: colors.splashFirst }}>
                    {errors.gender}
                  </Text>
                )}
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
