import { StyleSheet } from 'react-native';
import { colors } from '../common/colors';
import { ws, hs, ms } from '../designs/measurement.design';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: ws(20),
    backgroundColor: colors.white,
  },
  backButton: {
    marginBottom: hs(30),
    marginHorizontal: ws(15),
  },
  heading: {
    fontSize: ms(30),
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
  },
  conatiner: {
    flex: 1,
    marginVertical: hs(2),
    marginHorizontal: ws(2),
    justifyContent: 'space-between',
  },
  socialContainer: {
    marginBottom: hs(10),
    marginVertical: hs(10),
    marginHorizontal: ws(10),
  },
  socialButton: {
    flexDirection: 'row',
    borderWidth: ws(1),
    borderColor: colors.black,
    borderRadius: ws(15),
    paddingVertical: hs(10),
    paddingHorizontal: ws(10),
    marginBottom: hs(15),
  },
  iconView: {
    marginLeft: ws(20),
  },
  iconTextView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialText: {
    fontSize: ms(14),
    fontWeight: '600',
    textAlign: 'center',
    paddingHorizontal: ws(20),
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hs(20),
    marginHorizontal: ws(20),
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: colors.grey,
  },
  orText: {
    marginHorizontal: 10,
    color: colors.splashFirst,
    fontWeight: '700',
  },
  passwordButton: {
    backgroundColor: colors.splashFirst,
    paddingVertical: hs(15),
    borderRadius: 10,
    alignItems: 'center',
    marginTop: hs(10),
    marginHorizontal: ws(20),
    marginVertical: ws(20),
  },
  passwordText: {
    color: colors.white,
    fontWeight: '700',
    fontSize: ms(16),
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signUpText: {
    color: colors.customGrey,
  },
  signUpLink: {
    color: colors.splashFirst,
    fontWeight: '700',
    paddingHorizontal: ws(5),
  },
});
