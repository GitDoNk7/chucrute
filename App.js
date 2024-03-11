import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';

export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.nome}>Eliton</Text>
      <Text style={styles.cargo}>Professor</Text>
      <Image
        source='https://a.cdn-hotels.com/gdcs/production4/d1033/684b46ee-1e9d-452d-8851-3fc7e69ed45f.jpg'
        style={styles.img}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nome:{
    fontSize: 22,
    color: '#555'
  },
  cargo:{
    fontSize: 15,
    color: '#ccc'
  },
  img:{
    width:400,
    height:300
  }
});
