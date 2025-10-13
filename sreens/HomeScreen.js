import { View, Text, Button, StyleSheet } from 'react-native'

export default function HomeScreen({navigation}){
    return(
        <View>

            <Text>Tela incical</Text>
            <Button title='Detalhes' onPress={() => navigation.navigate('Details')}/>
            <Button title='Sobre' onPress={() => navigation.navigate('About')}/>
            <Button title='Produto' onPress={() => navigation.navigate('Products')}/>
        </View>
    )
}