import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';
const API = 'http://10.0.2.2:4000/api';

export default function Attendance(){
  const [userId,setUserId]=useState(''); const [date,setDate]=useState(''); const [status,setStatus]=useState('present');
  const submit = async ()=>{ try{ await axios.post(API + '/attendance', { user_id: userId, date, status, role: 'student' }); Alert.alert('Saved'); }catch(e){ Alert.alert('Error', e.message); } };
  return (
    <View style={{flex:1,padding:16}}>
      <TextInput placeholder='User ID' value={userId} onChangeText={setUserId} style={{borderWidth:1,padding:8,marginBottom:8}} />
      <TextInput placeholder='Date (YYYY-MM-DD)' value={date} onChangeText={setDate} style={{borderWidth:1,padding:8,marginBottom:8}} />
      <TextInput placeholder='Status (present/absent/leave)' value={status} onChangeText={setStatus} style={{borderWidth:1,padding:8,marginBottom:8}} />
      <Button title='Submit' onPress={submit} />
    </View>
  );
}
