import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, FlatList } from 'react-native';
import axios from 'axios';
const API = 'http://10.0.2.2:4000/api';

export default function Chat({ route }) {
  const { user } = route.params;
  const [inbox, setInbox] = useState([]);
  const [toId, setToId] = useState(''); const [body, setBody] = useState('');
  useEffect(()=>{ fetch() }, []);
  const fetch = async ()=>{ const res = await axios.get(API + '/chat/inbox/' + user.id); setInbox(res.data); };
  const send = async ()=>{ await axios.post(API + '/chat/send', { from_id: user.id, to_id: toId, body }); setBody(''); fetch(); };
  return (
    <View style={{flex:1,padding:16}}>
      <FlatList data={inbox} keyExtractor={m=>''+m.id} renderItem={({item})=>(
        <View style={{padding:8,borderBottomWidth:1}}>
          <Text>{item.from_name}: {item.body}</Text>
        </View>
      )} />
      <TextInput placeholder='To user id' value={toId} onChangeText={setToId} style={{borderWidth:1,padding:8,marginBottom:8}} />
      <TextInput placeholder='Message' value={body} onChangeText={setBody} style={{borderWidth:1,padding:8,marginBottom:8}} />
      <Button title='Send' onPress={send} />
    </View>
  );
}
