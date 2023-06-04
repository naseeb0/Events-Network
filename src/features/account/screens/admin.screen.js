import React, { useContext } from "react";
import { Text, View, Button } from "react-native";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const AdminScreen = () => {
  const { onLogout } = useContext(AuthenticationContext);

  return (
    <View>
      <Text>Admin Screen</Text>
      <Button title="Logout" onPress={onLogout} />
    </View>
  );
};
