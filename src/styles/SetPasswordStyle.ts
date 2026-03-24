import { StyleSheet } from 'react-native';
import { hs, ms, ws } from '../designs/measurement.design';
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
  backButton: {
    left: 0,
  },

  title: {
    fontSize: ms(25),
    fontWeight: '600',
    textAlign: 'center',
    paddingHorizontal: ws(20),
    marginTop: hs(-7),
  },

  infoText: {
    marginTop: hs(150),
    textAlign: 'center',
    fontSize: ms(15),
    fontWeight: '600',
    color: colors.black,
    marginBottom: hs(50),
  },

  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: ws(5),
    marginLeft: ws(15),
    marginRight: ws(15),
  },

  otpBox: {
    width: ws(50),
    height: hs(40),
    backgroundColor: colors.indicate,
    borderRadius: ws(10),
    textAlign: 'center',
    fontSize: ms(20),
    fontWeight: '600',
  },
  otpBoxActive: {
    backgroundColor: colors.roundColor,
    borderWidth: ws(1),
    borderColor: colors.splashFirst,
  },
  resendText: {
    marginTop: hs(30),
    textAlign: 'center',
    fontSize: ms(14),
    fontWeight: '600',
    color: colors.black,
  },

  timer: {
    color: colors.splashFirst,
    fontWeight: '600',
    fontSize: ms(14),
  },

  button: {
    paddingVertical: ws(15),
    borderRadius: ws(30),
    height: hs(50),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.splashFirst,
    marginHorizontal: ws(15),
    marginBottom: hs(20),
  },

  buttonText: {
    color: colors.white,
    fontSize: ms(16),
    fontWeight: '700',
  },
  alignView: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
