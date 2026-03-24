import { StyleSheet } from 'react-native';
import { colors } from '../common/colors';
import { ws, hs, ms } from '../designs/measurement.design';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: ws(286),
    height: hs(53),
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: ws(340),
    height: hs(300),
  },
  imageContainer: {
    marginBottom: hs(10),
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  iconView: {
    marginTop: hs(25),
    alignItems: 'center',
  },
  boldText: {
    fontWeight: '600',
    fontSize: ms(25),
    flexShrink: 1,
    textAlign: 'center',
  },
  boldTextSecond: {
    fontWeight: '600',
    fontSize: ms(25),
    flexShrink: 1,
    paddingTop: hs(10),
    textAlign: 'center',
  },
  titleView: {
    flexDirection: 'column',
    marginTop: hs(30),
    width: ws(390),
  },
  description: {
    fontSize: ms(14),
    color: colors.customText,
    marginBottom: 10,
    paddingLeft: ws(25),
    paddingRight: ws(25),
    paddingTop: hs(10),
    textAlign: 'center',
    width: ws(366),
  },
  dot: {
    width: ws(20),
    height: hs(5),
    marginHorizontal: hs(5),
    borderRadius: ws(2),
  },
  activeDot: { backgroundColor: colors.splashFirst },
  inactiveDot: { backgroundColor: colors.indicate },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: hs(25),
  },

  buttonContainer: {
    flexDirection: 'column',
    marginHorizontal: hs(40),
    marginVertical: ws(40),
  },

  skipButton: {
    fontSize: ms(16),
    color: colors.splashFirst,
    fontWeight: '700',
    textAlign: 'center',
    paddingTop: hs(15),
  },

  nextButton: {
    fontSize: ms(16),
    color: colors.white,
    fontWeight: '700',
    textAlign: 'center',
    paddingTop: hs(15),
  },
  nextButtonView: {
    backgroundColor: colors.splashFirst,
    height: hs(50),
    borderRadius: ws(20),
    width: '100%',
  },
  skipButtonView: {
    backgroundColor: colors.grey,
    height: hs(50),
    borderRadius: ws(20),
    marginTop: hs(10),
    width: '100%',
  },
});
