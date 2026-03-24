import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SavedScreen from '../screens/SavedScreen';
import BookScreen from '../screens/BookScreen';
import { hs } from '../designs/measurement.design';
const BottomTab = createBottomTabNavigator();
import HomeInactive from '../images/assets/svg/homeInactive.svg';
import HomeActive from '../images/assets/svg/homeActive.svg';
import ProfileInactive from '../images/assets/svg/profileInactive.svg';
import ProfileActive from '../images/assets/svg/profileRed.svg';
import BookInactive from '../images/assets/svg/bookInactive.svg';
import BookActive from '../images/assets/svg/bookRed.svg';
import SaveInactive from '../images/assets/svg/saveInactive.svg';
import SaveActive from '../images/assets/svg/save.svg';
import { colors } from '../common/colors';

const BottomNavigation = ({ route }: any) => {
  const { navFromParking } = route.params || {};
  console.log('nav', navFromParking);
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarStyle: { height: hs(60), paddingBottom: hs(10) },
        tabBarActiveTintColor: colors.splashFirst,
        tabBarInactiveTintColor: colors.grey,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        initialParams={{ navFromParking }}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <HomeActive width={24} height={24} />
            ) : (
              <HomeInactive width={24} height={24} />
            ),
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="Saved"
        component={SavedScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <SaveActive width={18} height={24} />
            ) : (
              <SaveInactive width={18} height={24} />
            ),
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="Booking"
        component={BookScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <BookActive width={18} height={24} />
            ) : (
              <BookInactive width={18} height={24} />
            ),
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <ProfileActive width={18} height={24} />
            ) : (
              <ProfileInactive width={18} height={24} />
            ),
          headerShown: false,
        }}
      />
    </BottomTab.Navigator>
  );
};
export default BottomNavigation;
