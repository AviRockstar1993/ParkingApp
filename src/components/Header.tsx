import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextStyle,
} from 'react-native';
import BackArrow from '../components/BackArrow';
import { hs, ms, ws } from '../designs/measurement.design';
import { colors } from '../common/colors';
import RedLogo from '../images/assets/svg/redLogo.svg';

interface HeaderProps {
  title: string;
  onBack?: () => void;
  LeftComponent?: React.ReactNode;
  RightIcon?: React.FC<any>;
  titleAlign?: 'left' | 'center' | 'right';
  titleProps?: {
    style?: TextStyle;
    [key: string]: any;
  };
  rightIconProps?: any;
}

const Header: React.FC<HeaderProps> = ({
  title,
  onBack,
  LeftComponent,
  RightIcon,
  titleAlign,
  titleProps,
  rightIconProps,
}) => {
  return (
    <View style={styles.headerView}>
      <View style={styles.leftContainer}>
        {onBack ? (
          <BackArrow onPress={onBack} />
        ) : LeftComponent ? (
          <View style={styles.redView}>
            <RedLogo width={13} height={13} />
          </View>
        ) : (
          <View style={{ width: ws(40) }}></View>
        )}
      </View>

      <View
        style={[
          styles.titleContainer,
          titleAlign === 'left' && { alignItems: 'flex-start' },
          titleAlign === 'center' && { alignItems: 'center' },
          titleAlign === 'right' && { alignItems: 'flex-end' },
        ]}
      >
        <Text style={[styles.title, titleProps?.style]} {...titleProps}>
          {title}
        </Text>
      </View>
      {RightIcon ? (
        <TouchableOpacity style={styles.rightIcon}>
          <RightIcon {...rightIconProps} />
        </TouchableOpacity>
      ) : (
        <View style={styles.rightIcon} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerView: {
    flexDirection: 'row',
    marginTop: hs(10),
    marginBottom: hs(10),
    justifyContent: 'space-between',
    alignItems: 'center',
    height: hs(40),
    marginLeft: ws(5),
  },
  redView: {
    width: ws(30),
    height: hs(30),
    borderRadius: ws(10),
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: hs(-8),
    backgroundColor: colors.splashFirst,
  },
  backButton: {
    left: 0,
  },
  title: {
    fontSize: ms(22),
    fontWeight: '600',
    textAlign: 'center',
    paddingHorizontal: ws(20),
  },
  leftContainer: {
    width: ws(40),
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  rightIcon: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Header;
