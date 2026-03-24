import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../common/colors';
import { hs, ms, ws } from '../designs/measurement.design';

type LogoutProps = {
  visible: boolean;
  onClose: () => void;
};

const LogoutModal: React.FC<LogoutProps> = ({ visible, onClose }) => {
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
          <Text style={styles.title}>Logout</Text>

          <View style={styles.divider} />

          {/* Message */}
          <Text style={styles.message}>Are you sure you want to log out?</Text>

          {/* Cancel Button */}
          <TouchableOpacity style={styles.cancelBtn} onPress={onClose}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>

          {/* Confirm Button */}
          <TouchableOpacity style={styles.confirmBtn} onPress={onClose}>
            <Text style={styles.confirmText}>Yes, Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default LogoutModal;

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
    color: colors.customBlack,
  },
  divider: {
    height: hs(1),
    backgroundColor: colors.indicate,
    marginVertical: hs(10),
  },
  message: {
    textAlign: 'center',
    fontSize: ms(15),
    color: colors.customBlack,
    fontWeight: '700',
    marginVertical: hs(20),
  },
  cancelBtn: {
    backgroundColor: colors.splashFirst,
    paddingVertical: hs(15),
    borderRadius: ws(30),
    alignItems: 'center',
    marginBottom: hs(15),
  },
  cancelText: {
    color: colors.white,
    fontSize: ms(15),
    fontWeight: '700',
  },
  confirmBtn: {
    backgroundColor: '#F1F1F1',
    paddingVertical: hs(15),
    borderRadius: ws(30),
    alignItems: 'center',
  },
  confirmText: {
    color: colors.splashFirst,
    fontSize: ms(15),
    fontWeight: '700',
  },
});
