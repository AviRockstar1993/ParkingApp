import { StyleSheet } from 'react-native';
import { colors } from '../common/colors';
import { ws, hs, ms } from '../designs/measurement.design';

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
  inputView: {
    marginTop: hs(35),
    marginLeft: ws(5),
    marginRight: ws(5),
  },
  headerView: {
    flexDirection: 'row',
    marginTop: hs(10),
    marginBottom: hs(10),
  },
  backButton: {
    left: 0,
  },
  imageConatiner: {
    alignSelf: 'center',
    width: ws(120),
    height: hs(120),
    borderRadius: ws(60),
    backgroundColor: colors.indicate,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    flexDirection: 'column',
    overflow: 'hidden',
    marginTop: hs(10),
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
    left: ws(35),
    top: hs(-25),
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  phoneField: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.indicate,
    borderRadius: ws(15),
    paddingHorizontal: ws(5),
    borderWidth: ws(0.1),
  },
  phoneContainer: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textContainer: {
    backgroundColor: 'transparent',
    height: hs(50),
    paddingVertical: 0,
  },
  flagButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  fieldWrapper: {
    marginTop: hs(15),
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.indicate,
    borderRadius: ws(15),
    paddingHorizontal: ws(15),
    height: hs(50),
    borderWidth: ws(0.1),
  },
  button: {
    backgroundColor: colors.splashFirst,
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
});
