import React, { useEffect, useState } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import axios from 'axios';

const API = 'http://10.0.2.2:4000/api';

export default function Dashboard({ route, navigation }){
  const { user } = route.params;
  const [stats, setStats] = useState({});

  useEffect(()=>{ fetchStats() }, []);

  const fetchStats = async ()=>{
    try{
      const students = await axios.get(API + '/students');
      const teachers = await axios.get(API + '/teachers');
      const books = await axios.get(API + '/books');
      setStats({ students: students.data.length, teachers: teachers.data.length, books: books.data.length });
    }catch(e){}
  };

  return (
    <ScrollView style={{flex:1,padding:16}}>
      <Text style={{fontSize:20}}>Welcome, {user.name}</Text>
      <View style={{marginTop:16}}>
        <Text>Total Students: {stats.students || 0}</Text>
        <Text>Total Teachers: {stats.teachers || 0}</Text>
        <Text>Total Books: {stats.books || 0}</Text>
      </View>
      <View style={{height:12}} />
      <Button title='Students' onPress={()=>navigation.navigate('Students')} />
      <View style={{height:8}} />
      <Button title='Teachers' onPress={()=>navigation.navigate('Teachers')} />
      <View style={{height:8}} />
      <Button title='Attendance' onPress={()=>navigation.navigate('Attendance')} />
      <View style={{height:8}} />
      <Button title='Books' onPress={()=>navigation.navigate('Books')} />
      <View style={{height:8}} />
      <Button title='Exams' onPress={()=>navigation.navigate('Exams')} />
      <View style={{height:8}} />
      <Button title='Notices' onPress={()=>navigation.navigate('Notices')} />
      <View style={{height:8}} />
      <Button title='Fees' onPress={()=>navigation.navigate('Fees')} />
      <View style={{height:8}} />
      <Button title='Homework' onPress={()=>navigation.navigate('Homework')} />
      <View style={{height:8}} />
      <Button title='Timetable' onPress={()=>navigation.navigate('Timetable')} />
      <View style={{height:8}} />
      <Button title='Transport' onPress={()=>navigation.navigate('Transport')} />
      <View style={{height:8}} />
      <Button title='Hostel' onPress={()=>navigation.navigate('Hostel')} />
      <View style={{height:8}} />
      <Button title='Canteen' onPress={()=>navigation.navigate('Canteen')} />
      <View style={{height:8}} />
      <Button title='Chat' onPress={()=>navigation.navigate('Chat', { user })} />
    </ScrollView>
  );
}
