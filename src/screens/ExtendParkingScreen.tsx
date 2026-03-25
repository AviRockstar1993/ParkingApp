import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import { styles } from '../styles/ExtendParkingStyles';
import Slider from '@react-native-community/slider';
import { useState } from 'react';
import { hs, ws } from '../designs/measurement.design';
import GoogleIcon from '../images/assets/svg/google.svg';
import AppleIcon from '../images/assets/svg/apple.svg';
import Paypal from '../images/assets/svg/paypal.svg';
import MasterCard from '../images/assets/svg/masterCard.svg';
import { colors } from '../common/colors';

const ExtendParkingScreen = ({ navigation }: any) => {
  const PAYMENT_METHODS = [
    { id: 'gpay', icon: GoogleIcon, label: 'Google Pay' },
    { id: 'paypal', icon: Paypal, label: 'Paypal' },
    { id: 'apple', icon: AppleIcon, label: 'Apple Pay' },
    { id: 'card', icon: MasterCard, label: '**** **** **** 7890' },
  ];

  const goback = () => {
    navigation.goBack();
  };
  const [duration, setDuration] = useState(2);
  const [selected, setSelected] = useState('card');

  const pricePerHour = 2;
  const total = duration * pricePerHour;

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Extend Parking Time" onBack={goback} titleAlign="left" />
      <Text style={styles.heading}>Add Duration</Text>

      <View style={styles.sliderWrapper}>
        <View style={styles.label}>
          <Text style={styles.labelText}>{duration} hrs</Text>
        </View>

        <Slider
          style={{ width: '100%' }}
          minimumValue={1}
          maximumValue={5}
          step={1}
          value={duration}
          minimumTrackTintColor={colors.splashFirst}
          maximumTrackTintColor={colors.customGrey}
          thumbTintColor={colors.splashFirst}
          onValueChange={setDuration}
        />
      </View>

      {/* Payment */}
      <Text style={styles.heading}>Choose Payment Methods</Text>

      <View style={{ flex: 1 }}>
        <FlatList
          data={PAYMENT_METHODS}
          keyExtractor={item => item.id}
          contentContainerStyle={{ paddingBottom: hs(15) }}
          renderItem={({ item }) => {
            const isSelected = selected === item.id;

            return (
              <TouchableOpacity
                onPress={() => setSelected(item.id)}
                style={[styles.card, isSelected && styles.selectedCard]}
              >
                <item.icon width={24} height={24} />
                <Text style={styles.cardText}>{item.label}</Text>

                <View
                  style={[styles.radio, isSelected && styles.radioSelected]}
                />
              </TouchableOpacity>
            );
          }}
        />
      </View>

      {/* Total */}
      <View style={styles.totalWrapper}>
        <Text style={styles.totalLabel}>Total</Text>
        <Text style={styles.totalText}>
          ${total.toFixed(2)}{' '}
          <Text style={styles.durationText}>/ {duration} hours</Text>
        </Text>
      </View>

      {/* Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default ExtendParkingScreen;
