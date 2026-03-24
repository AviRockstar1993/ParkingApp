import React, { useEffect, useRef } from 'react';
import { View, Animated } from 'react-native';
import { styles } from '../styles/SplashStyles';

const SplashFirst = ({ navigation }: any) => {
  const scale = useRef(new Animated.Value(0.5)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(scale, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setTimeout(() => {
        navigation.replace('SplashSecond');
      }, 800);
    });
  }, []);
  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../images/assets/png/logo.png')}
        style={[
          styles.logo,
          {
            transform: [{ scale }],
            opacity,
          },
        ]}
        resizeMode="contain"
      />
    </View>
  );
};
export default SplashFirst;
