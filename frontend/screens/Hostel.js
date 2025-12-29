import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';
const API = 'http://10.0.2.2:4000/api';

export default function Hostel(){
  const [rooms,setRooms]=useState([]);
  useEffect(()=>{ fetch() }, []);
  const fetch = async ()=>{ const res = await axios.get(API + '/hostel'); setRooms(res.data); };
  return (
    <View style={{flex:1,padding:16}}>
      <FlatList data={rooms} keyExtractor={r=>''+r.id} renderItem={({item})=>(
        <View style={{padding:8,borderBottomWidth:1}}>
          <Text>Room: {item.room_no} | Student: {item.student_id}</Text>
        </View>
      )} />
    </View>
  );
}
