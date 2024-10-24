import React, {useState, useEffect} from 'react';
import {View, Text, Image, Button, TouchableOpacity, TextInput} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';


const Greeting =(props) => {
  return(
    <View style= {{alingItems: 'center'}}>
      <Text style= {{ fontSize: 26}}>Seja Bem-vindo, {props.name}!</Text>
    </View>
  )
}
export default function LotsOfGreetings (){
 
  let img = 'https://s2-techtudo.glbimg.com/CDCDKUhS0FMmWH6daMavnixT6cg=/0x0:1024x609/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg'
  const [count, setCount]= useState(0);
  const [msg, setMsg] = useState('');
  function Curtir() {
    setCount(count+1);
  }

  useEffect(() => {
    setMsg ('O compente foi atualizado${count}vez(es)')
}, [count])

  return(
    <View style= {{alignItems: 'center', top: 100}}>
      <Greeting name = 'Vitória' />
      <Image
      source= {{ uri: img }}
      style= {{ width: 200, height: 200, top: 50}}
      />

      <Button onPress = {() => Curtir()} title='Curtir' />
      <View style = {{ display: 'flex', flexDirection: 'row', alingItems: 'center',  top: 20}}>
        <Ionicons name= 'heart' size={28} color='red' />
        <Text style= {{ paddingHorizontal: 5, fontSize: 16}}> {count} Curtidas</Text>
      </View>
      <TouchableOpacity onPress = {() => setCount(0)} style= {{  width: 100, padding: 10, top: 50, backgroundColor: 'green', borderRadius: 81}}>
        <Text style={{ color: '#FFF', textAlign: 'center', fontSize: 18}}> Avançar </Text>
      </TouchableOpacity>
      <TextInput
      keyboardType='name-phone-pad'
      
      placeholder='Digite aqui...'
      style = {{ top: 80}}
      />
      <Text style= {{top: 100, fontSize: 1}}> {msg} </Text>
    </View>
  )}

