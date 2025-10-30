import React from "react";
import {View, Text, Button, StyleSheet} from 'react-native'

export default function HomeScreen({navigation}){
    return(
        <View style={estilos.container}>
            <Text>HomeScreen</Text>
            <Button title="Calcular Imc"
             onPress={() => navigation.navigate('IMC')} />
             <Button title="Calculadora"
             onPress={() => navigation.navigate('Calculadora')} />      
        </View>
        
    )
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})