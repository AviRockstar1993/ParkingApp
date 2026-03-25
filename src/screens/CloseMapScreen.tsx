import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import {
  OnSuccessfulScanProps,
  QRCodeScanner,
  QRCodeValidator,
} from '@masumdev/rn-qrcode-scanner';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../common/colors';
import CustomModal from '../components/GoToHomeModal';

const CloseMapScreen = ({ navigation }: any) => {
  const [hasPermission, setHasPermission] = useState(false);
  const [scannedMember, setScannedMember] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(true);

  const handleSuccessfulScan = (data: OnSuccessfulScanProps) => {
    if (data.code) {
      setScannedMember(data.code);
    }
    console.log(data);
  };

  const validateQRCode: QRCodeValidator = (code: string) => {
    if (code) {
      return { valid: true, code, message: 'Success' };
    }

    return {
      valid: false,
      message:
        'Invalid QR code format. Expected HTTPS URL or product code (PROD-XXXXXX).',
    };
  };

  const handleScan = () => {
    setModalVisible(false);
    navigation.navigate('ParkingTicket', { fromCloseMapScreen: true });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <QRCodeScanner
        // Core functionality
        core={{
          onSuccessfulScan: handleSuccessfulScan,
          validate: validateQRCode,
        }}
        // Scanning behavior
        scanning={{
          cooldownDuration: 3000,
          scanningArea: {
            // tolerance: 80,∂
          },
        }}
        // UI Controls
        uiControls={{
          showControls: true,
          showStatus: true,
          showTorchButton: false, // We're using custom controls
        }}
        // Appearance
        appearance={{
          theme: 'light',
          overlayStyle: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            opacity: 0.9,
          },
          frameStyle: {
            width: 280,
            height: 280,
            borderRadius: 20,
          },
          cornerStyle: {
            color: '#00AAFF',
            width: 4,
            length: 30,
          },
          statusStyle: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            textColor: '#FFFFFF',
            borderRadius: 12,
            padding: 10,
            fontWeight: '600',
          },
        }}
      /> */}

      {/* {scannedMember && (
        <View style={styles.bottomContainer}>
          <View style={styles.infoContainer}>
            <Text style={styles.memberText}>{scannedMember}</Text>
          </View>
        </View>
      )} */}
      <CustomModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        title="You have Arrived"
        titleColor={colors.splashFirst}
        subTitle="Please scan the parking Qr code on the scanner machine to enter"
        buttonText="Ok"
        fromMap={true}
        onPress={handleScan}
      />
    </SafeAreaView>
  );
};
export default CloseMapScreen;

const styles = StyleSheet.create({
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  infoContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
  },
  memberText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  container: {
    flex: 1,
    backgroundColor: colors.splashFirst,
  },
});
