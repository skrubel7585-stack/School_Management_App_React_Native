import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';
const API = 'http://10.0.2.2:4000/api';

export default function Canteen(){
  const [items,setItems]=useState([]);
  useEffect(()=>{ fetch() }, []);
  const fetch = async ()=>{ const res = await axios.get(API + '/canteen/items'); setItems(res.data); };
  return (
    <View style={{flex:1,padding:16}}>
      <FlatList data={items} keyExtractor={i=>''+i.id} renderItem={({item})=>(
        <View style={{padding:8,borderBottomWidth:1}}>
          <Text style={{fontWeight:'bold'}}>{item.item_name}</Text>
          <Text>Price: {item.price} | Stock: {item.stock}</Text>
        </View>
      )} />
    </View>
  );
}
