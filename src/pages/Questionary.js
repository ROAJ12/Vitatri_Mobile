import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, VirtualizedList, ScrollView } from "react-native";
import CheckBox from 'expo-checkbox';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from "@react-navigation/native";
import { Dropdown } from 'react-native-element-dropdown';
import { useState } from "react";

export default function Questionary() {

    const generateOptions = (start, end) => {
        return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    };

    const ageArray = generateOptions(12, 70).map((option) => (
        { label: option.toString() + ' Años', value: option }
    ))
            
    const weightArray = generateOptions(25, 150).map((option) => (
        { label: option.toString() + ' Kilogramos', value: option }
    ))

    const heightArray = generateOptions(100, 250).map((option) => ( 
        { label: option.toString() + ' Centímetros', value: option }
    ))

    const sexArray = [
        { label: 'Masculino', value: 'Masculino' },
        { label: 'Femenino', value: 'Femenino' },
    ]

    const genderArray = [
        { label: 'Masculino', value: 'Masculino' },
        { label: 'Femenino', value: 'Femenino' },
        { label: 'No binario', value: 'No binario' },
        { label: 'Otro', value: 'Otro' }
    ]

    const optionArray = [
        { label: 'Si', value: 'Si' },
        { label: 'No', value: 'No' }
    ] 

    const daysArray = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'] 

    const navigation = useNavigation();

    const [step, setStep] = useState(0);
    const [option, setOption] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date());

    const onChange = (event, selectedDate) => {
        setDate(selectedDate);
        setShow(false);
    };

    return (
        <ScrollView>
            
            {step === 0 && (
                <View>
                <Text>¡Bienvenido a Vitatri!</Text>
                <Text>Antes de iniciar necesitamos que respondas una serie de preguntas</Text>
                <TouchableOpacity onPress={() => setStep(1)}>
                    <Text>Continuar</Text>
                </TouchableOpacity>
                </View>
            )}

            {step === 1 && (
                <View>
                    <Text>Informacion Personal</Text>   
                    <Text>¿Qué edad tienes?</Text>
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        data={ageArray}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder="Edad"
                        onChange={item => {
                        }}
                    /> 
                    <Text>¿Cuál es tu peso?</Text>
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        data={weightArray}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder="Peso en Kilogramos"
                        onChange={item => {
                        }}
                    />
                    <Text>¿Cuál es tu altura?</Text>
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        data={heightArray}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder="Altura en centimetros"
                        onChange={item => {
                        }}
                    />
                    <TouchableOpacity onPress={() => setStep(2)}>
                        <Text>Continuar</Text>
                    </TouchableOpacity>      
                </View>
            )}

            {step === 2 && (
                <View>
                    <Text>Informacion Personal</Text>   
                    <Text>¿Cual es tu sexo biológico?</Text>
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        data={sexArray}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder="Sexo"
                        onChange={item => {
                        }}
                    />
                    <Text>¿Con qué género te identificas?</Text>
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        data={genderArray}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder="Genero"
                        onChange={item => {
                        }}
                    />
                    <TouchableOpacity onPress={() => setStep(1)}>
                        <Text>Regresar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setStep(3)}>
                        <Text>Continuar</Text>
                    </TouchableOpacity>
                </View>
            )}

            {step === 3 && (
                <View>
                    <Text>Informacion Física</Text>
                    <Text>¿Realizas actividad física?</Text>   
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        data={optionArray}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder="Edad"
                        value={option}
                    />     
                    <Text>¿Qué días realizas actividad fisica?</Text>
                    {daysArray.map((day, index) => (
                        <>
                        <Text>{day}</Text>
                        <CheckBox
                            key={index}
                            value={false}
                            onChange={() => setIsChecked(!isChecked)}
                        />
                        <Text>¿A qué hora realizas actividad física el {day}?</Text>
                        <TouchableOpacity onPress={() => setShow(true)}>
                            <Text>Seleccionar Hora</Text>
                        </TouchableOpacity>
                        {show && (
                            <DateTimePicker
                            mode='time'
                            value={date}
                            is24Hour={true}
                            onChange={onChange}
                        />
                        )}
                        <Text>{date.toLocaleString()}</Text>
                        </>
                    ))}
                        
                    
                    <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
                        <Text>Continuar</Text>
                    </TouchableOpacity>
                </View>
            )} 
        </ScrollView>
    )
}   

const styles = StyleSheet.create({

});
