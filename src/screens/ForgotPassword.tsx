import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/ForgotPassStyle';
import BackArrow from '../components/BackArrow';
import ForgotImage from '../images/assets/svg/forgotImg.svg';
import { colors } from '../common/colors';
import MessageIcon from '../images/assets/svg/message.svg';
import EmailWithRedIcon from '../images/assets/svg/emailWithRed.svg';
import { staticText } from '../config/staticText';
import Header from '../components/Header';

const ForgotPasswordScreen = ({ navigation }: any) => {
  const [selected, setSelected] = useState<'sms' | 'email'>('sms');

  const goback = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.alignView}>
        <View>
          <Header title="Forgot Password" onBack={goback} titleAlign="left" />

          <View style={styles.illustration}>
            <ForgotImage width={420} height={270} fill={colors.black} />
          </View>

          {/* Description */}
          <Text style={styles.desc}>
            Select which contact details should we use to reset your password
          </Text>

          {/* SMS Option */}
          <TouchableOpacity
            style={[styles.card, selected === 'sms' && styles.activeCard]}
            onPress={() => setSelected('sms')}
          >
            <View style={styles.iconCircle}>
              <MessageIcon width={20} height={20} fill={colors.white} />
            </View>

            <View style={{ flexDirection: 'column' }}>
              <Text style={styles.cardTitle}>Via SMS</Text>
              <Text style={styles.cardValue}>+92 3******31</Text>
            </View>
          </TouchableOpacity>

          {/* Email Option */}
          <TouchableOpacity
            style={[styles.card, selected === 'email' && styles.activeCard]}
            onPress={() => setSelected('email')}
          >
            <View style={styles.iconCircle}>
              <EmailWithRedIcon width={70} height={70} fill={colors.white} />
            </View>

            <View>
              <Text style={styles.cardTitle}>Via Email</Text>
              <Text style={styles.cardValue}>an*******445@gmail.com</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Continue Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SetPasswordScreen')}
        >
          <Text style={styles.buttonText}>{staticText.continue}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;
