import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import LiquidGlassBottomMenu from './components/LiquidGlassBottomMenu';

const App = () => {
  const handleItemPress = (index: number) => {
    console.log('Pressed item index:', index);
  };

  <View style={{ flex: 1, backgroundColor: 'black' }} />

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }} />
      <LiquidGlassBottomMenu onItemPress={handleItemPress} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default App;
