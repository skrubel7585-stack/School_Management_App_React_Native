import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import axios from 'axios';
const API = 'http://10.0.2.2:4000/api';

export default function Notices(){
  const [notices,setNotices]=useState([]);
  useEffect(()=>{ fetch() }, []);
  const fetch = async ()=>{ const res = await axios.get(API + '/notices'); setNotices(res.data); };
  return (
    <View style={{flex:1,padding:16}}>
      <FlatList data={notices} keyExtractor={n=>''+n.id} renderItem={({item})=>(
        <View style={{padding:8,borderBottomWidth:1}}>
          <Text style={{fontWeight:'bold'}}>{item.title}</Text>
          <Text>{item.body}</Text>
        </View>
      )} />
    </View>
  );
}
