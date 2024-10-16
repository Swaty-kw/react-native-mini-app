import React from "react";
import {
  View,
  Button,
  Text,
  TouchableOpacity,
  TextInput,
  backgroundColor,
  onPress,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Register = () => {
  const navigation = useNavigation();
  const AppButton = { backgroundColor, onPress };
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Register")}>
      <TextInput
        style={{
          borderWidth: 2,
          padding: 10,
          borderRadius: 10,
          backgroundColor: "lightgrey",
          marginBottom: 15,
        }}
        placeholder="Enter your email"
      />
      <TextInput
        style={{
          borderWidth: 2,
          padding: 10,
          borderRadius: 10,
          backgroundColor: "lightgrey",
          marginBottom: 15,
        }}
        placeholder="Enter you username"
      />
      <TextInput
        style={{
          borderWidth: 2,
          padding: 10,
          borderRadius: 10,
          backgroundColor: "lightgrey",
          marginBottom: 15,
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
        <Text style={{ color: "red", fontWeight: "bold" }}>Register</Text>
      </Pressable>
      <Text>
        Already have an account?{" "}
        <Text style={{ color: "green", textDecorationLine: "underline" }}>
          Login
        </Text>
      </Text>
    </TouchableOpacity>
  );
};
export default Register;
