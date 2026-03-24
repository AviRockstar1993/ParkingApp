import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../common/colors';
import { hs, ms, ws } from '../designs/measurement.design';

type CancelParking = {
  visible: boolean;
  onClose: () => void;
};

const CancelParkingModal: React.FC<CancelParking> = ({ visible, onClose }) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      statusBarTranslucent
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          {/* Top Indicator */}
          <View style={styles.indicator} />

          {/* Title */}
          <Text style={styles.title}>Cancel Parking</Text>

          <View style={styles.divider} />

          {/* Message */}
          <Text style={styles.message}>
            Are you sure you want to cancel you parking Reservation?
          </Text>

          <Text style={styles.messageSecond}>
            Only 80% of the money you can refund from your payment according to
            our policy
          </Text>

          <View
            style={{
              flexDirection: 'row',
              marginTop: hs(10),
              justifyContent: 'space-between',
              marginBottom: hs(10),
            }}
          >
            <TouchableOpacity style={styles.cancelBtn} onPress={onClose}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.confirmBtn} onPress={onClose}>
              <Text style={styles.confirmText}>Yes, Remove</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CancelParkingModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  container: {
    backgroundColor: colors.white,
    borderTopLeftRadius: ws(30),
    borderTopRightRadius: ws(30),
    padding: ws(20),
    marginBottom: hs(5),
  },
  indicator: {
    alignSelf: 'center',
    width: ws(50),
    height: hs(5),
    borderRadius: ws(5),
    backgroundColor: colors.indicate,
    marginBottom: hs(10),
  },
  title: {
    textAlign: 'center',
    fontSize: ms(18),
    fontWeight: '700',
    marginBottom: hs(5),
    marginTop: hs(5),
    color: colors.orange,
  },
  divider: {
    height: hs(1),
    backgroundColor: colors.indicate,
    marginVertical: hs(10),
  },
  message: {
    textAlign: 'center',
    fontSize: ms(14),
    color: colors.customBlack,
    fontWeight: '700',
    marginVertical: hs(10),
  },
  messageSecond: {
    textAlign: 'center',
    fontSize: ms(13),
    color: colors.customGrey,
    fontWeight: '400',
    marginBottom: hs(5),
  },
  cancelBtn: {
    backgroundColor: colors.splashFirst,
    height: hs(40),
    width: ws(100),
    justifyContent: 'center',
    borderRadius: ws(15),
    alignItems: 'center',
  },
  cancelText: {
    color: colors.white,
    fontSize: ms(15),
    fontWeight: '700',
    textAlign: 'center',
  },
  confirmBtn: {
    backgroundColor: colors.splashFirst,
    height: hs(40),
    width: ws(130),
    borderRadius: ws(15),
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirmText: {
    color: colors.white,
    fontSize: ms(15),
    fontWeight: '700',
    textAlign: 'center',
    padding: ws(3),
  },
});
