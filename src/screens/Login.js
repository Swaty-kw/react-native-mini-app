import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
  Pressable,
} from "react-native";
import context from "../api/Context/userContext";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
const Login = () => {
  const [userinfo, setuserinfo] = useState({});
  const [User, setUser] = useContext(context);
  const navigation = useNavigation();
  const mutate = useMutation({
    mutationkey: ["login"],
    mutationFn: () => login(userinfo),
  });
  return (
    <View>
      <TextInput
        style={{
          borderWidth: 2,
          padding: 8,
          borderRadius: 10,
          backgroundColor: "lightgrey",
          marginBottom: 20,
        }}
        placeholder="Enter your email"
      />
      <TextInput
        style={{
          borderWidth: 2,
          padding: 8,
          borderRadius: 10,
          backgroundColor: "lightgrey",
          marginBottom: 20,
        }}
        secureTextEntry={true}
        placeholder="Enter your password"
      />

      <Pressable
        style={{
          backgroundColor: "white",
          padding: 10,
          borderRadius: 5,
          marginTop: 10,
          borderWidth: 1,
          borderColor: "red",
          alignItems: "center",
        }}
      >
        <Text
          onPress={() => mutate.mutate()} // onpress is used to call the mutate function
          style={{ color: "red", fontWeight: "bold" }}
        >
          Login
        </Text>
      </Pressable>
      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text>
          Don't have an account?{" Register"}
          <Text style={{ color: "green", textDecorationLine: "underline" }}>
            Register
          </Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
