import { StyleSheet, Text, View } from 'react-native';
import CompassIcon from '../images/assets/svg/compass.svg';
import { hs, ms, ws } from '../designs/measurement.design';
import { colors } from '../common/colors';

const MapHeader = () => {
  return (
    <View style={styles.topRoundView}>
      <View style={styles.iconWrapper}>
        <CompassIcon width={20} height={20} />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.title}>To Trantow Courts Street</Text>
        <Text style={styles.subtitle}>500m</Text>
      </View>
    </View>
  );
};
export default MapHeader;

const styles = StyleSheet.create({
  iconWrapper: {
    width: ws(40),
    height: hs(40),
    borderRadius: ws(20),
    backgroundColor: colors.white,
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
    flex: 1,
  },

  title: {
    color: colors.white,
    fontSize: ms(16),
    fontWeight: '600',
  },

  subtitle: {
    color: colors.customGrey,
    fontSize: ms(14),
    marginTop: hs(2),
    fontWeight: '500',
  },

  iconView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
