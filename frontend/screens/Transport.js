import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';
const API = 'http://10.0.2.2:4000/api';

export default function Transport(){
  const [routes,setRoutes]=useState([]);
  useEffect(()=>{ fetch() }, []);
  const fetch = async ()=>{ const res = await axios.get(API + '/transport'); setRoutes(res.data); };
  return (
    <View style={{flex:1,padding:16}}>
      <FlatList data={routes} keyExtractor={r=>''+r.id} renderItem={({item})=>(
        <View style={{padding:8,borderBottomWidth:1}}>
          <Text style={{fontWeight:'bold'}}>{item.route_name}</Text>
          <Text>Driver: {item.driver} | Vehicle: {item.vehicle_no}</Text>
        </View>
      )} />
    </View>
  );
}
