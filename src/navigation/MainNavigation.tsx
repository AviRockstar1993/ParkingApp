import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashFirst from '../screens/SplashFirst';
import OnboardingScreen from '../screens/OnboardingScreen';
import SplashSecond from '../screens/SplashSecond';
import PreviewScreen from '../screens/PreviewScreen';
import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import LoginWithForgotPass from '../screens/LoginWithForgotPass';
import ForgotPasswordScreen from '../screens/ForgotPassword';
import SetPasswordScreen from '../screens/SetPasswordScreen';
import CreatePasswordScreen from '../screens/CreatePassword';
import SearchScreen from '../screens/SearchScreen';
import BottomNavigation from './BottomNavigation';
import Notification from '../screens/Notification';
import NotificationFromProfile from '../screens/NotificationFromProfile';
import SecurityScreen from '../screens/SecurityScreen';
import ParkingTicket from '../screens/ParkingTicket';

const Stack = createNativeStackNavigator();

const MainNavigation = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashFirst}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="SplashSecond"
          component={SplashSecond}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Home"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Preview"
          component={PreviewScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginWithForgotPass"
          component={LoginWithForgotPass}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPass"
          component={ForgotPasswordScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SetPasswordScreen"
          component={SetPasswordScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreatePasswordScreen"
          component={CreatePasswordScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BottomNavigation"
          component={BottomNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NotificationFromProfile"
          component={NotificationFromProfile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SecurityScreen"
          component={SecurityScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ParkingTicket"
          component={ParkingTicket}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainNavigation;
