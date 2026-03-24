import { StyleSheet, TouchableOpacity, View } from 'react-native';
import BackIcon from '../images/assets/svg/backIcon.svg';
import { hs, ws } from '../designs/measurement.design';

type BackArrowProps = {
  onPress: () => void;
};

const BackArrow: React.FC<BackArrowProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.backButton} onPress={onPress}>
      <BackIcon width={26} height={18} fill="black" />
    </TouchableOpacity>
  );
};
export default BackArrow;

const styles = StyleSheet.create({
  backButton: {
    // marginBottom: hs(20),
    // alignItems: 'center',
  },
});
