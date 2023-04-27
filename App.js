import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const cadastro = () => {
    alert(nome);
    alert(email);
    alert(senha);
    //chamada back-end para cadastro
  
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      
      <Image style={{width:100,height:100, top: -58}} source={require('./assets/Ativo1.jpg')} />
      
      <TextInput placeholder="Seu nome..." style={styles.TextInput} onChangeText={Text=>setNome(Text)} />
      <TextInput placeholder="Seu e-mail..." style={styles.TextInput} onChangeText={Text=>setEmail(Text)} />
      <TextInput secureTextEntry={true} placeholder="Sua Senha..." style={styles.TextInput} onChangeText={Text=>setSenha(Text)} />
    
    <TouchableOpacity style={styles.btnCadastro} onPress={()=>cadastro()}> 
      <Text>REALIZAR CADASTRO</Text>
    </TouchableOpacity>
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
    justifyContent: 'center',
    padding:20,
    
  },

  TextInput:{
    width: '100%',
    height: 51,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingLeft:10,
    marginBottom: 5
  },
  btnCadastro:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width:197,
    height: 40,
    borderRadius: 5,
    paddingLeft: 10,
      }


});
