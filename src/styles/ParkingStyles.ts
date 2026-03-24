import { StyleSheet } from 'react-native';
import { hs, ms, ws } from '../designs/measurement.design';
import { colors } from '../common/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: ws(20),
    justifyContent: 'space-between',
    backgroundColor: colors.white,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: ws(20),
    marginTop: hs(-60),
    shadowColor: '#000',
    borderColor: colors.indicate,
    shadowOpacity: 0.05,
    shadowRadius: ws(2),
    elevation: ws(3),
  },
  dividerWrapper: {
    marginVertical: hs(10),
  },
  scanText: {
    textAlign: 'center',
    color: colors.customGrey,
    fontSize: ms(14),
    marginBottom: hs(16),
    marginTop: hs(10),
  },

  qr: {
    marginTop: hs(5),
    alignSelf: 'center',
    resizeMode: 'contain',
  },

  divider: {
    borderStyle: 'dashed',
    borderWidth: ws(1),
    borderColor: '#ccc',
    marginVertical: hs(20),
  },

  infoContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: ws(20),
  },

  row: {
    width: '48%',
    marginBottom: hs(15),
  },

  label: {
    fontSize: ms(12),
    color: colors.customGrey,
    marginBottom: hs(4),
  },

  value: {
    fontSize: ms(14),
    fontWeight: '600',
    color: colors.black,
  },

  button: {
    backgroundColor: colors.splashFirst,
    paddingVertical: hs(14),
    borderRadius: ws(30),
    alignItems: 'center',
    marginTop: hs(50),
    position: 'relative',
  },

  buttonText: {
    color: colors.white,
    fontSize: ms(15),
    fontWeight: '600',
  },
});
