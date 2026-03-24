import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';
import ModalHeader from '../images/assets/svg/modalHeader.svg';
import { colors } from '../common/colors';
import { hs, ms, ws } from '../designs/measurement.design';

type CustomModalProps = {
  visible: boolean;
  onClose: () => void;
  onPress: (event: GestureResponderEvent) => void;
  title?: string;
  subTitle?: string;
  buttonText?: string;
  children?: React.ReactNode;
};

const CustomModal: React.FC<CustomModalProps> = ({
  visible,
  onClose,
  onPress,
  title,
  subTitle,
  buttonText,
  children,
}) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.container}>
          {/* Icon Circle */}
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <ModalHeader width={170} height={140} fill={colors.white} />
          </View>

          {/* Text */}
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subTitle}</Text>

          {/* Button */}
          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: ms(28),
    fontWeight: '600',
    color: colors.splashFirst,
    marginBottom: hs(10),
    marginTop: hs(15),
  },
  subtitle: {
    fontSize: ms(16),
    fontWeight: '500',
    color: colors.customBlack,
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: colors.splashFirst,
    paddingVertical: ws(10),
    paddingHorizontal: hs(20),
    borderRadius: ws(30),
  },
  buttonText: {
    color: colors.white,
    fontWeight: '700',
    fontSize: ms(16),
  },
});
