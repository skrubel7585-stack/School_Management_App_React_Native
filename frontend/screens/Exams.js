import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import axios from 'axios';
const API = 'http://10.0.2.2:4000/api';

export default function Exams(){
  const [exams,setExams]=useState([]);
  useEffect(()=>{ fetch() }, []);
  const fetch = async ()=>{ const res = await axios.get(API + '/exams'); setExams(res.data); };
  return (
    <View style={{flex:1,padding:16}}>
      <FlatList data={exams} keyExtractor={e=>''+e.id} renderItem={({item})=>(
        <View style={{padding:8,borderBottomWidth:1}}>
          <Text style={{fontWeight:'bold'}}>{item.name}</Text>
          <Text>Class: {item.class}</Text>
          <Text>Date: {item.date}</Text>
        </View>
      )} />
    </View>
  );
}
