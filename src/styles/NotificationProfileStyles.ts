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
  alignView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hs(15),
  },
  itemText: {
    fontSize: ms(15),
    paddingLeft: ws(10),
    fontWeight: '500',
  },
  title: {
    fontSize: ms(25),
    fontWeight: '600',
    textAlign: 'center',
    paddingHorizontal: ws(20),
    marginTop: hs(-5),
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: ws(16),
  },
});
