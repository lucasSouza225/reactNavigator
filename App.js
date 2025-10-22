import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import AboutScreen from './screens/AboutScreen';
import ProductsScreen from './screens/ProductsScreen';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Screen 
  name="Home" 
  component={HomeScreen}
  options={{
    title: 'Início',
    tabBarIcon: ({ color, size }) => (
      <Icon name="home" color={color} size={size} />
    ),
  }}
/>
        

        <Tab.Screen 
        name="Details" 
        component={DetailsScreen} />

        <Tab.Screen 
        name='About' 
        component={AboutScreen} />

        <Tab.Screen 
        name='Products' 
        component={ProductsScreen} />
  
    </NavigationContainer>
  );
}
