import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/ParkingStyles';
import Header from '../components/Header';
import NotifyIcon from '../images/assets/svg/notification.svg';
import { ws } from '../designs/measurement.design';
import QrImage from '../images/assets/svg/qrCode.svg';
import Svg, { Line } from 'react-native-svg';
import QRCode from 'react-native-qrcode-svg';

const ParkingTicket = ({ navigation }: any) => {
  const goback = () => {
    navigation.goBack();
  };

  const moveToNext = () => {
    navigation.navigate('BottomNavigation', { navFromParking: true });
  };

  const Row = ({ label, value }: any) => (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Parking Ticket"
        onBack={goback}
        titleAlign="left"
        RightIcon={NotifyIcon}
        rightIconProps={{ width: ws(25) }}
      />
      <View style={styles.card}>
        {/* QR Section */}
        <Text style={styles.scanText}>
          Scan this on the scanner machine{'\n'}
          when you are in the parking lot
        </Text>

        <QRCode value="http://awesome.link.qr" />

        <View style={styles.dividerWrapper}>
          <Svg height="10" width="100%">
            <Line
              x1="0"
              y1="5"
              x2="100%"
              y2="5"
              stroke="#CFCFCF"
              strokeWidth="2"
              strokeDasharray="3,6"
            />
          </Svg>
        </View>

        <View style={styles.infoContainer}>
          <Row label="Name" value="Andrew Ainsley" />
          <Row label="Vehicle" value="Toyota (AFD 6397)" />

          <Row label="Parking Area" value="San Manolia" />
          <Row label="Parking Spot" value="1st Floor (A05)" />

          <Row label="Duration" value="4 hours" />
          <Row label="Date" value="May 11, 2023" />

          <Row label="Hours" value="09 AM - 13 PM" />
          <Row label="Phone" value="+92 3244449931" />
        </View>
      </View>

      {/* Button */}
      <TouchableOpacity style={styles.button} onPress={moveToNext}>
        <Text style={styles.buttonText}>Navigate to Parking Lot</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default ParkingTicket;
