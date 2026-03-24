import { StyleSheet } from 'react-native';
import { hs, ws, ms } from '../designs/measurement.design';
import { colors } from '../common/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: ws(20),
    backgroundColor: colors.white,
  },

  headerView: {
    flexDirection: 'row',
    marginTop: hs(10),
    marginBottom: hs(10),
  },
  bottomView: {
    bottom: hs(5),
    flexDirection: 'row',
    borderRadius: ws(10),
    paddingHorizontal: ws(5),
    paddingVertical: hs(4),
    justifyContent: 'space-between',
    marginTop: hs(10),
    // shadowOpacity: ws(0.1),
    // shadowRadius: ws(1),
    // elevation: ws(5),
    // marginLeft: ws(5),
    // marginRight: ws(5),
  },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hs(8),
    paddingHorizontal: ws(15),
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
    paddingLeft: ws(5),
    color: colors.splashFirst,
    fontWeight: '700',
    fontSize: ms(14),
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#F1F1F1',
    padding: 15,
    borderRadius: 16,
    marginBottom: 12,
    alignItems: 'center',
  },

  iconContainer: {
    margin: ws(5),
    flexDirection: 'row',
    alignContent: 'center',
  },

  textContainer: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: ws(20),
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.indicate,
    borderRadius: ws(10),
    padding: ws(10),
    marginTop: hs(5),
  },
  image: {
    width: ws(60),
    height: ws(60),
    borderRadius: ws(10),
    overflow: 'hidden',
  },
  listTitle: {
    fontSize: ms(15),
    fontWeight: '700',
    textAlign: 'left',
  },
  innerText: {
    fontSize: ms(13),
    fontWeight: '600',
    textAlign: 'center',
    color: colors.customBlack,
  },
  innerSecondText: {
    fontSize: ms(12),
    fontWeight: '600',
    textAlign: 'center',
    color: colors.customGrey,
  },
  rightIcon: {
    width: ws(30),
    alignItems: 'flex-end',
  },
  sectionTitle: {
    fontSize: ms(18),
    fontWeight: '700',
    marginVertical: ws(10),
  },
  listView: {
    flex: 1,
    flexDirection: 'column',
    marginTop: hs(15),
  },
  subtitle: {
    fontSize: hs(12),
    color: colors.customGrey,
    fontWeight: '400',
    paddingTop: hs(5),
    textAlign: 'left',
  },
  noResult: {
    textAlign: 'center',
    paddingTop: hs(15),
    fontSize: ms(15),
    fontWeight: '500',
  },
  colorText: {
    color: colors.splashFirst,
    fontSize: ms(12),
    fontWeight: '700',
  },
  textHrs: {
    color: colors.customGrey,
    fontSize: ms(10),
    fontWeight: '400',
    textAlign: 'center',
    paddingLeft: ws(3),
  },
  textCancel: {
    color: colors.orange,
    fontSize: ms(9),
    fontWeight: '700',
    textAlign: 'center',
  },
  amountView: {
    padding: ws(3),
    borderWidth: ws(1),
    borderRadius: ws(5),
    borderColor: colors.orange,
    marginLeft: ws(10),
    justifyContent: 'center',
  },
});
