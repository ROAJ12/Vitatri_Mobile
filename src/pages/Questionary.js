import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, VirtualizedList, ScrollView, Image } from "react-native";
import CheckBox from 'expo-checkbox';
import DateTimePicker from '@react-native-community/datetimepicker';
import GradientText from "react-native-gradient-texts";
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

    const optionYesNoArray = [
        { label: 'Si', value: 'Si' },
        { label: 'No', value: 'No' }
    ]

    const bloodTypeArray = [
        { label: 'A+', value: 'A+' },
        { label: 'A-', value: 'A-' },
        { label: 'B+', value: 'B+' },
        { label: 'B-', value: 'B-' },
        { label: 'AB+', value: 'AB+' },
        { label: 'AB-', value: 'AB-' },
        { label: 'O+', value: 'O+' },
        { label: 'O-', value: 'O-' }
    ]

    const waterLitersArray = generateOptions(1, 7).map((option) => (
        { label: option.toString(), value: option }
    ))

    const waterOptionsArray = [
        { label: 'Vasos', value: 'Vasos' },
        { label: 'Litros', value: 'Litros' },
    ]

    const sleepHoursArray = generateOptions(0, 12).map((option) => (
        { label: option.toString() + ' Horas', value: option }
    ))

    const objectivesArray = [
        { label: 'Perder peso', value: 'Perder peso' },
        { label: 'Mantener Peso', value: 'Mantener' },
        { label: 'Ganar peso', value: 'Ganar peso' },
    ]

    const daysArray = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']
    const preferencesArray = ['Correr', 'Nadar', 'Yoga', 'Ciclismo', 'Pesas', 'Aerobics', 'Zumba', 'Calistenia', 'Ninguna'];

    const navigation = useNavigation();

    const [step, setStep] = useState(0);
    const [option, setOption] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date());
    const [selectedDays, setSelectedDays] = useState({});
    const [selectedPreferences, setSelectedPreferences] = useState({});

    const handleCheckboxChangeDay = (day) => {
        setSelectedDays(prevState => ({ ...prevState, [day]: !prevState[day] }));
    };

    const handleCheckboxChangePreferences = (preference) => {
        setSelectedPreferences(prevState => ({ ...prevState, [preference]: !prevState[preference] }));
    };

    const onChange = (event, selectedDate) => {
        setDate(selectedDate);
        setShow(false);
    };

    return (
        <View style={styles.questionary}>
            {step === 0 && (
                <View style={styles.defaultContainer}>
                    <GradientText
                        text={"¡Bienvenido a Vitatri!"}
                        style={styles.login_bottom_title}
                        isGradientFill
                        fontSize={30}
                        gradientColors={['#C1EBB9', '#73BC65', '#426B3A']}
                    />
                    <View style={styles.logoContainer}>
                    <Image
                        source={require('../Images/vitatri_logo.png')}
                        style={styles.logo}
                    />
                    </View>
                    <Text style={{ marginTop: 20, color: '#B16060', marginBottom: 20, fontSize: 20 }}>Antes de iniciar necesitamos que respondas una serie de preguntas</Text>
                    <TouchableOpacity style={styles.defaultButton} onPress={() => setStep(1)}>
                        <Text style={styles.defaultButtonText}>Continuar</Text>
                    </TouchableOpacity>
                </View>
            )}

            {step === 1 && (
                <View style={styles.defaultContainer}>
                    <GradientText
                        text={"Información Personal"}
                        style={styles.login_bottom_title}
                        isGradientFill
                        fontSize={30}
                        gradientColors={['#C1EBB9', '#73BC65', '#426B3A']}
                    />
                    <Text style={[styles.defaultText, { marginTop: 20 }]}>¿Qué edad tienes?</Text>
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
                    <Text style={styles.defaultText}>¿Cuál es tu peso?</Text>
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
                    <Text style={styles.defaultText}>¿Cuál es tu altura?</Text>
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
                    <TouchableOpacity style={styles.defaultButton} onPress={() => setStep(2)}>
                        <Text style={styles.defaultButtonText}>Continuar</Text>
                    </TouchableOpacity>
                </View>
            )}

            {step === 2 && (
                <View style={styles.defaultContainer}>
                    <GradientText
                        text={"Información Personal"}
                        style={styles.login_bottom_title}
                        isGradientFill
                        fontSize={30}
                        gradientColors={['#C1EBB9', '#73BC65', '#426B3A']}
                    />
                    <Text style={[styles.defaultText, { marginTop: 20 }]}>¿Cual es tu sexo biológico?</Text>
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
                    <Text style={styles.defaultText}>¿Con qué género te identificas?</Text>
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
                    <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.defaultButton} onPress={() => setStep(1)}>
                        <Text style={styles.defaultButtonText}>Regresar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.defaultButton} onPress={() => setStep(3)}>
                        <Text style={styles.defaultButtonText}>Continuar</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            )}

            {step === 3 && (
                <View style={styles.defaultContainer}>
                    <GradientText
                        text={"Información Física"}
                        style={styles.login_bottom_title}
                        isGradientFill
                        fontSize={30}
                        gradientColors={['#C1EBB9', '#73BC65', '#426B3A']}
                    />

                    <Text style={[styles.defaultText, { marginTop: 20 }]}>¿Realizas actividad física?</Text>
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        data={optionYesNoArray}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder="Seleccione una opción"
                        value={option}
                        onChange={item => {
                            setOption(item.value);
                        }}
                    />
                    {option === 'Si' && (
                        <ScrollView style={{height: 430, width: '80%'}}>  
                            <Text  style={[styles.defaultText, { marginTop: 10 , marginBottom: 20}]}>¿Qué días realizas actividad fisica?</Text>
                            {daysArray.map((day, index) => (
                                <View key={index} style={{marginBottom: 20}}>
                                    <View style={styles.checkboxContainer}>  
                                        <CheckBox
                                            value={selectedDays[day] || false}
                                            onValueChange={() => handleCheckboxChangeDay(day)}
                                        />
                                        <Text style={[styles.defaultCheckBoxText, { marginLeft: 10 }]}>{day}</Text>
                                    </View>
                                    <Text style={[styles.defaultText]}>¿A qué hora realizas actividad física el {day}?</Text>
                                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                        <TouchableOpacity style={styles.selectTimeButton} onPress={() => setShow(true)}>
                                            <Text style={styles.defaultButtonText}>Seleccionar Hora</Text>
                                        </TouchableOpacity>
                                        {show && (
                                            <DateTimePicker
                                                mode='time'
                                                value={date}
                                                is24Hour={true}
                                                onChange={onChange}
                                            />
                                        )}
                                        <View style={{padding: 14}}>
                                        <Text style={{color: '#64311C', fontSize: 18}}>{date.getHours() + ":" + date.getMinutes()}</Text>
                                        </View>
                                    </View>
                                </View>
                            ))}
                            <Text style={[styles.defaultText, { marginTop: 20 , marginBottom: 10}]}>¿Tienes alguna preferencia al realizar ejercicio?</Text>
                            {preferencesArray.map((preference, index) => (
                                <View key={index}>
                                    <View style={[styles.checkboxContainer, {marginBottom: 10 }]}>
                                        <CheckBox
                                            value={selectedPreferences[preference] || false}
                                            onValueChange={() => handleCheckboxChangePreferences(preference)}
                                        />
                                        <Text style={[styles.defaultCheckBoxText, { marginLeft: 10 }]}>{preference}</Text> 
                                    </View>
                                </View>
                            ))}
                        </ScrollView>
                    )}
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.defaultButton} onPress={() => setStep(2)}>
                            <Text style={styles.defaultButtonText}>Regresar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.defaultButton} onPress={() => setStep(4)}>
                            <Text style={styles.defaultButtonText}>Continuar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}

            {step === 4 && (
                <View style={styles.defaultContainer}>
                    <GradientText
                        text={"Información Médica"}
                        style={styles.login_bottom_title}
                        isGradientFill
                        fontSize={30}
                        gradientColors={['#C1EBB9', '#73BC65', '#426B3A']}
                    />
                    <Text style={styles.defaultText}>¿Cual es tu tipo de sangre?</Text>
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        data={bloodTypeArray}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder="Tipo de Sangre"
                        onChange={item => {
                        }}
                    />
                    <Text style={[styles.defaultText, { width: '80%'}]}>¿Tienes alguna alergia? En caso de tener, especificar</Text>
                    <TextInput style={styles.defaultInput} placeholder="Alergia" placeholderTextColor={'#64311C'} />
                    <Text style={[styles.defaultText, { width: '80%'}]}>¿Tienes alguna enfermedad? En caso de tener, especificar</Text>
                    <TextInput style={styles.defaultInput} placeholder="Enfermedad" placeholderTextColor={'#64311C'}/>
                    <Text style={[styles.defaultText, { width: '80%'}]}>¿Tomas algún medicamento? En caso de tomar, especificar</Text>
                    <TextInput style={styles.defaultInput} placeholder="Medicamento" placeholderTextColor={'#64311C'}/>
                    <View style={styles.buttonContainer}>    
                        <TouchableOpacity style={styles.defaultButton} onPress={() => setStep(3)}>
                            <Text style={styles.defaultButtonText}>Regresar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style={styles.defaultButton} onPress={() => setStep(5)}>
                            <Text style={styles.defaultButtonText}>Continuar</Text>
                        </TouchableOpacity>
                    </View>    
                </View>
            )}

            {step === 5 && (
                <View style={styles.defaultContainer}>
                    <GradientText
                        text={"Hábitos"}
                        style={styles.login_bottom_title}
                        isGradientFill
                        fontSize={30}
                        gradientColors={['#C1EBB9', '#73BC65', '#426B3A']}
                    />    
                    <Text style={[styles.defaultText, { marginTop: 20, width: '80%' }]}>¿Cuánta cantidad de agua consumes al día?</Text>
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        data={waterLitersArray}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder="Seleccione una opcion"
                        onChange={item => {
                        }}
                    />
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        data={waterOptionsArray}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder="Seleccione una opcion"
                        onChange={item => {
                        }}
                    />
                    <Text style={[styles.defaultText, { marginTop: 10, width: '80%' }]}>¿Cuántas horas horas duerme al día?</Text>
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        data={sleepHoursArray}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder="Seleccione una opcion"
                        onChange={item => {
                        }}
                    />
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.defaultButton} onPress={() => setStep(4)}>
                            <Text style={styles.defaultButtonText}>Regresar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.defaultButton} onPress={() => setStep(6)}>
                            <Text style={styles.defaultButtonText}>Continuar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}

            {step === 6 && (
                <View style={styles.defaultContainer}>
                    <GradientText
                        text={"Objetivo"}
                        style={styles.login_bottom_title}
                        isGradientFill
                        fontSize={30}
                        gradientColors={['#C1EBB9', '#73BC65', '#426B3A']}
                    />
                    <Text style={[styles.defaultText, { marginTop: 20 }]}>¿Cual es tu objetivo?</Text>
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        data={objectivesArray}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder="Seleccione una opcion"
                        onChange={item => {
                        }}
                    />
                    <Text style={[styles.defaultText, { marginTop: 10, width: '80%' }]}>Describe de forma breve que buscar lograr:</Text>
                    <TextInput style={styles.defaultInput} placeholder="Objetivo" placeholderTextColor={'#64311C'} numberOfLines={4} multiline={true}/>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity  style={styles.defaultButton} onPress={() => setStep(5)}>
                            <Text style={styles.defaultButtonText}>Regresar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style={styles.defaultButton} onPress={() => navigation.navigate('HomePage')}>
                            <Text style={styles.defaultButtonText}>Continuar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    questionary: {
    },

    defaultContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginTop: 10,
    },

    logoContainer: {
        width: '50%',
        height: '40%',
        margin: 10,
    },

    defaultText: {
        color: '#B16060',
        fontSize: 18,
    },

    logo: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain'
    },

    defaultButton: {
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: '#204948',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 14,
        width: '48%',
    },

    defaultButtonText: {
        color: '#fff',
        fontSize: 15,
    },

    dropdown: {
        margin: 14,
        padding: 10,
        width: '80%',
        border: 'black',
        borderWidth: 1,
        borderRadius: 10,
      },

    placeholderStyle: {
        color: '#64311C',
        fontSize: 16,
    },

    selectedTextStyle: {
        color: '#64311C',
        fontSize: 16,
    },

    buttonContainer: {
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-between',
    },

    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    selectTimeButton: {
        borderRadius: 10,
        backgroundColor: '#204948',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 14,
    },

    defaultInput: {
        marginTop: 10,
        width: '80%',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        marginBottom: 20,
        padding: 14,
        fontSize: 16,
        color: '#64311C'
      },

    defaultCheckBoxText: {
        color: '#64311C',
        fontSize: 18,
    },

});
