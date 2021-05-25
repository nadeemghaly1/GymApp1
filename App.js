import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './Views/Navbar'
import Header from './Views/Header'


export default function App() {
  
  return (
    <View style={{height:'100%'}}>
    <Header/>
      <Navbar/>
      </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: '1',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
