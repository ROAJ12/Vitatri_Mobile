import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, VirtualizedList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';
import GradientText from "react-native-gradient-texts";

export default function Landpage() {

    const navigation = useNavigation();

    return (
        <LinearGradient
            colors={[ '#396B66', '#478680','#71D6CC','#CAF0ED']} // Gradient colors
            style={styles.container}
            >
            <View style={styles.landpage}>
                <View style={styles.landpage_top}>             
                    <GradientText
                        text={"Vitatri"}
                        isGradientFill
                        fontSize={65}
                        style={styles.landpage_title}
                        gradientColors={['#C1EBB9', '#73BC65', '#426B3A']}
                    />
                </View>
                <View style={styles.landpage_bottom}>
                    <View style={styles.landpage_bottom_buttons}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.button_text}>Login</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.button_text}>Register</Text>
                    </TouchableOpacity>  
                    </View>  
                </View>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
      },

    landpage: {
    },

    landpage_top: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    landpage_title: {
        marginTop: 100,
        fontWeight: 'bold',
    },

    landpage_bottom: {
        marginTop: 250,
        width: '100%',
        justifyContent: 'center',
    },

    landpage_bottom_buttons: {
        alignItems: 'center',
    },

    button: {
        width: '80%',
        height: 50,
        borderRadius: 10,
        backgroundColor: '#204948',
        marginBottom: 20
    },

    button_text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
    },

})