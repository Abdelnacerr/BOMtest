import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/Redux/store';
import ProductList from './src/Features/Products/ProductList';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <ProductList />
        <StatusBar style="auto" />
      </SafeAreaView>
    </Provider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FFFA',
  },
});
