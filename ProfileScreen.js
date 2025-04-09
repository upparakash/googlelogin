import React from "react";
import { View, Text, Image, Button } from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "./firebaseConfig"; // Import Firebase auth instance

const ProfileScreen = ({ route, navigation }) => {
    const { user } = route.params;

    // Logout function
    const logout = async () => {
        try {
            await signOut(auth);
            console.log("User signed out");
            navigation.replace("Home"); // Navigate to Home after logout
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Image 
                source={{ uri: user.photo }} 
                style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 20 }}
            />
            <Text style={{ fontSize: 22, fontWeight: "bold" }}>{user.name}</Text>
            <Text style={{ fontSize: 18, color: "gray", marginBottom: 20 }}>{user.email}</Text>

            {/* Logout Button */}
            <Button title="Logout" onPress={logout} color="red" />
        </View>
    );
};

export default ProfileScreen;
