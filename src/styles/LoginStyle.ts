import { StyleSheet } from 'react-native';
import { hs, ms, ws } from '../designs/measurement.design';
import { colors } from '../common/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: ws(24),
    backgroundColor: colors.white,
  },
  title: {
    fontSize: ms(30),
    fontWeight: '600',
    marginBottom: hs(30),
    textAlign: 'left',
    paddingTop: hs(10),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.customGrey,
    borderRadius: ws(15),
    paddingHorizontal: ws(15),
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: ws(50),
    color: colors.black,
    paddingHorizontal: ws(20),
    fontWeight: '500',
    fontSize: ms(14),
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: hs(10),
  },
  mainView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  checkedBox: {
    width: ws(18),
    height: hs(19),
    borderColor: colors.splashFirst,
  },
  errorText: {
    color: colors.splashFirst,
    marginHorizontal: ws(10),
    fontSize: ms(12),
    marginTop: hs(8),
  },

  rememberText: {
    color: colors.splashFirst,
    fontWeight: '600',
    fontSize: ms(14),
    marginLeft: ws(10),
  },
  button: {
    backgroundColor: colors.splashFirst,
    borderRadius: ws(25),
    paddingVertical: hs(15),
    alignItems: 'center',
    marginBottom: hs(5),
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hs(15),
    marginLeft: ws(10),
    marginRight: ws(10),
  },
  line: {
    flex: 1,
    height: hs(1),
    backgroundColor: colors.indicate,
  },
  orText: {
    marginHorizontal: 10,
    textAlign: 'center',
    fontSize: ms(14),
    fontWeight: '600',
    color: colors.inputColor,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: hs(10),
  },
  socialButton: {
    borderWidth: ws(0.5),
    borderColor: colors.customGrey,
    borderRadius: ws(15),
    height: hs(40),
    width: ws(60),
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: hs(25),
  },
  signInText: {
    color: colors.customGrey,
    fontSize: ms(14),
    fontWeight: '400',
  },
  signInLink: {
    color: colors.splashFirst,
    fontWeight: '700',
    fontSize: ms(14),
    paddingLeft: ws(4),
  },
  forgotText: {
    color: colors.splashFirst,
    fontSize: ms(14),
    fontWeight: '600',
  },
  forgotPassView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hs(10),
  },
});
