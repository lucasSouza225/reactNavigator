import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './sreens/HomeScreen';
import DetailsScreen from './sreens/DetailsScreen';
import AboutScreen from './sreens/AboutScreen';
import ProductsScreen from './sreens/ProductsScreen';


const Stack = createStackNavigator();

export default function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Tela incial '}}/>
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name='About' component={AboutScreen} />
        <Stack.Screen name='Products' component={ProductsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
