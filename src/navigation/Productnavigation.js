import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Productdetails from "../screens/Productdetails";
import Home from "../screens/Home";

const Stack = createNativeStackNavigator();

export default function Productnavigation() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ProductDetails" component={Productdetails} />
    </Stack.Navigator>
  );
}
