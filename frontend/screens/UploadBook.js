import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import axios from 'axios';

const API = 'http://10.0.2.2:4000/api';

export default function UploadBook({ navigation }) {
  const [title,setTitle]=useState(''); const [file,setFile]=useState(null);
  const pick = async ()=>{ const res = await DocumentPicker.getDocumentAsync({}); if(res.type==='success') setFile(res); };
  const upload = async ()=>{ if(!title||!file) return Alert.alert('Missing'); const data = new FormData(); data.append('title', title); data.append('uploaded_by', 1); data.append('file', { uri: file.uri, name: file.name, type: file.mimeType || 'application/octet-stream' }); try{ await axios.post(API + '/books/upload', data, { headers: { 'Content-Type': 'multipart/form-data' } }); Alert.alert('Uploaded'); navigation.goBack(); }catch(e){ Alert.alert('Error', e.message); } };
  return (
    <View style={{flex:1,padding:16}}>
      <TextInput placeholder='Title' value={title} onChangeText={setTitle} style={{borderWidth:1,padding:8,marginBottom:8}} />
      <Button title={file?file.name:'Pick file'} onPress={pick} />
      <View style={{height:12}} />
      <Button title='Upload' onPress={upload} />
    </View>
  );
}
