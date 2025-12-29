import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

const API = 'http://10.0.2.2:4000/api';

export default function LoginScreen({ navigation }){
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const login = async ()=>{
    try{
      const res = await axios.post(API + '/auth/login', { email, password });
      const { user } = res.data;
      navigation.replace('Dashboard', { user, token: res.data.token });
    }catch(e){
      Alert.alert('Login failed', e.response?.data?.error || e.message);
    }
  };

  return (
    <View style={{flex:1,justifyContent:'center',padding:20}}>
      <Text style={{fontSize:24,marginBottom:20}}>School App Login</Text>
      <TextInput placeholder='Email' value={email} onChangeText={setEmail} style={{borderWidth:1,padding:8,marginBottom:10}} />
      <TextInput placeholder='Password' value={password} onChangeText={setPassword} secureTextEntry style={{borderWidth:1,padding:8,marginBottom:10}} />
      <Button title='Login' onPress={login} />
    </View>
  );
}
