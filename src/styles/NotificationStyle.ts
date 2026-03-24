import { StyleSheet } from 'react-native';
import { hs, ms, ws } from '../designs/measurement.design';
import { colors } from '../common/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: ws(24),
    backgroundColor: colors.white,
  },
  headerView: {
    flexDirection: 'row',
    marginTop: hs(10),
    marginBottom: hs(10),
    justifyContent: 'space-between',
    height: hs(40),
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
  innerText: {
    fontSize: ms(14),
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

  card: {
    flexDirection: 'row',
    backgroundColor: '#F1F1F1',
    padding: ws(15),
    borderRadius: ws(15),
    marginBottom: hs(10),
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
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: ws(5),
  },

  subtitle: {
    fontSize: 13,
    color: '#777',
  },
});
