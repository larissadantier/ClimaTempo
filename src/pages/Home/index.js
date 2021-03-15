import React from 'react';
import { SafeAreaView, Text, StyleSheet, FlatList } from 'react-native';

import Menu from '../../components/Menu';
import Header from '../../components/Header';
import Conditions from '../../components/Conditions'
import Forcast from '../../components/Forcast'

const mylist = [
    {
      "date": "13/03",
      "weekday": "Sáb",
      "max": 30,
      "min": 22,
      "description": "Tempestades",
      "condition": "storm"
    },
    {
      "date": "14/03",
      "weekday": "Dom",
      "max": 31,
      "min": 21,
      "description": "Tempestades isoladas",
      "condition": "storm"
    },
    {
      "date": "15/03",
      "weekday": "Seg",
      "max": 31,
      "min": 22,
      "description": "Parcialmente nublado",
      "condition": "cloudly_day"
    },
    {
      "date": "16/03",
      "weekday": "Ter",
      "max": 31,
      "min": 22,
      "description": "Parcialmente nublado",
      "condition": "cloudly_day"
    },
    {
      "date": "17/03",
      "weekday": "Qua",
      "max": 31,
      "min": 21,
      "description": "Ensolarado",
      "condition": "clear_day"
    },
    {
      "date": "18/03",
      "weekday": "Qui",
      "max": 31,
      "min": 21,
      "description": "Tempestades",
      "condition": "storm"
    },
    {
      "date": "19/03",
      "weekday": "Sex",
      "max": 30,
      "min": 22,
      "description": "Tempestades",
      "condition": "storm"
    },
    {
      "date": "20/03",
      "weekday": "Sáb",
      "max": 30,
      "min": 23,
      "description": "Ensolarado com muitas nuvens",
      "condition": "cloudly_day"
    },
    {
      "date": "21/03",
      "weekday": "Dom",
      "max": 31,
      "min": 22,
      "description": "Ensolarado com muitas nuvens",
      "condition": "cloudly_day"
    },
    {
      "date": "22/03",
      "weekday": "Seg",
      "max": 31,
      "min": 22,
      "description": "Ensolarado com muitas nuvens",
      "condition": "cloudly_day"
    }
  ];

export default function Home(){
    return(
        <SafeAreaView style={styles.container}>
            <Menu/>
            
            <Header/>

            <Conditions/>

            <FlatList
            horizontal={true} 
            contentContainerStyle={{paddingBottom: '5%'}}
            style={styles.list}
            data={mylist} 
            keyExtractor={item => item.date}
            renderItem = { ({ item }) => <Forcast data={item}/> }
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#e8f0ff',
        paddingTop: '5%'
    },
    list:{
        marginTop: 10,
        marginLeft: 10,
    }
})