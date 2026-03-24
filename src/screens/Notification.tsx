import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NotifyIcon from '../images/assets/svg/notification.svg';
import LogoNotify from '../images/assets/svg/logoNotify.svg';
import ParkingLogo from '../images/assets/svg/parkingCancelled.svg';
import TwoStepVerify from '../images/assets/svg/twoStepVerification.svg';
import WalletCancel from '../images/assets/svg/walletCancel.svg';

import { styles } from '../styles/NotificationStyle';
import Header from '../components/Header';
import { ws } from '../designs/measurement.design';

const Notification = ({ navigation }: any) => {
  const goback = () => {
    navigation.goBack();
  };

  const DATA = [
    {
      title: 'Today',
      data: [
        {
          id: '1',
          type: 'success',
          title: 'Payment Successful!',
          subtitle: 'Parking booking at Partley was successful',
        },
        {
          id: '2',
          type: 'cancel',
          title: 'Parking Booking Canceled',
          subtitle: 'You have canceled parking at Gouse',
        },
      ],
    },
    {
      title: 'Yesterday',
      data: [
        {
          id: '3',
          type: 'verify',
          title: '2 step verification successful',
          subtitle: 'Google Authenticator set successful!',
        },
        {
          id: '4',
          type: 'wallet',
          title: 'E-Wallet Connected',
          subtitle: 'Wallet has been connected to Parking',
        },
      ],
    },
    {
      title: 'December 11, 2021',
      data: [
        {
          id: '5',
          type: 'success',
          title: 'Verification Successful',
          subtitle: 'Account verification complete',
        },
        {
          id: '6',
          type: 'cancel',
          title: 'Parking Booking Canceled',
          subtitle: 'You have canceled parking at Gouse',
        },
      ],
    },
  ];

  const getTypeStyle = (type: any) => {
    switch (type) {
      case 'success':
        return {
          Icon: LogoNotify,
        };
      case 'cancel':
        return {
          Icon: ParkingLogo,
        };
      case 'verify':
        return {
          Icon: TwoStepVerify,
        };
      case 'wallet':
        return {
          Icon: WalletCancel,
        };
      default:
        return {
          Icon: LogoNotify,
        };
    }
  };

  const NotificationCard = ({ item }: any) => {
    const { Icon } = getTypeStyle(item.type);
    return (
      <View style={styles.card}>
        <View style={styles.iconContainer}>
          <Icon width={60} height={60} />
          <View style={styles.textContainer}>
            <Text style={styles.innerText}>{item.title}</Text>
            <Text style={styles.innerSecondText}>{item.subtitle}</Text>
          </View>
        </View>
      </View>
    );
  };

  const renderSection = ({ item }: any) => (
    <View>
      <Text style={styles.sectionTitle}>{item.title}</Text>

      {item.data.map((notification: any) => (
        <NotificationCard key={notification.id} item={notification} />
      ))}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Notification"
        onBack={goback}
        RightIcon={NotifyIcon}
        rightIconProps={{ width: ws(25) }}
      />
      <FlatList
        data={DATA}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderSection}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};
export default Notification;
