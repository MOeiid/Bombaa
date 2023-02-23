import { createDrawerNavigator } from '@react-navigation/drawer';
import CarsList from '../Screens/CarsList';
import Home from '../Screens/Home';
import Tabs from './BottomTabNavigator';

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Home" component={Tabs} />
      <Drawer.Screen name="Cars List" component={Tabs} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation