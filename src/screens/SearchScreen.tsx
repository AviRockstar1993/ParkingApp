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
import BackArrow from '../components/BackArrow';
import SearchIcon from '../images/assets/svg/searchActive.svg';
import Close from '../images/assets/svg/close.svg';
import SearchRight from '../images/assets/svg/searchRight.svg';
import Header from '../components/Header';

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

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Search" onBack={goback} titleAlign="left" />

      <View style={styles.searchBox}>
        <SearchIcon width={20} height={20} />

        <TextInput
          placeholder="Parking"
          placeholderTextColor="#999"
          value={search}
          onChangeText={setSearch}
          style={styles.input}
        />
        <SearchRight width={19} height={16} />
      </View>

      <View style={styles.divider} />

      {/* Recent */}
      <Text style={styles.recentTitle}>Recent</Text>
      {filteredData.length === 0 && (
        <Text style={styles.noResult}>No results found</Text>
      )}
      <FlatList
        data={filteredData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

export default SearchScreen;
