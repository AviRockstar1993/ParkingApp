import { StyleSheet } from 'react-native';
import { hs, ms, ws } from '../designs/measurement.design';
import { colors } from '../common/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: ws(20),
    backgroundColor: colors.white,
  },
  mainView: {
    flex: 1,
    flexDirection: 'column',
  },
  button: {
    backgroundColor: colors.btnBack,
    borderRadius: ws(25),
    paddingVertical: hs(15),
    alignItems: 'center',
    marginLeft: ws(10),
    marginRight: ws(10),
    marginTop: hs(50),
  },
  alignView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: hs(15),
  },
  itemText: {
    fontSize: ms(15),
    paddingLeft: ws(10),
    fontWeight: '500',
    textAlign: 'left',
  },
  title: {
    fontSize: ms(25),
    fontWeight: '600',
    textAlign: 'center',
    paddingHorizontal: ws(20),
    marginTop: hs(-5),
  },
  buttonText: {
    color: colors.splashFirst,
    fontWeight: '700',
    fontSize: ws(16),
  },
});
