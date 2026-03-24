import {
  Platform,
  Text,
  TouchableOpacity,
  View,
  Image,
  PermissionsAndroid,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/HomeScreenStyles';
import SearchIcon from '../images/assets/svg/searchActive.svg';
import NotifyIcon from '../images/assets/svg/notify.svg';
import HomeInsideIcon from '../images/assets/svg/homeInsideMap.svg';
import ZoomIn from '../images/assets/svg/zoom.svg';
import Location from '../images/assets/svg/location.svg';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { colors } from '../common/colors';
import { useEffect, useState } from 'react';
import MapModal from '../components/MapModal';
import MapHeader from '../components/MapHeader';
import Geolocation from '@react-native-community/geolocation';
import MapViewDirections from 'react-native-maps-directions';
import { contants } from '../common/constants';

const HomeScreen = ({ navigation, route }: any) => {
  const { navFromParking } = route.params || {};

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [currentLocation, setCurrentLocation] = useState(null);

  const diffLocation = [
    {
      id: 1,
      title: 'Home',
    },
    {
      id: 2,
      title: 'Office',
    },
    {
      id: 3,
      title: 'Hospitals',
    },
  ];

  const handleSearch = () => {
    navigation.navigate('Search');
  };
  const handleNotification = () => {
    navigation.navigate('Notification');
  };

  useEffect(() => {
    if (navFromParking) {
      setIsModalVisible(true);
    } else {
      setIsModalVisible(false);
    }
  }, []);

  const destination = {
    latitude: 22.5726,
    longitude: 88.3639,
  };

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'App needs access to your location',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );

      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true;
  };

  const getLocation = async () => {
    const hasPermission = await requestLocationPermission();

    if (!hasPermission) {
      console.log('Permission denied');
      return;
    } else {
      Geolocation.getCurrentPosition(
        (position: {
          coords: {
            latitude: number;
            longitude: number;
            altitude: number | null;
            accuracy: number;
            altitudeAccuracy: number | null;
            heading: number | null;
            speed: number | null;
          };
          timestamp: number;
        }) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ latitude, longitude });
        },

        (error: { code: number; message: string }) => {
          console.log('Location error:', error.message);
        },

        {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 10000,
        },
      );
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 22.5726,
          longitude: 88.3639,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker coordinate={destination} />
        {currentLocation && (
          <Marker coordinate={currentLocation}>
            <Image
              style={{ width: 50, height: 50 }}
              source={require('../images/assets/png/car.png')}
            />
          </Marker>
        )}
        {currentLocation && (
          <MapViewDirections
            origin={currentLocation}
            destination={destination}
            apikey={contants.GOOGLE_API_KEY}
            strokeWidth={4}
            strokeColor="blue"
          />
        )}
      </MapView>

      {navFromParking ? (
        <>
          <MapHeader />
        </>
      ) : (
        <View style={styles.headerView}>
          <TouchableOpacity
            style={styles.searchIconView}
            onPress={handleSearch}
          >
            <SearchIcon
              width={18}
              height={18}
              fill="transparent"
              style={styles.iconView}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.searchIconView}
            onPress={handleNotification}
          >
            <NotifyIcon
              width={18}
              height={20}
              fill="transparent"
              style={styles.iconView}
            />
          </TouchableOpacity>
        </View>
      )}

      {navFromParking ? (
        <View style={styles.lowerView}>
          <TouchableOpacity
            style={[
              styles.searchIconView,
              { backgroundColor: colors.splashFirst },
            ]}
          >
            <ZoomIn
              width={22}
              height={22}
              fill="transparent"
              style={styles.iconView}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.lowerView}>
          <TouchableOpacity style={styles.searchIconView}>
            <HomeInsideIcon
              width={22}
              height={22}
              fill="transparent"
              style={styles.iconView}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.searchIconView,
              { backgroundColor: colors.splashFirst },
            ]}
          >
            <ZoomIn
              width={22}
              height={22}
              fill="transparent"
              style={styles.iconView}
            />
          </TouchableOpacity>
        </View>
      )}

      {!navFromParking && (
        <View style={styles.bottomView}>
          {diffLocation.map(item => {
            return (
              <TouchableOpacity style={styles.pill} key={item.id}>
                <Location width={13} height={18} />
                <Text style={styles.text}>{item.title}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}

      <MapModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      />
    </SafeAreaView>
  );
};
export default HomeScreen;
