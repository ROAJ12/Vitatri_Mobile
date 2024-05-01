import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GradientText from "react-native-gradient-texts";


export default function Register() {

    const navigation = useNavigation();

    return (
        <View style={styles.register}>
          <View style={styles.register_top}>             
            <GradientText
              text={"Vitatri"}
              style={styles.register_top_title}
              isGradientFill
              fontSize={65}
              gradientColors={['#C1EBB9', '#73BC65', '#426B3A']}
            />
          </View>
          <View style={styles.register_bottom}> 
            <GradientText
              text={"Registrarse"}
              style={styles.register_bottom_title}
              isGradientFill
              fontSize={30}
              gradientColors={['#B16060', '#D76322']}
            />
            <View style={styles.register_bottom_form}>
              <Text style={styles.register_bottom_form_label}>Nombre</Text>
              <TextInput style={styles.register_bottom_form_input} placeholder="Nombre"/>
              <Text style={styles.register_bottom_form_label}>Correo Electronico</Text>
              <TextInput style={styles.register_bottom_form_input} placeholder="Correo Electronico"/>
              <Text style={styles.register_bottom_form_label}>Contreseña</Text>
              <TextInput style={styles.register_bottom_form_input} placeholder="Contraseña"/>
              <TouchableOpacity style={styles.register_bottom_form_button} onPress={() => navigation.navigate('Questionary')}>
                <Text style={styles.register_bottom_form_button_text}>Crear Cuenta</Text>
              </TouchableOpacity>

              <View style={{flexDirection: 'row', marginTop: 30, alignItems: 'center'}}>
                <Text style={{color: '#64311C', fontSize: 15}}>¿Ya tienes una cuenta? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <Text style={{color: '#C39051', fontSize: 15}}>Inicia Sesión</Text>
                </TouchableOpacity>  
              </View>
            </View>
          </View>
        </View>    
    )
}    

const styles = StyleSheet.create({
  register: {
  },
  
  register_top: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  register_top_title: {
    marginTop: 100,
  },

  register_bottom: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  register_bottom_title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
  },

  register_bottom_form: {
    width: '80%',
  },

  register_bottom_form_input: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    marginBottom: 20,
    padding: 8,
    fontSize: 15,
  },

  register_bottom_form_label: {
    alignSelf: 'flex-start',
    fontSize: 15,
    marginBottom: 5,
  }, 
  
  register_bottom_form_button: {
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: '#204948',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 14,
  },

  register_bottom_form_button_text: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },

})