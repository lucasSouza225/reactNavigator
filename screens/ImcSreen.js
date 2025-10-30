import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

function Imc() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState('');

  function imc() {
    // Input validation
    if (!altura || !peso) {
      Alert.alert('Erro', 'Por favor, preencha ambos os campos!');
      return;
    }

    const p = parseFloat(peso);
    const a = parseFloat(altura);

    // Check if the inputs are valid numbers
    if (isNaN(p) || isNaN(a) || p <= 0 || a <= 0) {
      Alert.alert('Erro', 'Por favor, insira valores numéricos válidos!');
      return;
    }

    const calImc = p / (a * a);

    if (calImc < 18.5) {
      setResultado('Abaixo do peso');
    } else if (calImc >= 18.5 && calImc < 24.9) {
      setResultado('Peso normal');
    } else if (calImc >= 25.0 && calImc < 29.9) {
      setResultado('Sobrepeso');
    } else if (calImc >= 30.0 && calImc < 34.9) {
      setResultado('Obesidade I');
    } else if (calImc >= 35.0 && calImc < 39.9) {
      setResultado('Obesidade II');
    } else {
      setResultado('Obesidade III');
    }
  }

  return (
    <View style={estilos.container}>
      <Text style={estilos.title}>Calcule seu IMC</Text>

      <Text style={estilos.label}>Altura</Text>
      <TextInput
        style={estilos.input}
        placeholder="Digite sua altura"
        value={altura}
        keyboardType="numeric"
        onChangeText={setAltura}
      />
      <Text style={estilos.label}>Peso</Text>
      <TextInput
        style={estilos.input}
        placeholder="Digite seu peso"
        value={peso}
        keyboardType="numeric"
        onChangeText={setPeso}
      />

      <View style={estilos.container}>
        <Button
          onPress={imc}
          title="Calcule"
          color="#841584"
        />
      </View>

      {resultado && <Text style={estilos.resu}>{resultado}</Text>}
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
  resu: {
    fontSize: 18,
    marginTop: 20,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 25,
    marginBottom: 20,
    backgroundColor: "#add8e6",
    padding: 5,
    borderRadius: 6,
  },
  label: {
    fontSize: 14,
    color: '#4d494a',
    fontWeight: 'bold',
    marginBottom: 7,
  },
  input: {
    height: 40,
    width: '80%',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
});

export default Imc;
