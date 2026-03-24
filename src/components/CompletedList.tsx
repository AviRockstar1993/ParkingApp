import React, { useState } from 'react';
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import { hs, ms, ws } from '../designs/measurement.design';
import { colors } from '../common/colors';

interface Props {
  data: any[];
}

const CompletedList = ({ data }: Props) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const ListItem = ({ item }: any) => {
    const isActive = activeId === item.id;
    return (
      <View style={styles.itemWrapper}>
        <View style={styles.itemContainer}>
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
              <TouchableOpacity
                onPress={() => setActiveId(item.id)}
                style={styles.amountView}
              >
                <Text style={styles.textCancel}>{item.buttonText}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.cancelBtn}>
            <Text style={styles.cancelText}>View Ticket</Text>
          </TouchableOpacity>
        </View>
      </View>
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

export default CompletedList;

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
  itemWrapper: {
    marginBottom: hs(10),
    flexDirection: 'column',
    backgroundColor: colors.indicate,
    borderRadius: ws(10),
    marginLeft: ws(10),
    marginRight: ws(10),
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
    borderRadius: ws(10),
    padding: ws(10),
    marginTop: hs(5),
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
    paddingLeft: ws(3),
  },
  textCancel: {
    color: colors.green,
    fontSize: ms(9),
    padding: ws(2),
    fontWeight: '700',
    textAlign: 'center',
  },
  amountView: {
    padding: ws(1.5),
    borderRadius: ws(5),
    borderWidth: ws(1),
    borderColor: colors.green,
    marginLeft: ws(10),
    justifyContent: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: hs(10),
    marginBottom: hs(10),
    marginLeft: ws(10),
    marginRight: ws(10),
    justifyContent: 'space-between',
  },

  cancelBtn: {
    flex: 1,
    paddingVertical: hs(5),
    marginRight: ws(5),
    borderRadius: ws(15),
    borderWidth: ws(1),
    borderColor: colors.splashFirst,
    alignItems: 'center',
  },

  primaryBtn: {
    flex: 1,
    paddingVertical: hs(5),
    marginLeft: ws(5),
    borderRadius: ws(15),
    backgroundColor: colors.splashFirst,
    alignItems: 'center',
  },

  cancelText: {
    color: colors.splashFirst,
    fontWeight: '600',
    fontSize: ms(12),
  },

  primaryText: {
    color: colors.white,
    fontWeight: '600',
    fontSize: ms(12),
  },

  divider: {
    height: hs(0.5),
    backgroundColor: colors.customGrey,
    marginTop: hs(10),
    marginLeft: ws(10),
    marginRight: ws(10),
  },
});
