import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Ionicons } from '@expo/vector-icons'

export default function Header(){
    return(
        <LinearGradient 
        style={styles.header}
        colors={['#1ed6ff', '#97c1ff']}
        >
            
            <Text style={styles.data}>14/03/2021</Text>
            <Text style={styles.city}>Campos Dos Goytacazes</Text>
            
            <Ionicons
            name="cloud"
            color="#FFF"
            size={150}
            />

            <Text style={styles.temp}>24°C</Text>

        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    header:{
        width: '95%',
        height: '55%',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 8
    },
    data:{
        color: '#FFF',
        fontSize: 17
    },
    city:{
        color: '#FFF',
        fontSize: 20,
        fontWeight:'bold'
    },
    temp:{
        color: '#FFF',
        fontSize: 80,
        fontWeight:'bold'
    }
})