import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TextInputProps,
} from 'react-native';
import SecureHide from '../images/assets/svg/secureHide.svg';
import SecureShow from '../images/assets/svg/secureOpen.svg';
import { hs, ms, ws } from '../designs/measurement.design';
import { colors } from '../common/colors';

type CustomInputProps = TextInputProps & {
  isPassword?: boolean;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  focusedIcon?: React.ReactNode;
};

const CustomInput: React.FC<CustomInputProps> = ({
  isPassword,
  icon,
  iconRight,
  focusedIcon,
  style,
  ...props
}) => {
  const [secureText, setSecureText] = useState(isPassword ?? false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[styles.container, style]}>
      {(icon || focusedIcon) && (
        <View style={styles.iconContainer}>
          {isFocused ? focusedIcon || icon : icon}
        </View>
      )}
      <TextInput
        {...props}
        secureTextEntry={secureText}
        placeholderTextColor={colors.inputColor}
        style={styles.input}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />

      {iconRight && <View style={styles.iconRightContainer}>{iconRight}</View>}
      {/* Show/Hide password toggle */}
      {isPassword && (
        <TouchableOpacity onPress={() => setSecureText(!secureText)}>
          {secureText ? (
            <SecureHide width={17} height={14} fill="black" />
          ) : (
            <SecureShow width={17} height={14} fill="black" />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.indicate,
    borderRadius: ws(15),
    paddingHorizontal: ws(15),
    borderWidth: ws(0.1),
  },
  input: {
    flex: 1,
    height: ws(50),
    color: colors.black,
    paddingHorizontal: ws(20),
    fontWeight: '500',
    fontSize: ms(14),
  },
  iconContainer: {
    marginRight: ws(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconRightContainer: {
    marginRight: ws(10),
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});
