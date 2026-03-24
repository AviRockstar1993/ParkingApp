import {
  FlatList,
  Image,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import { styles } from '../styles/NotificationProfileStyles';
import { colors } from '../common/colors';
import { useState } from 'react';

const NotificationFromProfile = ({ navigation }: any) => {
  const goback = () => {
    navigation.goBack();
  };

  const notificationData = [
    { id: '1', title: 'General Notification', value: true },
    { id: '2', title: 'Sound', value: false },
    { id: '3', title: 'Vibrate', value: false },
    { id: '4', title: 'App Updates', value: true },
    { id: '5', title: 'New Service Available', value: false },
    { id: '6', title: 'New Tips Available', value: false },
  ];
  const [notifications, setNotifications] = useState(notificationData);

  const toggleSwitch = (id: string) => {
    const updated = notifications.map(item =>
      item.id === id ? { ...item, value: !item.value } : item,
    );
    setNotifications(updated);
  };

  const renderItem = ({ item }: any) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.title}</Text>
      <Switch
        value={item.value}
        onValueChange={() => toggleSwitch(item.id)}
        style={{ marginLeft: 'auto' }}
        trackColor={{
          false: colors.customGrey,
          true: colors.splashFirst,
        }}
        thumbColor={colors.white}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainView}>
        <Header title="Notification" onBack={goback} titleAlign="left" />

        <FlatList
          data={notifications}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};
export default NotificationFromProfile;
