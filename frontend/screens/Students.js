import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import axios from 'axios';

const API = 'http://10.0.2.2:4000/api';

export default function Students({ navigation }){
  const [students, setStudents] = useState([]);
  useEffect(()=>{ fetch() }, []);
  const fetch = async ()=>{ const res = await axios.get(API + '/students'); setStudents(res.data); };
  return (
    <View style={{flex:1,padding:16}}>
      <Button title='Add Student' onPress={()=>navigation.navigate('AddStudent')} />
      <FlatList data={students} keyExtractor={s=>''+s.id} renderItem={({item})=>(
        <View style={{padding:8,borderBottomWidth:1}}>
          <Text style={{fontWeight:'bold'}}>{item.name} - Class {item.class} ({item.section})</Text>
          <Text>Roll: {item.roll}</Text>
        </View>
      )} />
    </View>
  );
}
