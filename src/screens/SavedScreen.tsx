import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import { styles } from '../styles/SavedScreenStyles';
import RedLogo from '../images/assets/svg/redLogo.svg';
import { ws } from '../designs/measurement.design';
import NotifyIcon from '../images/assets/svg/notification.svg';
import { useCallback, useEffect, useState } from 'react';
import SearchFade from '../images/assets/svg/searchFade.svg';
import Saved from '../images/assets/svg/save.svg';
import { colors } from '../common/colors';
import RemoveBookmarkModal from '../components/RemoveBookmarkModal';
import { useFocusEffect } from '@react-navigation/native';

const SavedScreen = () => {
  const [search, setSearch] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const data = [
    {
      id: '1',
      name: 'Welbeck North',
      address: '7518 Washington Alley',
      image: require('../images/assets/png/imgBookmark.png'),
    },
    {
      id: '2',
      name: 'Allington Paddock',
      address: '2846 Maland Avenue',
      image: require('../images/assets/png/imgBookmark.png'),
    },
    {
      id: '3',
      name: 'Appleton Warren',
      address: '58448 Scoville Plaza',
      image: require('../images/assets/png/imgBookmark.png'),
    },
    {
      id: '4',
      name: 'Woodville Beeches',
      address: '28841 Redwing Avenue',
      image: require('../images/assets/png/imgBookmark.png'),
    },
    {
      id: '5',
      name: 'Palmeston Lawn',
      address: '0496 8th Street',
      image: require('../images/assets/png/imgBookmark.png'),
    },
    {
      id: '6',
      name: 'Gorsted Warton',
      address: '4520 Tempal hill',
      image: require('../images/assets/png/imgBookmark.png'),
    },
  ];

  const [recent, setRecent] = useState<any[]>([]);

  useFocusEffect(
    useCallback(() => {
      setRecent(data);
      setSearch('');
    }, []),
  );

  const filteredData = recent.filter(item => {
    if (!search.trim()) return true;

    return (
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.address.toLowerCase().includes(search.toLowerCase())
    );
  });

  const ListItem = ({ item }: any) => {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => {
          setSelectedItem(item);
          setModalVisible(true);
        }}
      >
        <Image source={item.image} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.listTitle}>{item.name}</Text>
          <Text style={styles.subtitle}>{item.address}</Text>
        </View>

        <Saved width={20} height={20} />
      </TouchableOpacity>
    );
  };

  const removeItem = (item: any) => {
    setRecent(prev => prev.filter(i => i !== item));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="My Bookmark"
        LeftComponent={<RedLogo width={13} height={13} />}
        titleAlign="left"
        RightIcon={NotifyIcon}
        rightIconProps={{ width: ws(20) }}
      />

      <View style={styles.searchBox}>
        <SearchFade width={20} height={20} />
        <TextInput
          placeholder="Search"
          placeholderTextColor={colors.customGrey}
          value={search}
          onChangeText={setSearch}
          style={styles.input}
        />
      </View>
      <View style={styles.listView}>
        {filteredData.length === 0 ? (
          <Text style={styles.noResult}>No results found</Text>
        ) : (
          <FlatList
            data={filteredData}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <ListItem item={item} />}
            ItemSeparatorComponent={() => <View style={{ height: ws(10) }} />}
            showsVerticalScrollIndicator={false}
          />
        )}
        <RemoveBookmarkModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          item={selectedItem}
          onRemove={() => {
            if (selectedItem) {
              removeItem(selectedItem);
            }
            setModalVisible(false);
          }}
        />
      </View>
    </SafeAreaView>
  );
};
export default SavedScreen;
