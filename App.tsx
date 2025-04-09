import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";
import auth from "@react-native-firebase/auth";

const Stack = createStackNavigator();

const App = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged((user) => {
            setUser(user);
        });

        return () => unsubscribe(); // Cleanup on unmount
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={user ? "ProfileScreen" : "Home"}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
