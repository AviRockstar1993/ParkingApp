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
  backButton: {
    left: 0,
  },
  illustration: {
    marginBottom: hs(10),
    alignSelf: 'center',
  },

  title: {
    fontSize: ms(25),
    fontWeight: '600',
    textAlign: 'center',
    paddingHorizontal: ws(20),
    marginTop: hs(-7),
  },
  checkedBox: {
    width: ws(18),
    height: hs(19),
    borderColor: colors.splashFirst,
  },

  image: {
    width: '100%',
    height: 220,
    marginBottom: 20,
  },

  sectionTitle: {
    fontSize: ms(15),
    fontWeight: '600',
    marginBottom: hs(15),
    color: colors.customBlack,
  },
  fieldWrapper: {
    marginTop: hs(15),
  },
  commonStyle: {
    marginLeft: ws(10),
    marginRight: ws(10),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EDEDED',
    borderRadius: 12,
    paddingHorizontal: 12,
    marginBottom: 15,
    height: 55,
  },

  input: {
    flex: 1,
    marginHorizontal: 10,
  },

  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: ws(20),
  },

  rememberText: {
    color: colors.splashFirst,
    fontWeight: '600',
    fontSize: ms(14),
    marginLeft: ws(10),
  },

  button: {
    backgroundColor: colors.splashFirst,
    height: hs(50),
    borderRadius: ws(30),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hs(20),
  },

  buttonText: {
    color: colors.white,
    fontSize: ms(16),
    fontWeight: '700',
  },
  errorText: {
    color: colors.splashFirst,
    fontSize: ms(12),
    marginTop: hs(5),
    marginLeft: ws(5),
  },
  alignView: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
