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
  listTitle: {
    fontSize: ms(15),
    fontWeight: '500',
    textAlign: 'left',
  },
  input: {
    flex: 1,
    marginHorizontal: ws(10),
    fontSize: ms(14),
    color: colors.customText,
    fontWeight: '400',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.indicate,
    borderRadius: ws(10),
    paddingHorizontal: ws(10),
    marginTop: hs(15),
    height: hs(40),
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.indicate,
    borderRadius: ws(10),
    padding: ws(10),
    marginTop: hs(5),
  },
  image: {
    width: ws(60),
    height: ws(60),
    borderRadius: ws(10),
    overflow: 'hidden',
  },
  textContainer: {
    flex: 1,
    marginLeft: ws(15),
  },
  listView: {
    flex: 1,
    flexDirection: 'column',
    marginTop: hs(10),
  },
  subtitle: {
    fontSize: hs(12),
    color: colors.customGrey,
    fontWeight: '400',
    textAlign: 'left',
  },
  noResult: {
    textAlign: 'center',
    paddingTop: hs(15),
    fontSize: ms(15),
    fontWeight: '500',
  },
  iconContainer: { marginLeft: 10 },
});
