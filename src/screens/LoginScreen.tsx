import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/LoginStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackArrow from '../components/BackArrow';
import { staticText } from '../config/staticText';
import EmailIcon from '../images/assets/svg/email.svg';
import PassIcon from '../images/assets/svg/password.svg';
import { useEffect, useState } from 'react';
import FaceBookIcon from '../images/assets/svg/facebook.svg';
import GoogleIcon from '../images/assets/svg/google.svg';
import AppleIcon from '../images/assets/svg/apple.svg';
import CustomInput from '../components/CustomInput';
import { colors } from '../common/colors';
import CheckBox from '@react-native-community/checkbox';
import EmailActive from '../images/assets/svg/emailActive.svg';
import PasswordActive from '../images/assets/svg/passwordRed.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }: any) => {
  const goback = () => {
    navigation.goBack();
  };
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const socialIcons = [
    { id: 'facebook', Icon: FaceBookIcon },
    { id: 'google', Icon: GoogleIcon },
    { id: 'apple', Icon: AppleIcon },
  ];

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!value) {
      setEmailError('Email is required');
      return false;
    } else if (!emailRegex.test(value)) {
      setEmailError('Enter a valid email');
      return false;
    } else {
      setEmailError('');
      return true;
    }
  };

  const validatePass = (pass: any) => {
    if (!pass && pass.length < 6) {
      setPasswordError('Password cannot be empty');
      return false;
    } else {
      setPasswordError('');
      return true;
    }
  };

  const validate = () => {
    if (!validateEmail(email)) {
      return false;
    }

    if (!password) {
      setPasswordError('Password cannot be empty');
      return false;
    }

    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      return false;
    }

    setPasswordError('');
    return true;
  };

  const handleSignUp = async () => {
    if (!validate()) return;
    try {
      if (rememberMe) {
        await AsyncStorage.setItem('userEmail', email);
        await AsyncStorage.setItem('userPassword', password);
        await AsyncStorage.setItem('rememberMe', 'true');
      } else {
        await AsyncStorage.removeItem('userEmail');
        await AsyncStorage.removeItem('userPassword');
        await AsyncStorage.setItem('rememberMe', 'false');
      }

      navigation.navigate('Register');
    } catch (error) {
      console.log('Error saving data', error);
    }
  };

  const loadData = async () => {
    try {
      const savedEmail = await AsyncStorage.getItem('userEmail');
      const savedPassword = await AsyncStorage.getItem('userPassword');
      const savedRemember = await AsyncStorage.getItem('rememberMe');

      if (savedRemember === 'true') {
        setEmail(savedEmail || '');
        setPassword(savedPassword || '');
        setRememberMe(true);
      }
    } catch (error) {
      console.log('Error loading data', error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* Back arrow */}

      <BackArrow onPress={goback} />
      <View style={styles.mainView}>
        <Text style={styles.title}>{staticText.header}</Text>

        {/* Email Input */}
        <View>
          <CustomInput
            placeholder="Email"
            value={email}
            onChangeText={text => {
              setEmail(text);
              validateEmail(text);
            }}
            icon={<EmailIcon width={17} height={14} fill="black" />}
            focusedIcon={<EmailActive width={14} height={10} fill="black" />}
          />
          {emailError ? (
            <Text style={styles.errorText}>{emailError}</Text>
          ) : null}
        </View>

        {/* Password Input */}

        <View>
          <CustomInput
            placeholder="Password"
            value={password}
            onChangeText={text => {
              setPassword(text);
              validatePass(text);
            }}
            isPassword={true}
            icon={<PassIcon width={17} height={14} fill="black" />}
            focusedIcon={<PasswordActive width={11} height={14} fill="black" />}
          />
          {passwordError ? (
            <Text style={styles.errorText}>{passwordError}</Text>
          ) : null}
        </View>

        {/* Remember Me */}
        <TouchableOpacity
          style={styles.rememberContainer}
          onPress={() => setRememberMe(!rememberMe)}
        >
          <CheckBox
            value={rememberMe}
            onValueChange={setRememberMe}
            boxType="square"
            style={styles.checkedBox}
            tintColors={{ true: colors.splashFirst, false: colors.splashFirst }}
            onCheckColor={colors.white}
            onFillColor={colors.splashFirst}
            onTintColor={colors.splashFirst}
          />

          <Text style={styles.rememberText}>{staticText.rememberMe}</Text>
        </TouchableOpacity>

        {/* Sign Up Button */}
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>{staticText.signUp}</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>{staticText.continueWith}</Text>
          <View style={styles.line} />
        </View>

        {/* Social Buttons */}
        <View style={styles.socialContainer}>
          {socialIcons.map(({ id, Icon }) => (
            <TouchableOpacity key={id} style={styles.socialButton}>
              <Icon width={27} height={27} fill="black" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Sign In Link */}
        <View style={styles.signInContainer}>
          <Text style={styles.signInText}>{staticText.alreadyAccount}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('LoginWithForgotPass')}
          >
            <Text style={styles.signInLink}>{staticText.SignIn}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default LoginScreen;
