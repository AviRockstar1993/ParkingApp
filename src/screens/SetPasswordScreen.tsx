import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackArrow from '../components/BackArrow';
import { styles } from '../styles/SetPasswordStyle';

const SetPasswordScreen = ({ navigation }: any) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(59);
  const inputs: any = useRef<Array<TextInput | null>>([]);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  // Timer countdown
  useEffect(() => {
    let interval: any;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Move to next input
    if (text && index < 3) {
      inputs.current[index + 1].focus();
    }
  };

  const handleBackspace = (text: string, index: number) => {
    if (!text && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const goback = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.alignView}>
        <View>
          <View style={styles.headerView}>
            <View style={styles.backButton}>
              <BackArrow onPress={goback} />
            </View>

            <Text style={styles.title}>Forgot Password</Text>
          </View>

          <Text style={styles.infoText}>
            Code has been send to +92 3******31
          </Text>

          {/* OTP Inputs */}
          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={ref => {
                  inputs.current[index] = ref;
                }}
                style={[
                  styles.otpBox,
                  focusedIndex === index && styles.otpBoxActive,
                ]}
                keyboardType="number-pad"
                maxLength={1}
                value={digit}
                onFocus={() => setFocusedIndex(index)}
                onBlur={() => setFocusedIndex(null)}
                onChangeText={text => handleChange(text, index)}
                onKeyPress={({ nativeEvent }) =>
                  nativeEvent.key === 'Backspace' &&
                  handleBackspace(digit, index)
                }
              />
            ))}
          </View>

          {/* Timer */}
          <Text style={styles.resendText}>
            Resend code in <Text style={styles.timer}>{timer}s</Text>
          </Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('CreatePasswordScreen')}
        >
          <Text style={styles.buttonText}>Verify</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SetPasswordScreen;
