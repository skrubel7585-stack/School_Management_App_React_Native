import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import axios from 'axios';
const API = 'http://10.0.2.2:4000/api';

export default function Fees(){
  const [fees,setFees]=useState([]);
  useEffect(()=>{ fetch() }, []);
  const fetch = async ()=>{ const res = await axios.get(API + '/fees/student/1'); setFees(res.data); };
  return (
    <View style={{flex:1,padding:16}}>
      <FlatList data={fees} keyExtractor={f=>''+f.id} renderItem={({item})=>(
        <View style={{padding:8,borderBottomWidth:1}}>
          <Text>Amount: {item.amount} | Due: {item.due_date} | Paid: {item.paid}</Text>
        </View>
      )} />
    </View>
  );
}
