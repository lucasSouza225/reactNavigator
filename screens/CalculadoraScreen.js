import {useState} from 'react'
import {View, Text, TextInput, Button, StyleSheet } from 'react-native';
const Calculadora = () => {
  const [num1, setnum1] = useState('')
  const [num2, setnum2] = useState('')
  const [resultado, setResultado] = useState('')
  function somar(){
    setResultado(+num1 + parseInt(num2))
  }
  function sub(){
    setResultado(+num1 - parseInt(num2))
  }
  function mult(){
    setResultado(+num1 * parseInt(num2))
  }
  function div(){
    setResultado(+num1 / parseInt(num2))
  }
  return(
    <View>
    <Text>Calculadora</Text>
    <Text>Numero 1</Text>
    <TextInput placeholder="Digite o 1º número" value={num1} onChangeText={setnum1}/>
    <Text>Numero 2</Text>
    <TextInput placeholder="Digite o 2º número" value={num2} onChangeText={setnum2}/> 
    <Button title="Somar" onPress={() => somar()} />
    <Button title="Subtrair" onPress={() => sub()} />
    <Button title="Multiplicar" onPress={() => mult()} />
    <Button title="Dividir" onPress={() => div()} />
    <Text>Resultado: {resultado}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
})
export default Calculadora