import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import { styles } from '../styles/BookStyles';
import RedLogo from '../images/assets/svg/redLogo.svg';
import Search from '../images/assets/svg/searchFade.svg';
import { ws } from '../designs/measurement.design';
import React, { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import CommonList from '../components/CancelledList';
import OngoingList from '../components/OngoingList';
import CompletedList from '../components/CompletedList';

const BookScreen = () => {
  const diffLocation = ['Ongoing', 'Completed', 'Cancelled'];
  const [selected, setSelected] = useState('Ongoing');

  const cancelData = [
    {
      id: '1',
      name: 'Allignton Padlock',
      address: '7518 Washington Alley',
      image: require('../images/assets/png/imgBookmark.png'),
      amount: '$ 6.58',
      perHrs: '/2 hours',
    },
    {
      id: '2',
      name: 'Allington Paddock',
      address: '2846 Maland Avenue',
      image: require('../images/assets/png/imgBookmark.png'),
      amount: '$ 6.58',
      perHrs: ' /2 hours',
    },
    {
      id: '3',
      name: 'Appleton Warren',
      address: '58448 Scoville Plaza',
      image: require('../images/assets/png/imgBookmark.png'),
      amount: '$ 6.58',
      perHrs: ' /2 hours',
    },
    {
      id: '4',
      name: 'Woodville Beeches',
      address: '28841 Redwing Avenue',
      image: require('../images/assets/png/imgBookmark.png'),
      amount: '$ 6.58',
      perHrs: ' /2 hours',
    },
    {
      id: '5',
      name: 'Palmeston Lawn',
      address: '0496 8th Street',
      image: require('../images/assets/png/imgBookmark.png'),
      amount: '$ 6.58',
      perHrs: ' /2 hours',
    },
    {
      id: '6',
      name: 'Gorsted Warton',
      address: '4520 Tempal hill',
      image: require('../images/assets/png/imgBookmark.png'),
      amount: '$ 6.58',
      perHrs: ' /2 hours',
    },
  ];

  const ongoingData = [
    {
      id: '1',
      name: 'Allignton Padlock',
      address: '7518 Washington Alley',
      image: require('../images/assets/png/imgBookmark.png'),
      amount: '$ 6.58',
      perHrs: '/2 hours',
      buttonText: 'Now Active',
    },
    {
      id: '2',
      name: 'Allington Paddock',
      address: '2846 Maland Avenue',
      image: require('../images/assets/png/imgBookmark.png'),
      amount: '$ 6.58',
      perHrs: ' /2 hours',
      buttonText: 'Paid',
    },
  ];
  const completedData = [
    {
      id: '1',
      name: 'Allignton Padlock',
      address: '7518 Washington Alley',
      image: require('../images/assets/png/imgBookmark.png'),
      amount: '$ 6.58',
      perHrs: '/2 hours',
      buttonText: 'Completed',
    },
    {
      id: '2',
      name: 'Allington Paddock',
      address: '2846 Maland Avenue',
      image: require('../images/assets/png/imgBookmark.png'),
      amount: '$ 6.58',
      perHrs: ' /2 hours',
      buttonText: 'Completed',
    },
    {
      id: '3',
      name: 'Allington Paddock',
      address: '2846 Maland Avenue',
      image: require('../images/assets/png/imgBookmark.png'),
      amount: '$ 6.58',
      perHrs: ' /2 hours',
      buttonText: 'Completed',
    },
    {
      id: '4',
      name: 'Allington Paddock',
      address: '2846 Maland Avenue',
      image: require('../images/assets/png/imgBookmark.png'),
      amount: '$ 6.58',
      perHrs: ' /2 hours',
      buttonText: 'Completed',
    },
    {
      id: '5',
      name: 'Allington Paddock',
      address: '2846 Maland Avenue',
      image: require('../images/assets/png/imgBookmark.png'),
      amount: '$ 6.58',
      perHrs: ' /2 hours',
      buttonText: 'Completed',
    },
  ];

  const [cancelList, setCancelList] = useState<any[]>([]);
  const [ongoingList, setOngoingList] = useState<any[]>([]);
  const [search, setSearch] = useState('');

  useFocusEffect(
    useCallback(() => {
      setCancelList(cancelData);
      setOngoingList(ongoingData);
      setSearch('');
    }, []),
  );

  const filteredCancelData = cancelList.filter(item => {
    if (!search.trim()) return true;

    return (
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.address.toLowerCase().includes(search.toLowerCase())
    );
  });
  const filteredOngoinglData = ongoingList.filter(item => {
    if (!search.trim()) return true;

    return (
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.address.toLowerCase().includes(search.toLowerCase())
    );
  });
  const filteredCompletedData = completedData.filter(item => {
    if (!search.trim()) return true;

    return (
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.address.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="My Parking"
        LeftComponent={<RedLogo width={13} height={13} />}
        titleAlign="left"
        RightIcon={Search}
        rightIconProps={{ width: ws(25) }}
      />
      <View style={styles.bottomView}>
        {diffLocation.map(item => {
          const isSelected = selected === item;

          return (
            <TouchableOpacity
              key={item}
              style={[
                styles.pill,
                isSelected && styles.activePill, //active bg
              ]}
              onPress={() => {
                setSelected(item);
              }}
            >
              <Text
                style={[
                  styles.text,
                  isSelected && styles.activeText, //active text color
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.listView}>
        {selected === 'Cancelled' && <CommonList data={filteredCancelData} />}
        {selected === 'Ongoing' && <OngoingList data={filteredOngoinglData} />}
        {selected === 'Completed' && (
          <CompletedList data={filteredCompletedData} />
        )}
      </View>
    </SafeAreaView>
  );
};
export default BookScreen;
