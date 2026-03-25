import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/LoginStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackArrow from '../components/BackArrow';
import { staticText } from '../config/staticText';
import EmailIcon from '../images/assets/svg/email.svg';
import PassIcon from '../images/assets/svg/password.svg';
import { useState } from 'react';
import FaceBookIcon from '../images/assets/svg/facebook.svg';
import GoogleIcon from '../images/assets/svg/google.svg';
import AppleIcon from '../images/assets/svg/apple.svg';
import CustomInput from '../components/CustomInput';
import { colors } from '../common/colors';
import CheckBox from '@react-native-community/checkbox';
import EmailActive from '../images/assets/svg/emailActive.svg';
import PasswordActive from '../images/assets/svg/passwordBlack.svg';
import Header from '../components/Header';

const LoginWithForgotPass = ({ navigation }: any) => {
  const goback = () => {
    navigation.goBack();
  };
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const socialIcons = [
    { id: 'facebook', Icon: FaceBookIcon },
    { id: 'google', Icon: GoogleIcon },
    { id: 'apple', Icon: AppleIcon },
  ];

  const handleSignUp = () => {
    navigation.navigate('Register');
  };

  return (
    <SafeAreaView style={styles.container}>
      <BackArrow onPress={goback} />
      <View style={styles.mainView}>
        <Text style={styles.title} numberOfLines={2}>
          {staticText.loginHeaderWithForgot}
        </Text>
        {/* Email Input */}
        <CustomInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          icon={<EmailIcon width={17} height={14} fill="black" />}
          focusedIcon={<EmailActive width={14} height={10} fill="black" />}
        />

        {/* Password Input */}

        <CustomInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          isPassword={true}
          icon={<PassIcon width={17} height={14} fill="black" />}
          focusedIcon={<PasswordActive width={11} height={14} fill="black" />}
        />

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
          <Text style={styles.buttonText}>{staticText.signin}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.forgotPassView}
          onPress={() => navigation.navigate('ForgotPass')}
        >
          <Text style={styles.forgotText}>Forgot The Password?</Text>
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
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.signInLink}>{staticText.signUp}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default LoginWithForgotPass;
