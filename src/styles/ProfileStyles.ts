import { StyleSheet } from 'react-native';
import { hs, ms, ws } from '../designs/measurement.design';
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
  imageConatiner: {
    alignSelf: 'center',
    width: ws(120),
    height: hs(120),
    borderRadius: ws(60),
    marginTop: hs(10),
    backgroundColor: colors.indicate,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  editBtn: {
    bottom: 0,
    right: 0,
    width: ws(20),
    height: hs(20),
    borderRadius: ws(5),
    backgroundColor: colors.splashFirst,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginLeft: ws(70),
    marginTop: hs(-20),
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  menu: {
    margin: ws(10),
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
});
