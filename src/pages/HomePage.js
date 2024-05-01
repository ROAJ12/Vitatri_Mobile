import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomePage() {
    const navigation = useNavigation();
    return (
        <View>
            <Text>Home Page</Text>
        </View>
    )
}            
