import { StatusBar, StyleSheet, useColorScheme } from 'react-native';
import MainNavigation from './src/navigation/MainNavigation';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
        translucent={true}
      />
      <MainNavigation />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
