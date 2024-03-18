import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
import Avatar from './assets/avatar.jpg';

export default function App() {

  return (
    <View style={estilo.container}>
      <Image
        source={Avatar}
        style={estilo.avatar}
      />
    </View>
  );
}

const estilo = StyleSheet.create({
  container:{
    backgroundColor: 'rgba(255,255,0,255)', 
    flex:1, 
    justifyContent:'space-around', 
    alignItems:'center'
  },
  avatar:{
    width:200,
    height:200
  }
}); 

