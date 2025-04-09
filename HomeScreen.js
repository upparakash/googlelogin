import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import { GoogleSignin, statusCodes } from "@react-native-google-signin/google-signin";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: "387215750150-5lot5e8n04pv85r4s4lbu7c9np7tpcqg.apps.googleusercontent.com",
        });
    }, []);

    const googleLogin = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const response = await GoogleSignin.signIn();

            console.log("Full Response Object:", response);

            // Extract user object from response.data.user
            const user = response?.data?.user || null;

            if (user) {
                console.log("Extracted User Data:", user);
                navigation.navigate("ProfileScreen", { user });
            } else {
                console.error("User object is missing:", response);
                Alert.alert("Error", "User data not found. Try again.");
            }
        } catch (error) {
            console.error("Google Sign-In Error:", error);

            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                Alert.alert("Sign-in cancelled.");
            } else if (error.code === statusCodes.IN_PROGRESS) {
                Alert.alert("Sign-in in progress...");
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                Alert.alert("Google Play Services not available.");
            } else {
                Alert.alert("An error occurred during sign-in.");
            }
        }
    };

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 20, marginBottom: 20 }}>Login with Google</Text>

            <TouchableOpacity 
                style={{
                    backgroundColor: "#4285F4",
                    padding: 10,
                    borderRadius: 5,
                    flexDirection: "row",
                    alignItems: "center",
                }}
                onPress={googleLogin}
            >
                <Image 
                    source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" }} 
                    style={{ width: 30, height: 30, marginRight: 10 }}
                />
                <Text style={{ color: "white", fontSize: 16 }}>Sign in with Google</Text>
            </TouchableOpacity>
        </View>
    );
};

export default HomeScreen;
