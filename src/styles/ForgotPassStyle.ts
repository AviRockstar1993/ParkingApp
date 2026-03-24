import { StyleSheet } from 'react-native';
import { hs, ms, ws } from '../designs/measurement.design';
import { colors } from '../common/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: ws(20),
    backgroundColor: colors.white,
  },

  title: {
    fontSize: ms(25),
    fontWeight: '600',
    textAlign: 'center',
    paddingHorizontal: ws(20),
    marginTop: hs(-7),
  },

  illustration: {
    marginBottom: hs(10),
    alignSelf: 'center',
  },

  desc: {
    textAlign: 'center',
    color: colors.customBlack,
    marginBottom: hs(20),
    paddingHorizontal: ws(10),
    fontWeight: '600',
    fontSize: ms(14),
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: ws(20),
    borderRadius: ws(15),
    marginBottom: hs(15),
    marginLeft: ws(10),
    marginRight: ws(10),
  },

  activeCard: {
    borderWidth: ws(2),
    borderColor: colors.splashFirst,
  },

  iconCircle: {
    width: ws(50),
    height: hs(50),
    borderRadius: ws(25),
    backgroundColor: colors.roundColor,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: ws(15),
  },

  cardTitle: {
    color: colors.customGrey,
    fontWeight: '400',
    fontSize: ms(13),
  },

  cardValue: {
    fontWeight: '600',
    marginTop: hs(3),
    fontSize: ms(14),
  },

  button: {
    backgroundColor: colors.splashFirst,
    padding: ws(15),
    borderRadius: ws(30),
    alignItems: 'center',
    marginTop: hs(25),
    marginLeft: ws(10),
    marginRight: ws(10),
  },

  buttonText: {
    color: colors.white,
    fontWeight: '700',
    fontSize: ms(16),
  },
  headerView: {
    flexDirection: 'row',
    marginTop: hs(10),
    marginBottom: hs(10),
  },
  backButton: {
    left: 0,
  },
  alignView: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
