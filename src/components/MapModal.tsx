import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../common/colors';
import CloseWhite from '../images/assets/svg/closeWhite.svg';
import Location from '../images/assets/svg/locationRed.svg';
import { hs, ms, ws } from '../designs/measurement.design';

type MapParking = {
  visible: boolean;
  onClose: () => void;
};

const MapModal: React.FC<MapParking> = ({ visible, onClose }) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      statusBarTranslucent
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <View style={styles.iconWrapper}>
            <Location width={17} height={25} />
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.title}>San Manolia Parking</Text>
            <Text style={styles.subtitle}>9569, Tranto Courts</Text>
          </View>
          <TouchableOpacity style={styles.closeIconWrapper} onPress={onClose}>
            <CloseWhite width={15} height={15} />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default MapModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    bottom: 0,
  },
  container: {
    backgroundColor: colors.splashFirst,
    borderBottomLeftRadius: ws(30),
    borderBottomRightRadius: ws(30),
    padding: ws(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    fontSize: ms(15),
    fontWeight: '700',
    color: colors.white,
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
  iconWrapper: {
    width: ws(40),
    height: hs(40),
    borderRadius: ws(20),
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: ws(10),
  },
  closeIconWrapper: {
    width: ws(40),
    height: hs(40),
    borderRadius: ws(20),
    backgroundColor: colors.customOrange,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: ws(10),
  },
  topRoundView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.splashFirst,
    borderRadius: ws(40),
    paddingVertical: hs(10),
    paddingHorizontal: ws(15),
    margin: ws(15),
    elevation: ws(5),
    shadowColor: colors.black,
    shadowOpacity: ws(5),
  },
  textWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtitle: {
    color: colors.white,
    fontSize: ms(11),
    fontWeight: '400',
    textAlign: 'center',
  },
});
