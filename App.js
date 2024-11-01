import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, StatusBar, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import{FontAwesome5, MaterialCommunityIcons} from '@expo/vector-icons';

export default function calculadoraIMC(){
  const[ weight, setWeigth] = useState(null);
  const[height, SetHeight] = useState(null);
  const[imc, setImc] = useState(null);
  const[classification, setClassification] = useState('');

  const handleWeight = (value) => {
    if(value.length > 0){
      setWeigth(Number(value));
    }
  }

  const handleHeight = (value) =>{
    if (value.lenght > 0){
      SetHeight(Number(value));
    }
  }
  const calculate =() =>{
    if (weight && height){
      const result = weight / (height*height);
      setImc(result);
    }
  }
  const toRank = () =>{
    if (imc < 18.5) {
      setClassification('Abaixo do peso')
    } else  if (imc >= 18.5 && imc < 24.9){
       setClassification('Peso ideal')
    } else  if (imc >= 25 && imc < 29.9){
      setClassification('Sobrepeso')
    } else  if (imc >= 30 && imc < 34.9){
      setClassification('Obesidade classe I')
    } else  if (imc >= 35 && imc < 39.9){
      setClassification('Obesidade classe II')
    } else{
      setClassification('Obsedidade classe III')
    }
  }

  const reset = ( )=> {
    setWeigth(null),
    SetHeight(null),
    setImc(null),
    setClassification('')
  }

  useEffect(() => {
    toRank()
  }, [imc])
  

  return(
    <SafeAreaView style = {styles.container}> 
     <View style = {styles.header}>
       <Text style = { styles.title}> Calculadora IMC</Text>
     </View>
     <View style={ styles.inputsArea}>
      <View style={styles.weight}>
        <FontAwesome5 name = "weight" size= {32} color= "black" />
        <Text style ={styles.label}> Peso (Kg) </Text>
        <TextInput 
        style={styles.input}
        placeholder='Kg'
        keyboardType='numeric'
        onChangeText={(value) => handleWeight(value)}
      />
      </View>
      <View style={ styles.height}>
        <MaterialCommunityIcons name="human-male-height" size={32} color="black"/>
        <Text style={styles.label}> Altura (m) </Text>
        <TextInput 
        style={styles.input}
        placeholder='m'
        keyboardType='numeric'
        onChangeText={(value) => handleHeight (value)}
      />
      </View>
     </View>
     <View style={styles.result}>
      {imc  == null ? (
        <TouchableOpacity style = {( height == null || weight == null) ? styles.buttonDisabled : styles.button} onPress={calculate}
        disabled = {height == null ||  weight == null}>
          <Text style ={styles.btnText}> Calcular </Text>
        </TouchableOpacity>
      ): (
        <TouchableOpacity style = {( height != null || weight != null) ? styles.buttonDisabled : styles.button} onPress={calculate}
        disabled = {height == null ||  weight == null}>
          <Text style ={styles.btnText}> Limpar </Text>
        </TouchableOpacity>
      )}
   
     
      {( imc != null && classification != '') && (
      <View style={{alignItems: 'center', justifyContent: 'space-around'}}>
        <Text style={styles.resultText}> Seu IMC</Text>
        <Text style={styles.resultValue}> {imc.toFixed(2)} </Text>
        <Text style={styles.resultClassification}> Classificação </Text>
        <Text style={styles.resultclassificationValue}> {classification} s</Text>
      </View>
      )}
     </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#A9A9A9',
    marginTop: StatusBar.currentHeight || 0,
  },
  header:{
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center'

  },
  title: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  inputsArea: {
    flex: 0.5,
    justifyContent:'space-evenly',
  },
  weight:{
    flex:0.5,
    alignItems:'center'

  },
  height:{
    flex:0.5,
    alignItems:'center'
  },
  label: {
    fontSize: 24,
    top: 10

  },
  input:{
    width: 100,
    fontSize:22,
    top: 14,
    textAlign: 'center',
    borderBottomWidth: 1
  },
  result: {
    flex: 0.4,
    alignItems: 'center'
  },
  button: {
    width: 150,
    backgroundColor: '#0047AB',
    padding: 8,
    borderRadius: 16,
  },
  btnText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#FFFF'
  },
  resultText: {
    top: 20,
    fontSize: 24,
    fontWeight: 'bold'
  },
  resultValue: {
    fontSize: 30,
    top: 20,
    color: '#0047AB'
  },
  resultClassification: {
    top: 30,
    fontSize:24,
    fontWeight: 'bold'
  },
  resultclassificationValue: {
    fontSize: 30,
    top: 30,
    color: 'red'
  },
  buttonReset:{
    width: 150,
    backgroundColor: '#CD5C5C',
    padding: 8,
    borderRadius: 16,
  },
  buttonDisabled:{
    width: 150,
    backgroundColor: '#87CEEB',
    padding: 8,
    borderRadius: 16
  },
  buttonResetDisable:{
    width: 150,
    backgroundColor: '#FF6961',
    padding: 8,
    borderRadius: 16
  }
})

