

import Pessoas from "./src/Pages/Pessoas";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Details from "./src/Pages/Details";
import Edit from "./src/Pages/Edit"
import Cad from "./src/Pages/Cad"

const Stack = createStackNavigator();

export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Pessoas}/>
        <Stack.Screen name="Details" title="Details" component={Details}/>
        <Stack.Screen name="Edit" title="Edit" component={Edit}/>
        <Stack.Screen name="Cad" title="Cad" component={Cad}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
