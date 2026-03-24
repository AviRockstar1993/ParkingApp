import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/CreatePassStyles';
import { colors } from '../common/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackArrow from '../components/BackArrow';
import PasswordImgIcon from '../images/assets/svg/passwordImg.svg';
import CustomInput from '../components/CustomInput';
import PassIcon from '../images/assets/svg/password.svg';
import PassActive from '../images/assets/svg/passwordBlack.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomModal from '../components/GoToHomeModal';
import Header from '../components/Header';

const CreatePasswordScreen = ({ navigation }: any) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const goback = () => {
    navigation.goBack();
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const savedPassword = await AsyncStorage.getItem('password');
        const savedConfirmPassword = await AsyncStorage.getItem(
          'confirmPassword',
        );

        if (savedPassword && savedConfirmPassword) {
          setPassword(savedPassword);
          setConfirmPassword(savedConfirmPassword);
          setRememberMe(true);
        }
      } catch (error) {
        console.log('Load error', error);
      }
    };

    loadData();
  }, []);

  const validate = () => {
    let isValid = true;

    setPasswordError('');
    setConfirmPasswordError('');

    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      isValid = false;
    }

    if (!confirmPassword) {
      setConfirmPasswordError('Confirm password is required');
      isValid = false;
    } else if (confirmPassword !== password) {
      setConfirmPasswordError('Passwords do not match');
      isValid = false;
    }

    return isValid;
  };

  const handleVerify = async () => {
    if (!validate()) return;

    try {
      if (rememberMe) {
        // Save data
        await AsyncStorage.setItem('password', password);
        await AsyncStorage.setItem('confirmPassword', confirmPassword);
      } else {
        // Remove data
        await AsyncStorage.removeItem('password');
        await AsyncStorage.removeItem('confirmPassword');
      }
      setModalVisible(true);
    } catch (error) {
      console.log('Storage error', error);
    }
  };

  const handleRememberMe = async (value: boolean) => {
    setRememberMe(value);

    if (!value) {
      await AsyncStorage.removeItem('password');
      await AsyncStorage.removeItem('confirmPassword');
    }
  };

  const handleModalPress = () => {
    setModalVisible(false);
    navigation.navigate('BottomNavigation');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.alignView}>
        <View>
          <Header
            title="Create New Password"
            onBack={goback}
            titleAlign="left"
          />
          <View style={styles.illustration}>
            <PasswordImgIcon width={420} height={350} fill={colors.white} />
          </View>

          {/* Title */}
          <View style={styles.commonStyle}>
            <Text style={styles.sectionTitle}>Create Your New Password</Text>

            <CustomInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              isPassword={true}
              icon={<PassIcon width={17} height={14} fill="black" />}
              focusedIcon={<PassActive width={11} height={14} fill="black" />}
            />
            {passwordError ? (
              <Text style={styles.errorText}>{passwordError}</Text>
            ) : null}

            <View style={styles.fieldWrapper}>
              <CustomInput
                placeholder="Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                isPassword={true}
                icon={<PassIcon width={17} height={14} fill="black" />}
                focusedIcon={<PassActive width={11} height={14} fill="black" />}
              />
            </View>
            {confirmPasswordError ? (
              <Text style={styles.errorText}>{confirmPasswordError}</Text>
            ) : null}

            {/* Remember Me */}
            <View style={styles.rememberContainer}>
              <CheckBox
                value={rememberMe}
                onValueChange={handleRememberMe}
                boxType="square"
                style={styles.checkedBox}
                tintColors={{
                  true: colors.splashFirst,
                  false: colors.splashFirst,
                }}
                onCheckColor={colors.white}
                onFillColor={colors.splashFirst}
                onTintColor={colors.splashFirst}
              />
              <Text style={styles.rememberText}>Remember me</Text>
            </View>
          </View>
        </View>
        {/* Button */}
        <TouchableOpacity style={styles.button} onPress={handleVerify}>
          <Text style={styles.buttonText}>Verify</Text>
        </TouchableOpacity>
      </View>
      <CustomModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        title="Congratulations"
        subTitle="Your account is ready to use"
        buttonText="Go to Homepage"
        onPress={handleModalPress}
      />
    </SafeAreaView>
  );
};

export default CreatePasswordScreen;
