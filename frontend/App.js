import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import Dashboard from './screens/Dashboard';
import Students from './screens/Students';
import AddStudent from './screens/AddStudent';
import Teachers from './screens/Teachers';
import Attendance from './screens/Attendance';
import Books from './screens/Books';
import UploadBook from './screens/UploadBook';
import Exams from './screens/Exams';
import Notices from './screens/Notices';
import Fees from './screens/Fees';
import Homework from './screens/Homework';
import Timetable from './screens/Timetable';
import Transport from './screens/Transport';
import Hostel from './screens/Hostel';
import Canteen from './screens/Canteen';
import Chat from './screens/Chat';

const Stack = createNativeStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown:true}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Students" component={Students} />
        <Stack.Screen name="AddStudent" component={AddStudent} />
        <Stack.Screen name="Teachers" component={Teachers} />
        <Stack.Screen name="Attendance" component={Attendance} />
        <Stack.Screen name="Books" component={Books} />
        <Stack.Screen name="UploadBook" component={UploadBook} />
        <Stack.Screen name="Exams" component={Exams} />
        <Stack.Screen name="Notices" component={Notices} />
        <Stack.Screen name="Fees" component={Fees} />
        <Stack.Screen name="Homework" component={Homework} />
        <Stack.Screen name="Timetable" component={Timetable} />
        <Stack.Screen name="Transport" component={Transport} />
        <Stack.Screen name="Hostel" component={Hostel} />
        <Stack.Screen name="Canteen" component={Canteen} />
        <Stack.Screen name="Chat" component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
