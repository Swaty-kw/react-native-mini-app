import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Productdetails from "../screens/Productdetails";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Register from "../screens/Register";

const Stack = createNativeStackNavigator();

export default function Productnavigation() {
  return (
    <Stack.Navigator initialRouteName="Login">
     
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ProductDetails" component={Productdetails} />
    </Stack.Navigator>
  );
}
