import { StyleSheet } from 'react-native';
import { hs, ms, ws } from '../designs/measurement.design';
import { colors } from '../common/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: ws(24),
    backgroundColor: colors.white,
  },
  heading: {
    fontSize: ms(18),
    fontWeight: '600',
    marginVertical: hs(10),
    marginHorizontal: ws(10),
  },

  sliderWrapper: {
    marginVertical: hs(10),
  },

  label: {
    alignSelf: 'center',
    backgroundColor: colors.splashFirst,
    paddingHorizontal: ws(10),
    paddingVertical: hs(4),
    borderRadius: ws(5),
    marginBottom: hs(10),
  },

  labelText: {
    color: colors.white,
    fontSize: ms(12),
  },

  card: {
    backgroundColor: colors.cardColor,
    borderRadius: ws(15),
    padding: ws(15),
    marginVertical: hs(8),
    marginHorizontal: ws(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  selectedCard: {
    borderWidth: 2,
    borderColor: colors.splashFirst,
  },

  cardText: {
    fontSize: ms(15),
    fontWeight: '600',
  },

  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#C2185B',
  },

  radioSelected: {
    backgroundColor: '#C2185B',
  },

  totalWrapper: {
    marginTop: hs(15),
    marginHorizontal: ws(12),
    flex: 1,
  },

  totalLabel: {
    fontSize: ms(15),
    fontWeight: '600',
  },

  totalText: {
    fontSize: ms(24),
    fontWeight: '700',
    color: colors.splashFirst,
    marginTop: hs(5),
  },

  durationText: {
    fontSize: ms(14),
    color: colors.customGrey,
  },

  button: {
    marginTop: 'auto',
    backgroundColor: colors.splashFirst,
    padding: ws(18),
    borderRadius: ws(30),
    alignItems: 'center',
  },

  buttonText: {
    color: colors.white,
    fontSize: ms(15),
    fontWeight: '600',
  },
});
