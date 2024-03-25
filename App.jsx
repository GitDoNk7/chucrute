import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
// import Avatar from './assets/avatar.jpg';
import Foto from './assets/albert-einstein.jpg';

export default function App() {

  return (
    <View style={estilo.container}>
      <Image
        source={Foto}
        style={estilo.avatar}
      />
      <Text style={estilo.nome}>
        Albert Einstein
      </Text>
      <Text style={estilo.sobre}>
        Albert Einstein foi um físico teórico alemão, que desenvolveu a teoria da relatividade geral, um dos pilares da física moderna ao lado da mecânica quântica.
      </Text>
    </View>
  );
}

const estilo = StyleSheet.create({
  container:{
    backgroundColor: 'rgba(255,255,255,255)', 
    flex:1, 
    justifyContent:'center', 
    alignItems:'center'
  },
  avatar:{
    width:200,
    height:200,
    borderRadius:100,
    borderWidth: 5,
    borderTopColor: "#000",
    /// borderBottomColor:"#ff0",   
  },
  nome:{
    fontSize: 24,
    marginTop: 30
  },
  sobre:{
    fontSize: 18,
    marginHorizontal: 25,
    textAlign:'justify',
    padding: 20,
    backgroundColor: "#55555538",
    width: 350,
    marginTop:30,
    borderRadius:10
  }
}); 

