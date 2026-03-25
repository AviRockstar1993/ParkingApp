import { Animated, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import { styles } from '../styles/ParkingTimerScreenStyles';
import { useEffect, useRef, useState } from 'react';
import { colors } from '../common/colors';

const ParkingTimer = ({ navigation }: any) => {
  const goback = () => {
    navigation.navigate('BottomNavigation');
  };
  const TOTAL_TIME = 3 * 60 * 60;
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const [isOvertime, setIsOvertime] = useState(false);
  const borderAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 0) {
          setIsOvertime(true);
          return prev + 1;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTimeParts = (seconds: number) => {
    const abs = Math.abs(seconds);

    const h = Math.floor(abs / 3600);
    const m = Math.floor((abs % 3600) / 60);
    const s = abs % 60;

    return {
      hours: h.toString().padStart(2, '0'),
      minutes: m.toString().padStart(2, '0'),
      seconds: s.toString().padStart(2, '0'),
    };
  };

  useEffect(() => {
    if (isOvertime) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(borderAnim, {
            toValue: 1,
            duration: 800,
            useNativeDriver: false,
          }),
          Animated.timing(borderAnim, {
            toValue: 0,
            duration: 800,
            useNativeDriver: false,
          }),
        ]),
      ).start();
    }
  }, [isOvertime]);

  const borderColor = borderAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [colors.indicate, colors.splashFirst],
  });
  const { hours, minutes, seconds } = formatTimeParts(timeLeft);

  const Row = ({ label, value }: any) => (
    <View style={styles.row}>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          width: '30%',
        }}
      >
        <Text style={styles.label}>{label}</Text>
      </View>
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '70%',
        }}
      >
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Parking Timer" onBack={goback} titleAlign="left" />
      <Animated.View
        style={[
          styles.timerBox,
          isOvertime ? { borderColor } : { borderColor: colors.indicate },
        ]}
      >
        <View style={styles.timeRow}>
          <Text style={styles.timeNumber}>
            {isOvertime ? '+' : ''}
            {hours}
          </Text>
          <Text style={styles.timeNumber}>{minutes}</Text>
          <Text style={styles.timeNumber}>{seconds}</Text>
        </View>

        <View style={styles.labelRow}>
          <Text style={styles.timeLabel}>HRS</Text>
          <Text style={styles.timeLabel}>MIN</Text>
          <Text style={styles.timeLabel}>SEC</Text>
        </View>
      </Animated.View>

      <View style={styles.card}>
        <View style={styles.infoContainer}>
          <Row label="Parking Area" value="Parking lot of Son Manolia" />
          <Row label="Address" value="9569,Trantow Courts" />

          <Row label="Vehicle" value="Toyota Land Cru (AFD 6397 )" />
          <Row label="Parking Spot" value="1st Floor (A05)" />

          <Row label="Date" value="May 11, 2023" />
          <Row label="Duration" value="4 hours" />

          <Row label="Hours" value="09 AM - 13 PM" />
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ExtendParkingScreen')}
      >
        <Text style={styles.buttonText}>Extend Parking Time</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default ParkingTimer;
