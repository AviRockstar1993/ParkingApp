import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/SearchStyles';
import SearchIcon from '../images/assets/svg/searchActive.svg';
import Close from '../images/assets/svg/close.svg';
import SearchRight from '../images/assets/svg/searchRight.svg';
import Header from '../components/Header';
import FilterModal from '../components/FilterModal';
import ParkingLogo from '../images/assets/svg/parkLogo.svg';

const DATA = [
  'Campion Cattages',
  'Willow Brae',
  'Orchard Park',
  'Chaucer Ridings',
  'Bandhouse Lane',
  'Portley Lane',
];

const SearchScreen = ({ navigation }: any) => {
  const [search, setSearch] = useState('');
  const [recent, setRecent] = useState(DATA);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [filteredParkingData, setFilteredParkingData] = useState<any[]>([]);

  const goback = () => {
    navigation.goBack();
  };

  const removeItem = (item: any) => {
    setRecent(prev => prev.filter(i => i !== item));
  };

  const renderItem = ({ item }: any) => (
    <View style={styles.itemRow}>
      <Text style={styles.itemText}>{item}</Text>

      <TouchableOpacity onPress={() => removeItem(item)}>
        <Close width={18} height={18} />
      </TouchableOpacity>
    </View>
  );

  const filteredData = recent.filter(item =>
    item.toLowerCase().includes(search.toLowerCase()),
  );

  const renderItemForFilterData = ({ item }: any) => {
    return (
      <View style={styles.itemContainer}>
        {/* Left Icon */}
        <View style={styles.iconContainer}>
          <ParkingLogo width={30} height={30} />
        </View>

        {/* Middle Content */}
        <View style={styles.middleContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.address}>{item.address}</Text>
        </View>

        {/* Right Content */}
        <View style={styles.rightContainer}>
          <Text style={styles.distance}>{item.distance}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Search" onBack={goback} titleAlign="left" />

      <View>
        <View style={styles.searchBox}>
          <SearchIcon width={20} height={20} />

          <TextInput
            placeholder="Parking"
            placeholderTextColor="#999"
            value={search}
            onChangeText={setSearch}
            style={styles.input}
          />
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <SearchRight width={19} height={16} />
          </TouchableOpacity>
        </View>

        <View style={styles.divider} />

        {/* Recent */}
        {filteredParkingData.length > 0 ? (
          <>
            <Text style={styles.recentTitle}>Result(1275)</Text>
            <FlatList
              data={filteredParkingData}
              keyExtractor={item => item.id}
              renderItem={renderItemForFilterData}
            />
          </>
        ) : (
          <>
            <Text style={styles.recentTitle}>Recent</Text>
            {filteredData.length === 0 && (
              <Text style={styles.noResult}>No results found</Text>
            )}
            <FlatList
              data={filteredData}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderItem}
            />
          </>
        )}
        <FilterModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onApply={data => setFilteredParkingData(data)}
        />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
