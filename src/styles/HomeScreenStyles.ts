import { StyleSheet } from 'react-native';
import { hs, ms, ws } from '../designs/measurement.design';
import { colors } from '../common/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  headerView: {
    position: 'absolute',
    top: ws(50),
    right: ws(15),
    flexDirection: 'row',
    gap: ws(5),
  },
  searchIconView: {
    height: hs(40),
    width: ws(40),
    marginHorizontal: ws(5),
    borderRadius: ws(20),
    backgroundColor: colors.grey,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: { width: ws(0), height: hs(1) }, // for ios
    shadowOpacity: ws(0.1),
    shadowRadius: ws(1),
    elevation: ws(5), //for android
  },
  lowerView: {
    position: 'absolute',
    bottom: hs(60),
    right: ws(15),
    flexDirection: 'column',
    gap: ws(15),
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

  map: {
    flex: 1,
    ...StyleSheet.absoluteFill,
  },
  iconView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomView: {
    position: 'absolute',
    bottom: hs(5),
    left: ws(10),
    right: ws(10),
    flexDirection: 'row',
    borderRadius: ws(10),
    paddingHorizontal: ws(5),
    paddingVertical: hs(4),
    justifyContent: 'space-between',
    marginLeft: ws(10),
    marginRight: ws(10),
    marginBottom: hs(5),
    // Floating shadow (iOS)
    // shadowColor: colors.customGrey,
    //shadowOffset: { width: ws(0), height: hs(1) }, // for ios
    // shadowOpacity: ws(0.1),
    // shadowRadius: ws(1),
    // elevation: ws(5),
  },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hs(5),
    paddingHorizontal: ws(12),
    borderRadius: ws(22),
    borderWidth: ws(1),
    borderColor: colors.splashFirst, // pink color
    backgroundColor: 'transparent',
  },
  activePill: {
    backgroundColor: colors.splashFirst, // your primary color
  },
  activeText: {
    color: colors.white,
  },
  text: {
    marginLeft: ws(5),
    color: colors.splashFirst,
    fontWeight: '600',
    fontSize: ms(14),
  },
});
