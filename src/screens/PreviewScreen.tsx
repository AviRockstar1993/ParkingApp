import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/PreviewStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackArrow from '../components/BackArrow';
import FaceBookIcon from '../images/assets/svg/facebook.svg';
import GoogleIcon from '../images/assets/svg/google.svg';
import AppleIcon from '../images/assets/svg/apple.svg';
import { staticText } from '../config/staticText';

const PreviewScreen = ({ navigation }: any) => {
  const goback = () => {
    navigation.goBack();
  };
  const moveToNextScreen = () => {
    navigation.navigate('Login');
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* Back arrow */}
      <BackArrow onPress={goback} />
      <View style={styles.conatiner}>
        <Text style={styles.heading}>{staticText.loginHeader}</Text>

        {/* Social login buttons */}
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <View style={styles.iconView}>
              <FaceBookIcon width={27} height={27} fill="black" />
            </View>

            <View style={styles.iconTextView}>
              <Text style={styles.socialText}>{staticText.fbButtonText}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <View style={styles.iconView}>
              <GoogleIcon width={27} height={27} fill="black" />
            </View>

            <View style={styles.iconTextView}>
              <Text style={styles.socialText}>
                {staticText.googleButtonText}
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <View style={styles.iconView}>
              <AppleIcon width={27} height={27} fill="black" />
            </View>

            <View style={styles.iconTextView}>
              <Text style={styles.socialText}>
                {staticText.appleButtonText}
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>{staticText.or}</Text>
          <View style={styles.line} />
        </View>

        {/* Password login */}
        <TouchableOpacity
          style={styles.passwordButton}
          onPress={moveToNextScreen}
        >
          <Text style={styles.passwordText}>{staticText.passText}</Text>
        </TouchableOpacity>

        {/* Sign up link */}
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>{staticText.doNotAccount} </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.signUpLink}>{staticText.signUpText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default PreviewScreen;
