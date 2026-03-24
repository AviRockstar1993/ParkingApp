import React from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { colors } from '../common/colors';
import { hs, ms, ws } from '../designs/measurement.design';
import Saved from '../images/assets/svg/save.svg';

interface Props {
  visible: boolean;
  onClose: () => void;
  onRemove: () => void;
  item?: any;
}

const RemoveBookmarkModal: React.FC<Props> = ({
  visible,
  onClose,
  onRemove,
  item,
}) => {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.container}>
          {/* Drag Indicator */}
          <View style={styles.dragIndicator} />

          {/* Title */}
          <Text style={styles.title}>Remove From Bookmark?</Text>

          <View style={styles.divider} />

          {/* Content */}
          <View style={styles.row}>
            <Image source={item?.image} style={styles.image} />

            <View style={styles.textContainer}>
              <Text style={styles.name}>{item?.name}</Text>
              <Text style={styles.address}>{item?.address}</Text>
            </View>

            {/* Bookmark Icon */}
            <Saved width={20} height={20} />
          </View>

          {/* Buttons */}
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.cancelBtn} onPress={onClose}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.removeBtn} onPress={onRemove}>
              <Text style={styles.removeText}>Yes, Remove</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default RemoveBookmarkModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
  },
  container: {
    backgroundColor: colors.white,
    borderTopLeftRadius: ws(30),
    borderTopRightRadius: ws(30),
    padding: ws(20),
  },
  dragIndicator: {
    width: ws(50),
    height: hs(5),
    borderRadius: ws(3),
    backgroundColor: colors.customGrey,
    alignSelf: 'center',
    marginBottom: hs(10),
  },
  title: {
    fontSize: ms(18),
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: hs(10),
  },
  divider: {
    height: hs(1),
    backgroundColor: colors.customGrey,
    marginBottom: hs(15),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hs(20),
  },
  image: {
    width: ws(60),
    height: hs(60),
    borderRadius: ws(10),
  },
  textContainer: {
    flex: 1,
    marginLeft: ws(10),
  },
  name: {
    fontSize: ms(15),
    fontWeight: '600',
  },
  address: {
    fontSize: ms(12),
    color: colors.customGrey,
    paddingTop: hs(4),
  },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelBtn: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    paddingVertical: hs(12),
    borderRadius: ws(25),
    alignItems: 'center',
    marginRight: ws(10),
  },
  removeBtn: {
    flex: 1,
    backgroundColor: colors.splashFirst,
    paddingVertical: hs(12),
    borderRadius: ws(25),
    alignItems: 'center',
  },
  cancelText: {
    color: colors.splashFirst,
    fontWeight: '600',
    fontSize: ms(14),
  },
  removeText: {
    color: colors.white,
    fontWeight: '600',
    fontSize: ms(14),
  },
});
