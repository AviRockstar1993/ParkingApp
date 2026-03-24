import { Image, Switch, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/ProfileStyles';
import { hs, ws } from '../designs/measurement.design';
import Header from '../components/Header';
import RedLogo from '../images/assets/svg/redLogo.svg';
import NotifyIcon from '../images/assets/svg/notifyBlack.svg';
import ProfileIcon from '../images/assets/svg/profile.svg';
import Profile from '../images/assets/svg/profileImage.svg';
import Payment from '../images/assets/svg/payment.svg';
import Notification from '../images/assets/svg/notification.svg';
import DarkTheme from '../images/assets/svg/darkTheme.svg';
import Logout from '../images/assets/svg/logout.svg';
import Security from '../images/assets/svg/security.svg';
import Help from '../images/assets/svg/help.svg';
import EditIcon from '../images/assets/svg/edit.svg';
import { useState } from 'react';
import {
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import { colors } from '../common/colors';
import ImagePickerModal from '../components/ImagePickerModal';
import LogoutModal from '../components/LogoutModal';

const ProfileScreen = ({ navigation }: any) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [imageUri, setImageUri] = useState<any>('');
  const [isDark, setIsDark] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const openCamera = () => {
    setModalVisible(false);
    launchCamera({ mediaType: 'photo' }, (response: ImagePickerResponse) => {
      if (response.didCancel) {
        console.log('User cancelled camera');
        return;
      }

      if (response.errorCode) {
        console.log('Camera Error: ', response.errorMessage);
        return;
      }

      if (response.assets && response.assets.length > 0) {
        const uri = response.assets[0].uri;
        if (uri) {
          setImageUri(uri);
        }
      }
    });
  };

  const openGallery = () => {
    setModalVisible(false);
    launchImageLibrary(
      { mediaType: 'photo' },
      (response: ImagePickerResponse) => {
        if (response.didCancel) {
          console.log('User cancelled gallary');
          return;
        }

        if (response.errorCode) {
          console.log('Gallery fetch Error: ', response.errorMessage);
          return;
        }

        if (response.assets && response.assets.length > 0) {
          const uri = response.assets[0].uri;
          if (uri) {
            setImageUri(uri);
          }
        }
      },
    );
  };

  const menuItems = [
    { id: '1', title: 'Edit Profile', icon: Profile, screen: 'Register' },
    {
      id: '2',
      title: 'Payment',
      icon: Payment,
    },
    {
      id: '3',
      title: 'Notification',
      icon: NotifyIcon,
      screen: 'NotificationFromProfile',
    },
    { id: '4', title: 'Security', icon: Security, screen: 'SecurityScreen' },
    { id: '5', title: 'Help', icon: Help },
  ];

  const renderItem = (item: any) => {
    const Icon = item.icon;
    const handlePress = () => {
      if (item.screen) {
        navigation.navigate(item.screen, { fromProfile: 'true' });
      } else if (item.screen === 'NotificationFromProfile') {
        navigation.navigate(item.screen);
      } else if (item.screen === 'SecurityScreen') {
        navigation.navigate(item.screen);
      }
    };
    return (
      <TouchableOpacity style={styles.item} key={item.id} onPress={handlePress}>
        <Icon width={20} height={20} />
        <Text style={styles.itemText}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  const handleLogout = () => {
    setIsModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Profile"
        LeftComponent={<RedLogo width={13} height={13} />}
        titleAlign="left"
        RightIcon={Notification}
        rightIconProps={{ width: ws(25) }}
      />
      <View style={styles.imageConatiner}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <ProfileIcon
            width={90}
            height={90}
            fill={colors.white}
            style={{ marginTop: hs(35) }}
          />
        )}
      </View>
      <TouchableOpacity
        style={styles.editBtn}
        onPress={() => setModalVisible(true)}
      >
        <EditIcon width={12} height={12} fill={colors.black} />
      </TouchableOpacity>
      <ImagePickerModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onCamera={openCamera}
        onGallery={openGallery}
      />
      {/* Menu Items */}
      <View style={styles.menu}>
        {menuItems.map(renderItem)}

        {/* Dark Theme */}
        <View style={styles.item}>
          <DarkTheme width={22} height={22} />
          <Text style={styles.itemText}>Dark Theme</Text>
          <Switch
            value={isDark}
            onValueChange={setIsDark}
            style={{ marginLeft: 'auto' }}
            trackColor={{ false: colors.customGrey, true: colors.splashFirst }}
            thumbColor={colors.white}
          />
        </View>

        <TouchableOpacity style={styles.item} onPress={handleLogout}>
          <Logout width={20} height={20} />
          <Text style={[styles.itemText, { color: 'red' }]}>Logout</Text>
        </TouchableOpacity>
        <LogoutModal
          visible={isModalVisible}
          onClose={() => setIsModalVisible(false)}
        />
      </View>
    </SafeAreaView>
  );
};
export default ProfileScreen;
