import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AdminScreen } from "../../features/account/screens/admin.screen";

import { AppNavigator } from "./app.navigator";
import { AccountNavigator } from "./account.navigator";

import { AuthenticationContext } from "../../services/authentication/authentication.context";

export const Navigation = () => {
  const { isAuthenticated, user } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        user.email === "admin@events.com" ? (
          <AdminScreen />
        ) : (
          <AppNavigator />
        )
      ) : (
        <AccountNavigator />
      )}
    </NavigationContainer>
  );
};

