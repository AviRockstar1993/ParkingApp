import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/ParkingStyles';
import Header from '../components/Header';
import NotifyIcon from '../images/assets/svg/notification.svg';
import { hs, ws } from '../designs/measurement.design';
import Svg, { Line } from 'react-native-svg';
import QRCode from 'react-native-qrcode-svg';
import { useEffect, useState } from 'react';
import CustomModal from '../components/GoToHomeModal';
import { colors } from '../common/colors';

const ParkingTicket = ({ navigation, route }: any) => {
  const [showMapModal, setShowMapModal] = useState(false);
  const [hideContent, setHideContent] = useState(false);
  const goback = () => {
    navigation.goBack();
  };
  const { fromCloseMapScreen } = route.params || {};

  const moveToNext = () => {
    navigation.navigate('BottomNavigation', { navFromParking: true });
  };

  const Row = ({ label, value }: any) => (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );

  useEffect(() => {
    if (fromCloseMapScreen) {
      const timer = setTimeout(() => {
        setShowMapModal(true);
        setHideContent(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const moveFromModal = () => {
    setShowMapModal(false);
    navigation.navigate('ParkingTimer');
  };

  return (
    <SafeAreaView style={styles.container}>
      {!hideContent && (
        <Header
          title="Parking Ticket"
          onBack={goback}
          titleAlign="left"
          RightIcon={NotifyIcon}
          rightIconProps={{ width: ws(25) }}
        />
      )}

      <View>
        {!hideContent && (
          <>
            <View
              style={[styles.card, fromCloseMapScreen && { marginTop: hs(20) }]}
            >
              {/* QR Section */}
              <Text style={styles.scanText}>
                Scan this on the scanner machine{'\n'}
                when you are in the parking lot
              </Text>

              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <QRCode value="http://awesome.link.qr" />
              </View>

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
            {fromCloseMapScreen ? null : (
              <TouchableOpacity style={styles.button} onPress={moveToNext}>
                <Text style={styles.buttonText}>Navigate to Parking Lot</Text>
              </TouchableOpacity>
            )}
          </>
        )}
      </View>

      {/* Button */}

      <CustomModal
        visible={showMapModal}
        onClose={() => setShowMapModal(false)}
        title="Scan Ticket Success!"
        titleColor={colors.splashFirst}
        subTitle="Your Vehicle is parked and the time will be counted down"
        buttonText="Ok"
        resizeBtn={true}
        fromMap={true}
        onPress={moveFromModal}
      />
    </SafeAreaView>
  );
};
export default ParkingTicket;
