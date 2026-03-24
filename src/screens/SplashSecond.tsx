import { Image, View } from 'react-native';
import { styles } from '../styles/SplashStyles';
import { useEffect } from 'react';

const SplashSecond = ({ navigation }: any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 1000);
  }, []);
  return (
    <View style={styles.background}>
      <Image
        source={require('../images/assets/png/splashImg.png')}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
};
export default SplashSecond;
