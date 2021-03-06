import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import warehouse from './assets/warehouse.png';
import Stock from './components/Stock.tsx';

// API-key: e65b79467f42542f670d2f4de507a7f8
console.log("hejsan");


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.base}>
        <Text style={{ color: 'black', fontSize: 32, paddingLeft: 90}}>Lager-Appen</Text>
        <Image source={warehouse} style={{ width: 367, height: 200 }} />
        <Stock />
        <StatusBar style="auto"/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  base: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: 12,
    paddingRight: 12,
  },
});
