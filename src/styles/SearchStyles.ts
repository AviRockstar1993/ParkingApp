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

  mainView: {
    flex: 1,
    justifyContent: 'space-between',
  },

  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: ws(0.8),
    borderColor: colors.splashFirst,
    backgroundColor: colors.roundColor,
    borderRadius: ws(10),
    paddingHorizontal: ws(10),
    marginTop: hs(15),
    height: hs(40),
    opacity: ws(0.5),
  },
  noResult: {
    textAlign: 'center',
    paddingTop: hs(15),
    fontSize: ms(15),
    fontWeight: '500',
  },
  input: {
    flex: 1,
    marginHorizontal: ws(10),
    fontSize: ms(14),
    color: colors.black,
    fontWeight: '600',
  },

  divider: {
    height: hs(0.5),
    backgroundColor: colors.customGrey,
    marginVertical: ws(20),
  },

  recentTitle: {
    fontSize: ms(16),
    fontWeight: '600',
    marginBottom: hs(10),
  },

  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: hs(10),
  },

  itemText: {
    fontSize: ms(15),
    color: colors.customGrey,
  },
});
