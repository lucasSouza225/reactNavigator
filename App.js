import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './sreens/HomeScreen';
import DetailsScreen from './sreens/DetailsScreen';
import AboutScreen from './sreens/AboutScreen';
import ProductsScreen from './sreens/ProductsScreen';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
       <Tab.Screen name="Home" component={HomeScreen}
          options={{
            title: 'Home Page',
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
            
          }} />
        

        <Tab.Screen 
        name="Details" 
        component={DetailsScreen} />

        <Tab.Screen 
        name='About' 
        component={AboutScreen} />

        <Tab.Screen 
        name='Products' 
        component={ProductsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
