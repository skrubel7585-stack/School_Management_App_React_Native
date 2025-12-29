import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import axios from 'axios';
const API = 'http://10.0.2.2:4000/api';

export default function Books({ navigation }){
  const [books,setBooks]=useState([]);
  useEffect(()=>{ fetch() }, []);
  const fetch = async ()=>{ const res = await axios.get(API + '/books'); setBooks(res.data); };
  return (
    <View style={{flex:1,padding:16}}>
      <Button title='Upload Book' onPress={()=>navigation.navigate('UploadBook')} />
      <FlatList data={books} keyExtractor={b=>''+b.id} renderItem={({item})=>(
        <View style={{padding:8,borderBottomWidth:1}}>
          <Text style={{fontWeight:'bold'}}>{item.title}</Text>
          <Text>Uploaded by: {item.uploader || 'Unknown'}</Text>
        </View>
      )} />
    </View>
  );
}
