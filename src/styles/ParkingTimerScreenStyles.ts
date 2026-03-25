import { StyleSheet } from 'react-native';
import { hs, ms, ws } from '../designs/measurement.design';
import { colors } from '../common/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: ws(24),
  },
  timerBox: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: ws(10),
    borderRadius: ws(100),
    paddingVertical: hs(20),
    paddingHorizontal: ws(20),
    width: ws(200),
    height: hs(200),
    marginTop: hs(20),
  },

  timerText: {
    fontSize: ms(18),
    fontWeight: '700',
    color: colors.customBlack,
  },
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },

  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: hs(5),
  },

  timeNumber: {
    fontSize: ws(32),
    fontWeight: 'bold',
    color: colors.black,
  },

  timeLabel: {
    fontSize: ws(14),
    color: colors.customGrey,
  },
  row: {
    width: '100%',
    marginBottom: hs(15),
    flexDirection: 'row',
  },

  label: {
    fontSize: ms(12),
    color: colors.customGrey,
    textAlign: 'left',
    marginBottom: hs(4),
  },

  value: {
    fontSize: ms(14),
    fontWeight: '600',
    color: colors.black,
    textAlign: 'center',
  },
  card: {
    backgroundColor: colors.indicate,
    borderRadius: ws(20),
    shadowColor: colors.black,
    borderColor: colors.indicate,
    shadowOpacity: 0.05,
    marginTop: hs(20),
    shadowRadius: ws(2),
    elevation: ws(3),
  },
  infoContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: ws(20),
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
