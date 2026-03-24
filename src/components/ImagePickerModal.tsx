import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../common/colors';
import { hs, ws } from '../designs/measurement.design';

type ImagePickProps = {
  visible: boolean;
  onClose: () => void;
  onCamera: () => void;
  onGallery: () => void;
};

const ImagePickerModal: React.FC<ImagePickProps> = ({
  visible,
  onClose,
  onCamera,
  onGallery,
}) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.option} onPress={onCamera}>
            <Text style={styles.text}>Capture with Camera</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option} onPress={onGallery}>
            <Text style={styles.text}>Choose from Gallery</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option} onPress={onClose}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ImagePickerModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContainer: {
    width: '80%',
    backgroundColor: colors.white,
    borderRadius: 12,
    paddingVertical: 20,
  },

  option: {
    paddingVertical: 15,
    alignItems: 'center',
    backgroundColor: colors.splashFirst,
    marginBottom: hs(10),
    marginLeft: ws(10),
    marginRight: ws(10),
    borderRadius: ws(5),
  },

  text: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.white,
  },

  cancelText: {
    color: colors.white,
    fontWeight: '600',
  },
});
