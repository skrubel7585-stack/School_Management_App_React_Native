import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';
const API = 'http://10.0.2.2:4000/api';

export default function AddStudent({ navigation }){
  const [name,setName]=useState(''); const [clas,setClas]=useState(''); const [section,setSection]=useState(''); const [roll,setRoll]=useState('');
  const add = async ()=>{ try{ await axios.post(API + '/students', { name, clas, section, roll }); Alert.alert('Added'); navigation.goBack(); }catch(e){ Alert.alert('Error', e.message); } };
  return (
    <View style={{flex:1,padding:16}}>
      <TextInput placeholder='Name' value={name} onChangeText={setName} style={{borderWidth:1,padding:8,marginBottom:8}} />
      <TextInput placeholder='Class' value={clas} onChangeText={setClas} style={{borderWidth:1,padding:8,marginBottom:8}} />
      <TextInput placeholder='Section' value={section} onChangeText={setSection} style={{borderWidth:1,padding:8,marginBottom:8}} />
      <TextInput placeholder='Roll' value={roll} onChangeText={setRoll} style={{borderWidth:1,padding:8,marginBottom:8}} />
      <Button title='Add' onPress={add} />
    </View>
  );
}
