import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';
const API = 'http://10.0.2.2:4000/api';

export default function Homework(){
  const [hw,setHw]=useState([]);
  useEffect(()=>{ fetch() }, []);
  const fetch = async ()=>{ const res = await axios.get(API + '/homework'); setHw(res.data); };
  return (
    <View style={{flex:1,padding:16}}>
      <FlatList data={hw} keyExtractor={h=>''+h.id} renderItem={({item})=>(
        <View style={{padding:8,borderBottomWidth:1}}>
          <Text style={{fontWeight:'bold'}}>{item.title}</Text>
          <Text>{item.description}</Text>
          <Text>Due: {item.due_date}</Text>
        </View>
      )} />
    </View>
  );
}
