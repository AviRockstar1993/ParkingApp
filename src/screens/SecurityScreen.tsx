import { FlatList, Switch, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import { useState } from 'react';
import { colors } from '../common/colors';
import { styles } from '../styles/SecurityStyles';
import ArrowRight from '../images/assets/svg/arrowRight.svg';
import { ws } from '../designs/measurement.design';

const SecurityScreen = ({ navigation }: any) => {
  const goback = () => {
    navigation.goBack();
  };
  const notificationData = [
    { id: '1', title: 'Face ID', value: true },
    { id: '2', title: 'Remember me', value: false },
    { id: '3', title: 'Touch ID', value: false },
    { id: '4', title: 'Google Authenticator' },
  ];
  const [notifications, setNotifications] = useState(notificationData);

  const toggleSwitch = (id: string) => {
    const updated = notifications.map(item =>
      item.id === id ? { ...item, value: !item.value } : item,
    );
    setNotifications(updated);
  };

  const renderItem = ({ item, index }: any) => {
    const isLastItem = index === notifications.length - 1;

    return (
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.title}</Text>

        {isLastItem ? (
          <View style={{ marginRight: ws(10) }}>
            <ArrowRight width={18} height={18} />
          </View>
        ) : (
          <Switch
            value={item.value}
            onValueChange={() => toggleSwitch(item.id)}
            trackColor={{
              false: colors.customGrey,
              true: colors.splashFirst,
            }}
            thumbColor={colors.white}
          />
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainView}>
        <Header title="Security" onBack={goback} titleAlign="left" />

        <FlatList
          data={notifications}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Change Password</Text>
            </TouchableOpacity>
          }
        />
      </View>
    </SafeAreaView>
  );
};
export default SecurityScreen;
