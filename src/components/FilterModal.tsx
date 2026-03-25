import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Switch,
} from 'react-native';
import Slider from '@react-native-community/slider';
import { colors } from '../common/colors';
import { hs, ms, ws } from '../designs/measurement.design';

const { height } = Dimensions.get('window');

type FilterProps = {
  visible: boolean;
  onClose: () => void;
  onApply: (item: any[]) => void;
};

const FilterModal: React.FC<FilterProps> = ({ visible, onClose, onApply }) => {
  const [selectedSort, setSelectedSort] = useState('Distance');
  const [distance, setDistance] = useState(10);
  const [valet, setValet] = useState(true);

  const filterData = [
    {
      id: '1',
      title: 'Campion Cattoges',
      address: '1324 Antonietta Rest',
      distance: '1 km',
      price: '$2.22/hour',
    },
    {
      id: '2',
      title: 'De Lara Way',
      address: '85043 Kuhlman Key Apt. 375',
      distance: '1.2 km',
      price: '$2.42/hour',
    },
    {
      id: '3',
      title: 'Edward Brambles',
      address: '73405 Kiback Forks',
      distance: '2.0 km',
      price: '$1.32/hour',
    },
    {
      id: '4',
      title: 'Oak Tree Parc',
      address: '43822 Hirthe Harbor APT. 53',
      distance: '2.9 km',
      price: '$2.48/hour',
    },
    {
      id: '5',
      title: 'Hopton Hollies',
      address: '21290 Gutmann Lan',
      distance: '2.1 km',
      price: '$2.70/hour',
    },
  ];

  const sortOptions = ['Distance', 'Slots Available', 'Lower Price'];

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.container}>
          {/* Header */}
          <Text style={styles.title}>Filter</Text>
          <View style={styles.divider} />

          {/* Sort By */}
          <View style={styles.row}>
            <Text style={styles.sectionTitle}>Sort by</Text>
            <Text style={styles.seeAll}>See All</Text>
          </View>

          <View style={styles.pillContainer}>
            {sortOptions.map(item => {
              const isSelected = selectedSort === item;
              return (
                <TouchableOpacity
                  key={item}
                  onPress={() => setSelectedSort(item)}
                  style={[styles.pill, isSelected && styles.activePill]}
                >
                  <Text
                    style={[
                      styles.pillText,
                      isSelected && styles.activePillText,
                    ]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* Distance */}
          <Text style={styles.sectionTitle}>Distance</Text>

          <View style={{ alignItems: 'center' }}>
            <View style={styles.distanceLabel}>
              <Text style={styles.distanceText}>{distance} km</Text>
            </View>

            <Slider
              style={{ width: '100%' }}
              minimumValue={1}
              maximumValue={50}
              value={distance}
              onValueChange={setDistance}
              minimumTrackTintColor={colors.splashFirst}
              maximumTrackTintColor={colors.customGrey}
              thumbTintColor={colors.splashFirst}
            />
          </View>

          {/* Valet Parking */}
          <View style={styles.switchRow}>
            <Text style={styles.sectionTitle}>Valet Parking</Text>
            <Switch
              value={valet}
              onValueChange={setValet}
              trackColor={{ true: colors.splashFirst, false: colors.grey }}
              thumbColor={colors.white}
            />
          </View>

          <View style={styles.divider} />

          {/* Buttons */}
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.resetBtn} onPress={onClose}>
              <Text style={styles.resetText}>Reset</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.applyBtn}
              onPress={() => {
                onApply(filterData);
                onClose();
              }}
            >
              <Text style={styles.applyText}>Apply Filter</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default FilterModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  container: {
    height: height * 0.5,
    backgroundColor: colors.white,
    elevation: ws(5),
    shadowColor: colors.customGrey,
    borderTopLeftRadius: ws(25),
    borderTopRightRadius: ws(25),
    padding: ws(20),
  },
  title: {
    textAlign: 'center',
    fontSize: ms(18),
    fontWeight: '600',
  },
  divider: {
    height: hs(1),
    backgroundColor: colors.grey,
    marginVertical: ws(15),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  seeAll: {
    color: colors.splashFirst,
    fontWeight: '500',
  },
  sectionTitle: {
    fontSize: ms(15),
    fontWeight: '600',
    marginBottom: hs(10),
    paddingHorizontal: ws(8),
  },

  // Pills
  pillContainer: {
    flexDirection: 'row',
    marginBottom: hs(20),
    marginVertical: hs(5),
    marginHorizontal: ws(5),
  },
  pill: {
    borderWidth: ws(1),
    borderColor: colors.splashFirst,
    borderRadius: ws(20),
    paddingHorizontal: ws(15),
    paddingVertical: hs(8),
    marginRight: ws(10),
  },
  activePill: {
    backgroundColor: colors.splashFirst,
  },
  pillText: {
    color: colors.splashFirst,
  },
  activePillText: {
    color: colors.white,
  },

  // Distance label
  distanceLabel: {
    backgroundColor: colors.splashFirst,
    paddingHorizontal: ws(10),
    paddingVertical: hs(4),
    borderRadius: ws(6),
    marginBottom: hs(5),
  },
  distanceText: {
    color: colors.white,
    fontSize: ms(12),
  },

  // Switch
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: ws(15),
  },

  // Buttons
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  resetBtn: {
    flex: 1,
    backgroundColor: '#eee',
    padding: ws(15),
    borderRadius: ws(25),
    marginRight: ws(10),
    alignItems: 'center',
  },
  applyBtn: {
    flex: 1,
    backgroundColor: colors.splashFirst,
    padding: ws(15),
    borderRadius: ws(25),
    alignItems: 'center',
  },
  resetText: {
    color: colors.splashFirst,
    fontWeight: '600',
  },
  applyText: {
    color: colors.white,
    fontWeight: '600',
  },
});
