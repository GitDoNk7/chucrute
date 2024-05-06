import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
// import Avatar from './assets/avatar.jpg';
import Foto from './assets/albert-einstein.jpg';
import Linguine from './assets/images.jpg';

export default function App() {

  return (
    <View style={estilo.container}>

      <View style={estilo.titulo}>

      <Image
        source={Foto}
        style={estilo.imgPerfil}
      />
      <Text style={estilo.nomeLL}>
        Albert Einstein
      </Text>
      </View>
      <Image
        source={Linguine}
        style={estilo.imgDosD}
      />
      <View style={estilo.nome}>
        <Text style={estilo.Arroba}>@Albertinho100pressão</Text>
      </View>
      <View style={estilo.nome}>
        <Text style={estilo.txttitulo}>Nome</Text>
      </View>
      <View style={estilo.Texto1}>
        <Text style={estilo.Texto2}>Albertinho</Text>
      </View>
      <View style={estilo.nome3}>
        <Text style={estilo.txttitulo}>Sobre</Text>
      </View>
      <View style={estilo.Texto1}>
        <Text style={estilo.Texto2}>Cadê as do job, papai? </Text>
      </View>
      <View style={estilo.nome3}>
        <Text style={estilo.txttitulo}>Feed</Text>
      </View>
      <View style={estilo.Texto1}>
        <Image
        source={Foto}
        style={estilo.imgDosD}
        />
          

      </View>
    </View>
    
  );
}

const estilo = StyleSheet.create({
  container:{
    backgroundColor: 'rgba(255,255,255,255)', 
    flex:1,
    marginTop:45
    
  },
  titulo: {
    fontSize: 20,
    width: '100%', 
    height: 60,
    backgroundColor: '#222',
    color: '#fff',
    textAlign: 'center'
  },
  subtitulo: {
    fontSize: 25,
    width: '100%', 
    height: 60,
    textAlign: 'center',
    marginTop: 10
  },
  imgPerfil: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'white',
    marginTop: 5,
    marginLeft: 5
  },
  imgDosD: {
    width: 250,
    height: 250,
    borderRadius: 125,
    marginTop: 10,
    marginLeft: 90,
    borderColor: 'black',
    borderWidth: 2
  },
  nomeLL:{
    fontSize: 24,
    textAlign: 'center',
    marginTop: -42,
    color: 'white'

  },
  nome:{
    marginLeft: 60,
    marginTop: 50
  },
  nome2:{
    marginLeft: 60,
    marginTop: 10
  },
  nome3:{
    marginLeft: 60,
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor : "blak",
    marginRight: 50
  },
  txttitulo:{
    fontFamily: "monospace",
    fontSize: 15,
    color: "gray",
    marginRight: 60
  },
  Texto1:{
    marginLeft: 70,
    marginTop: 5,
    marginRight: 60
  },
  Texto2:{
    fontFamily: "monospace",
    fontSize: 16,
    marginRight: 20
  },
  Arroba:{
    marginLeft: 63,
    fontSize: 17,
    marginTop: -10
  }
}); 

