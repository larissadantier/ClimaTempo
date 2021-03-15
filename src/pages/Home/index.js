import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

import Menu from '../../components/Menu';
import Header from '../../components/Header';
import Conditions from '../../components/Conditions'

export default function Home(){
    return(
        <SafeAreaView style={styles.container}>
            <Menu/>
            <Header/>
            <Conditions/>
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
    }
})