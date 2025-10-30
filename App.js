import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// import Icon from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './screens/HomeScreen';
import Imc from './screens/ImcSreen';  
import Calculadora from './screens/CalculadoraScreen'

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home Page',
            drawerIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="IMC"
          component={Imc}
          options={{
            title: 'Detalhes IMC',
            drawerIcon: ({ color, size }) => (
              <Icon name="weight-kilogram" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Calculadora"
          component={Calculadora}
          options={{
            title: 'Calculadora',
            drawerIcon: ({ color, size }) => (
              <Icon name="calculator" color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
