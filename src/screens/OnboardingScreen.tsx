import {
  View,
  Text,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
  StatusBar,
  Platform,
} from 'react-native';
import { styles } from '../styles/OnboardingStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRef, useState } from 'react';

const OnboardingScreen = ({ navigation }: any) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  type Slide = {
    id: number;
    titleFirst: string;
    titleSecond: string;
    description: string;
    image: any;
  };
  const slidesRef = useRef<FlatList<Slide>>(null);
  const slides: Slide[] = [
    {
      id: 1,
      titleFirst: 'Find Parking Places',
      titleSecond: ' Around You Easily',
      description:
        ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard.',
      image: require('../images/assets/png/onboardingFirst.png'),
    },
    {
      id: 2,
      titleFirst: 'Book and Pay Parking',
      titleSecond: 'Quickly & Safely',
      description:
        ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard.',
      image: require('../images/assets/png/onboardingSecond.png'),
    },
    {
      id: 3,
      titleFirst: 'Extend Parking Time',
      titleSecond: 'As You Need',
      description:
        ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard.',
      image: require('../images/assets/png/onboardingThird.png'),
    },
  ];

  const renderSlide = ({ item }: any) => (
    <View style={styles.iconView}>
      <Image source={item.image} style={styles.image} resizeMode="contain" />
      <View style={styles.titleView}>
        <Text style={styles.boldText}>{item.titleFirst}</Text>
        <Text style={styles.boldText}>{item.titleSecond}</Text>
      </View>

      <Text style={styles.description} numberOfLines={3}>
        {item.description}
      </Text>
    </View>
  );

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      const nextIndex = currentIndex + 1;
      slidesRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    } else {
      navigation.navigate('Preview');
    }
  };

  const handleSkip = () => {
    navigation.navigate('Preview');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainView}>
        <FlatList
          data={slides}
          renderItem={renderSlide}
          keyExtractor={item => item.id.toString()}
          horizontal
          pagingEnabled
          ref={slidesRef}
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
        />

        {/* Pagination Dots */}
        <View style={styles.pagination}>
          {slides.map((id, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                currentIndex === index ? styles.activeDot : styles.inactiveDot,
              ]}
            />
          ))}
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleNext} style={styles.nextButtonView}>
          <Text style={styles.nextButton}>Next</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSkip} style={styles.skipButtonView}>
          <Text style={styles.skipButton}>Skip</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default OnboardingScreen;
