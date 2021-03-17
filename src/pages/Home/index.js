import React, {useState, useEffect} from 'react';
import { SafeAreaView, Text, StyleSheet, FlatList } from 'react-native';
import * as Location from 'expo-location';

import Menu from '../../components/Menu';
import Header from '../../components/Header';
import Conditions from '../../components/Conditions'
import Forcast from '../../components/Forcast'
import api, { key } from '../../services/api'


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
  const[errorMsg, setErrorMsg] = useState(null);
  const[loading, setLoading] = useState(true);
  const[weather, setWeather] = useState([]);
  const [icon, setIcon] = useState({name: 'cloud', color:'#FFF'});
  const [background, setBackground] = useState(['#1ed6ff', '#97c1ff']);


  useEffect(() => {
        
    (async () => {
      let {status} = await Location.requestPermissionsAsync();

      if(status != 'granted'){
        setErrorMsg('Permissão negada para acessar localização');
        setLoading(false);
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      
      //weather?key=71abd0c6&lat=-21.7526009&lon=-41.3438487
       const responde = await api.get(`/weather?key=${key}&lat=${location.coords.latitude}&lon=${location.coords.longitude}`);

       setWeather(responde.data);

       if(responde.data.results.currently === 'noite') {
          setBackground(['#0c3741', '#0f2f61']);
       }

       switch(responde.data.results.condition_slug){
         case 'clear_day':
           setIcon({name: 'partly-sunny', color:'#FFB300'});
           break;
         case 'rain':
           setIcon({name: 'rainy', color :'#FFF'});
           break;
         case 'storm':
           setIcon({name:'rainy', color: '#FFF'})
           break;
       }

       setLoading(false)
      })();
    }, []);


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