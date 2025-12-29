import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';
const API = 'http://10.0.2.2:4000/api';

export default function Timetable(){
  const [tt,setTt]=useState([]);
  useEffect(()=>{ fetch() }, []);
  const fetch = async ()=>{ const res = await axios.get(API + '/timetable'); setTt(res.data); };
  return (
    <View style={{flex:1,padding:16}}>
      <FlatList data={tt} keyExtractor={t=>''+t.id} renderItem={({item})=>(
        <View style={{padding:8,borderBottomWidth:1}}>
          <Text>{item.day} - Period {item.period} - {item.subject}</Text>
        </View>
      )} />
    </View>
  );
}
