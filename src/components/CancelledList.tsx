import React, { useState } from 'react';
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import Saved from '../images/assets/svg/save.svg';
import { hs, ms, ws } from '../designs/measurement.design';
import { colors } from '../common/colors';

interface Props {
  data: any[];
}

const CommonList = ({ data }: Props) => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const ListItem = ({ item }: any) => {
    const isActive = activeId === item.id;
    return (
      <TouchableOpacity style={styles.itemContainer}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.listTitle}>{item.name}</Text>
          <Text style={styles.subtitle}>{item.address}</Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: hs(5),
              alignItems: 'center',
            }}
          >
            <Text style={styles.colorText}>{item.amount}</Text>
            <Text style={styles.textHrs}>{item.perHrs}</Text>
            <View style={styles.amountView}>
              <Text style={styles.textCancel}>Cancelled</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <ListItem item={item} />}
      ItemSeparatorComponent={() => <View style={{ height: ws(10) }} />}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default CommonList;

const styles = StyleSheet.create({
  activePill: {
    backgroundColor: colors.splashFirst,
  },
  activeText: {
    color: colors.white,
  },
  text: {
    paddingLeft: ws(5),
    color: colors.splashFirst,
    fontWeight: '700',
    fontSize: ms(14),
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#F1F1F1',
    padding: 15,
    borderRadius: 16,
    marginBottom: 12,
    alignItems: 'center',
  },

  iconContainer: {
    margin: ws(5),
    flexDirection: 'row',
    alignContent: 'center',
  },

  textContainer: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: ws(20),
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.indicate,
    borderRadius: ws(10),
    padding: ws(10),
    marginTop: hs(5),
    marginLeft: ws(10),
    marginRight: ws(10),
  },
  image: {
    width: ws(60),
    height: ws(60),
    borderRadius: ws(10),
    overflow: 'hidden',
  },
  listTitle: {
    fontSize: ms(15),
    fontWeight: '700',
    textAlign: 'left',
  },
  innerText: {
    fontSize: ms(13),
    fontWeight: '600',
    textAlign: 'center',
    color: colors.customBlack,
  },
  innerSecondText: {
    fontSize: ms(12),
    fontWeight: '600',
    textAlign: 'center',
    color: colors.customGrey,
  },
  sectionTitle: {
    fontSize: ms(18),
    fontWeight: '700',
    marginVertical: ws(10),
  },
  listView: {
    flex: 1,
    flexDirection: 'column',
    marginTop: hs(10),
  },
  subtitle: {
    fontSize: hs(12),
    color: colors.customGrey,
    fontWeight: '400',
    paddingTop: hs(5),
    textAlign: 'left',
  },
  colorText: {
    color: colors.splashFirst,
    fontSize: ms(12),
    fontWeight: '700',
  },
  textHrs: {
    color: colors.customGrey,
    fontSize: ms(10),
    fontWeight: '400',
    textAlign: 'center',
    paddingLeft: ws(2),
  },
  textCancel: {
    color: colors.orange,
    fontSize: ms(9),
    fontWeight: '700',
    padding: ws(2),
    textAlign: 'center',
  },
  amountView: {
    padding: ws(1.5),
    borderWidth: ws(1),
    borderRadius: ws(5),
    borderColor: colors.orange,
    marginLeft: ws(10),
    justifyContent: 'center',
  },
});
